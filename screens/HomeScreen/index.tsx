import { JSONEditor } from '@components/JSONEditor'
import { Lottie } from '@components/Lottie'
import { Paper } from '@components/Paper'
import { ScreenContainer } from '@components/ScreenContainer'
import {
  readTextFile,
} from '@utils'
import {
  useImmer,
} from 'colay-ui/hooks/useImmer'
import { download } from 'colay-ui/utils'
import * as R from 'colay/ramda'
import * as Clipboard from 'expo-clipboard'
import * as DocumentPicker from 'expo-document-picker'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import {
  Box,
  Button, Center, Divider, Heading, HStack, Stack, useToast,
} from 'native-base'
import React from 'react'
import 'react-native-gesture-handler'
import { DATA } from './data'
import { OverrideHTML } from './Override'

export const HomeScreen = () => {
  const toast = useToast()
  const initialData = React.useMemo(() => {
    const urlSearchParams = new URLSearchParams(window.location.search)
    const params = Object.fromEntries(urlSearchParams.entries())
    return params?.data && JSON.parse(params?.data)
  }, [])
  const [{
    data,
    status,
    formVisible,
    isDownloadingPDF,
    isDownloadingData,
  }, update] = useImmer({
    data: initialData ?? DATA,
    status: 'idle',
    formVisible: false,
    isDownloadingPDF: false,
    isDownloadingData: false,
  })

  const onCreateCharts = React.useCallback(
    async () => {
      try {
        const result = await DocumentPicker.getDocumentAsync({ type: 'application/json' })
        if (result.type === 'success') {
          const fileText = await readTextFile(result.file!)
          update((draft) => {
            draft.data = JSON.parse(fileText)
            draft.status = 'loading'
          })
          setTimeout(() => {
            update((draft) => {
              draft.status = 'idle'
            })
          }, 2500)
        }
      } catch (error) {
        console.error(error)
        toast.show({
          title: 'Something went wrong',
          status: 'error',
          description: JSON.stringify(error),
        })
      }
    },
    [],
  )
  const onShare = React.useCallback(() => {
    const link = `${window.location.origin}${window.location.pathname}?${jsonToQuery({ data })}`
    Clipboard.setString(link)
    toast.show({
      title: 'Share',
      description: 'Sharing link copied to clipboard!',
      status: 'success',
    })
  }, [data])
  const onDownloadData = React.useCallback(() => {
    toast.show({
      title: 'Download',
      description: 'Please wait!',
      status: 'success',
    })
    update((draft) => {
      draft.isDownloadingData = true
    })
    download(JSON.stringify(data), 'ibi-project.json')
    update((draft) => {
      draft.isDownloadingData = false
    })
  }, [data])
  const onDownloadPDF = React.useCallback(
    async () => {
      toast.show({
        title: 'Download',
        description: 'We are building the report. Please wait!',
        status: 'success',
      })
      update((draft) => {
        draft.isDownloadingPDF = true
      })
      setTimeout(async () => {
        const pages = ['pf1', 'pf2', 'pf3', 'pf4']
        const imageList = await R.mapAsync(async (pageId) => {
          const source = document.getElementById(pageId)
          const canvas = await html2canvas(source, {
            scale: 5,
          })
          return canvas.toDataURL('image/jpeg')
        })(pages)
        const doc = new jsPDF(
          'landscape',
        )
        imageList.map((imageData, index) => {
          if (index !== 0) {
            doc.addPage()
          }
          doc.setFontSize(40)
          doc.addImage(imageData, 'JPEG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight())// 297
          if (index === 0) {
            doc.setTextColor('#FFFFFF')
          }
        })
        doc.save('report.pdf')
      }, 500)
      update((draft) => {
        draft.isDownloadingPDF = false
      })
    },
    [data],
  )
  const onPressUpdateData = () => R.callLater(
    () => update((draft) => {
      draft.formVisible = !draft.formVisible
    }),
    0,
  )
  const onUpdateData = React.useMemo(() => R.debounce(
    ({ formData }) => {
      setTimeout(() => update((draft) => {
        draft.data = formData
      }), 0)
    },
    300,
  ), [])

  if (status === 'loading') {
    return (
      <Paper
        flex={1}
      >
        <Center
          flex={1}
          w="100%"
        >
          <Lottie
            source={{
              uri: 'https://assets5.lottiefiles.com/packages/lf20_yJ8wNO.json',
            }}
            style={{
              width: '55%',
              height: '65%',
            }}
            resizeMode="cover"
          />
          <Heading
            size="md"
            fontWeight="bold"
          >
            We're building your charts...
          </Heading>
        </Center>
      </Paper>
    )
  }
  return (
    <ScreenContainer
      scrollable
    >
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        p={3}
      >
        <Heading
          size="lg"
          fontWeight="bold"
        >
          Chart Creator
        </Heading>
        <HStack
          space="sm"
          alignItems="center"
        >
          {
          data
          && (
            <Stack
              direction="row"
              space={2}
            >
              <Button
                onPress={onDownloadPDF}
                isLoading={isDownloadingPDF}
              >
                Download PDF
              </Button>
              <Button
                onPress={onDownloadData}
                isLoading={isDownloadingData}
              >
                Download Data
              </Button>
              <Button
                onPress={onShare}
              >
                Share
              </Button>
              <Button
                onPress={onPressUpdateData}
              >
                { formVisible ? 'Close Form' : 'Update Data'}
              </Button>
            </Stack>
          )
}
          <Button
            onPress={onCreateCharts}
          >
            Create Charts
          </Button>
        </HStack>
      </Box>
      <Divider w="100%" />
      {
        !data
          ? (
            <>
              <Center
                flex={1}
              >
                <Lottie
                  source={{
                    uri: 'https://assets6.lottiefiles.com/packages/lf20_q5qeoo3q.json',
                  }}
                  style={{
                    width: '65%',
                    height: '73%',
                  }}
                  resizeMode="cover"
                />
                <Heading
                  size="md"
                  fontWeight="bold"
                >
                  Let's Build Perfect Charts!
                </Heading>
              </Center>
            </>
          )
          : (
            <>
              <Stack
                direction="row"
                space={2}
                height="100%"
              >
                <Box
                  flex={1}
                >
                  <OverrideHTML
                    data={data}
                  />
                </Box>
                {
              formVisible && (
                <Stack
                  flex={1}
                  height="100%"
                >
                  <JSONEditor
                    value={data}
                    onChange={(value) => onUpdateData({ formData: value })}
                  />
                </Stack>
              )
            }
              </Stack>
            </>
          )
      }
    </ScreenContainer>
  )
}

const jsonToQuery = (obj: any) => {
  const str = []
  for (const p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(`${encodeURIComponent(p)}=${
        encodeURIComponent(JSON.stringify(obj[p]))}`)
    }
  }
  return str.join('&')
}
