import * as ChartExamples from '@components/ChartExamples'
import { IconSet } from '@components/IconSet'
// import Form from 'colay-form'
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
import * as R from 'colay/ramda'
import * as Clipboard from 'expo-clipboard'
import * as DocumentPicker from 'expo-document-picker'
// import { PDFDocument } from 'pdf-lib'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import {
  Box,
  Button, Center, Divider, Heading, HStack, Stack, useColorMode, useToast,
} from 'native-base'
import React from 'react'
import { useWindowDimensions } from 'react-native'
import 'react-native-gesture-handler'
import { download } from 'colay-ui/utils'
// import { DATA as SAMPLE_DATA } from '../../constants'
import { OverrideHTML, Pages } from './Override'

const CHART_KEYS = Object.keys(ChartExamples).sort((a, b) => b > a)

export const HomeScreen = (props: any) => {
  const { } = props
  const toast = useToast()
  const windowDimensions = useWindowDimensions()
  const initialData = React.useMemo(() => {
    const urlSearchParams = new URLSearchParams(window.location.search)
    const params = Object.fromEntries(urlSearchParams.entries())
    return params?.data && JSON.parse(params?.data)
  }, [])
  const [{
    data,
    status,
    formVisible,
    isDownloading,
  isDownloadingData,
  }, update] = useImmer({
    data: initialData,// ?? Pages,
    status: 'idle',
    formVisible: false,
    isDownloading: false,
    isDownloadingData: false,
  })
  const { toggleColorMode } = useColorMode()

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
  const onDownload = React.useCallback(
    async () => {
      toast.show({
        title: 'Download',
        description: 'We are building the report. Please wait!',
        status: 'success',
      })
      update((draft) => {
        draft.isDownloading = true
      })
      setTimeout(async () => {
        const width = 1180// source?.scrollWidth
        const height = 900// source?.scrollHeight || 1000
        // return
        const pages = ['pf1', 'pf2', 'pf3', 'pf4'] // , 'pf2', 'pf3', 'pf4'
        const imageList = await R.mapAsync(async (pageId) => {
          const source = document.getElementById(pageId)
          // const source = document.getElementById('ChartContainer')
          const canvas = await html2canvas(source, {
            windowWidth: width, // source?.scrollWidth,
            windowHeight: height, // source?.scrollHeight,
            width,
            height,
          })
          return canvas.toDataURL('image/jpeg')
        // const imageData = canvas.toDataURL
        // canvas.toBlob((blob) => {
        //   window.open(URL.createObjectURL(blob), '__blank')
        //   // download(blob, {
        //   //   name: 'charts.jpeg',
        //   //   // mimeType: '"application/pdf"',
        //   // })
        // })
        })(pages)
        const doc = new jsPDF({
          orientation: 'landscape',
        // unit: 'px',
        // hotfixes: ['px_scaling'],
        })
        imageList.map((imageData, index) => {
          if (index !== 0) {
            doc.addPage()
          }
          //   doc.setFontSize(40)
          //   doc.addImage(imageData, 'JPEG', 0, 30, 210, 217)// 297
          //   // doc.addImage(imageData, 'JPEG', 0, 80, 795, 850)// 3508
          //   if (index === 0) {
          //     doc.setTextColor('#FFFFFF')
          //     doc.setFontSize(24)
          //     doc.text('PENSIOENFONDS X ', 5, 60)
          //     doc.setFontSize(12)
          //     doc.text('UITVOERINGSKOSTEN IN CONTEXT ', 5, 68)
          //     doc.setFontSize(9)
          //     doc.text('IBI BENCHMARKING', 5, 82)
          //     doc.setFontSize(7)
          //     doc.text('info@institutionalbenchmarking.org', 50, 82)
          //   }
          // })
          doc.setFontSize(40)
          doc.addImage(imageData, 'JPEG', 0, 0, 297, 210)// 297
          // doc.addImage(imageData, 'JPEG', 0, 80, 795, 850)// 3508
          if (index === 0) {
            const MARGIN = 10
            doc.setTextColor('#FFFFFF')
            doc.setFontSize(24)
            doc.text('PENSIOENFONDS X ', 5, MARGIN + 20)
            doc.setFontSize(12)
            doc.text('UITVOERINGSKOSTEN IN CONTEXT ', 5, MARGIN + 28)
            doc.setFontSize(9)
            doc.text('IBI BENCHMARKING', 5, MARGIN + 42)
            doc.setFontSize(7)
            doc.text('info@institutionalbenchmarking.org', 50, MARGIN + 42)
          }
        })
        doc.save('report.pdf')
      }, 500)
      update((draft) => {
        draft.isDownloading = false
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
          {/* {data ? 'Results' : 'Chart Creator' } */}
          Chart Creator
        </Heading>
        <HStack
          space="sm"
          alignItems="center"
        >
          <IconSet
            name="theme-light-dark"
            onPress={toggleColorMode}
          />

          {
          data
          && (
            (
              <Button
                onPress={onDownload}
                isLoading={isDownloading}
              >
                Download PDF
              </Button>
            )
          )
}
          {
          data
          && (
            (
              <Button
                onPress={onDownloadData}
                isLoading={isDownloadingData}
              >
                Download Data
              </Button>
            )
          )
}
          {
          data
          && (
            (
            <Button
              onPress={onShare}
            >
              Share
            </Button>
            )
          )
}
          {
          data
          && true && (
          <Button
            onPress={onPressUpdateData}
          >
            { formVisible ? 'Close Form' : 'Update Data'}
          </Button>
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
              {/* <PresenceTransition
                visible
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1000,
                  },
                }}
                style={{
                  width: '100%',
                  height: '90%',
                }}
              > */}
              <Stack
                direction="row"
                space={2}
                height="100%"
              >
                <Box
                  flex={1}
                >
                  {/* <ScrollView
                      style={{
                        width: '100%',
                        height: '100%',
                      }}
                    > */}

                  <OverrideHTML
                    data={data}
                  />

                  {/* </ScrollView> */}

                  {/* <FlatList
                      key={`FlatList:${numColumns}`}
                      style={{
                        flex: 1,
                      }}
                      nativeID="ChartContainer"
                  // extraData={[window.width]}
                      numColumns={numColumns}
                      data={CHART_KEYS}// CHART_KEYS}
                      {...(
                  numColumns > 1
                    ? {
                      columnWrapperStyle: {
                        justifyContent: 'space-around',
                      },
                    }
                    : {}
                    )}
                      renderItem={({ item: chartName }) => {
                        const Chart = ChartExamples[chartName]
                        return (
                          <Box
                            p={2}
                            h={400}
                            w={windowDimensions.width}
                            alignItems="center"
                            justifyContent="center"
                            nativeID={`ChartContainer${chartName}`}
                          >
                            <Chart
                              data={data[chartName]}
                            />
                          </Box>
                        )
                      }}
                    /> */}
                </Box>
                {
              formVisible && (
                <Stack
                  flex={1}
                  // height={500}
                  height="100%"
                >
                  {/* <Form
                    formData={data}
                    schema={INPUT_JSON_SCHEMA}
                    onChange={onUpdateData}
                  /> */}
                  <JSONEditor
                    value={data}
                    onChange={(value) => onUpdateData({ formData: value })}
                  />
                </Stack>
              )
            }
              </Stack>

              {/* </PresenceTransition> */}

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
      str.push(`${encodeURIComponent(p)}=${encodeURIComponent(JSON.stringify(obj[p]))}`)
    }
  }
  return str.join('&')
}
