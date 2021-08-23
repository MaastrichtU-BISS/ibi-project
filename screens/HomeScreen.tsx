import * as ChartExamples from '@components/ChartExamples'
import { IconSet } from '@components/IconSet'
import { Lottie } from '@components/Lottie'
import { Paper } from '@components/Paper'
import * as R from 'colay/ramda'
import {
  readTextFile,
} from '@utils'
import * as DocumentPicker from 'expo-document-picker'
import {
  Box,
  Button, Center, Divider, FlatList,
  Heading, HStack, PresenceTransition,
  useBreakpointValue, useColorMode, useToast,
  Stack,
} from 'native-base'
import React from 'react'
import { useWindowDimensions } from 'react-native'
import * as Clipboard from 'expo-clipboard'
// import { PDFDocument } from 'pdf-lib'
// import * as R from 'colay/ramda'
import html2canvas from 'html2canvas'
// import Form from 'colay-form'
import { JSONEditor } from '@components/JSONEditor'
import { ScreenContainer } from '@components/ScreenContainer'
import {
  download,
} from 'colay-ui/utils/download'
import { INPUT_JSON_SCHEMA } from '../constants/inputJsonSchema'
import { DATA as SAMPLE_DATA } from '../constants'

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
  const [data, setData] = React.useState(initialData)
  const [status, setStatus] = React.useState('idle')
  const [formVisible, setFormVisible] = React.useState(false)
  const { toggleColorMode } = useColorMode()
  const numColumns = useBreakpointValue({
    base: 1,
    md: 1,
  })
  const onCreateCharts = React.useCallback(
    async () => {
      try {
        const result = await DocumentPicker.getDocumentAsync({ type: 'application/json' })
        if (result.type === 'success') {
          const fileText = await readTextFile(result.file!)
          setData(JSON.parse(fileText))
          setStatus('loading')
          setTimeout(() => setStatus('idle'), 2500)
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
  const onDownload = React.useCallback(
    async () => {
      // const pdfDoc = await PDFDocument.create()
      // try {
      //   let index = 0
      //   await R.mapAsyncSeries(
      //     async (chartName) => {
      //       try {
      //         const page = pdfDoc.addPage()
      // const source = document.getElementById(`ChartContainer${chartName}`)
      // const width = source?.scrollWidth
      // const height = source?.scrollHeight
      // const canvas = await html2canvas(source, {
      //   windowWidth: source?.scrollWidth,
      //   windowHeight: source?.scrollHeight,
      //   width,
      //   height,
      // })
      //         const arrayBuffer = await new Promise(async (res, rej) => {
      //           canvas.toBlob((blob) => {
      //             const reader = new FileReader()
      //             reader.addEventListener('loadend', () => {
      //               const arrayBuffer = reader.result
      //               // Dispay Blob content in an Image.
      //               const blob = new Blob([arrayBuffer], { type: 'image/jpg' })
      //               res(arrayBuffer)
      //             })
      //             reader.readAsArrayBuffer(blob)
      //           }, 'image/jpg')
      //         })
      //         // canvas.getContext('2d')?.scale(1 / (width / 1123), 1 / (height / 794))
      //         await pdfDoc.embedJpg(
      //           arrayBuffer,
      //         )
      //         // canvas.toBlob((blob) => {
      //         //   window.open(URL.createObjectURL(blob), '__blank')
      //         // })
      //         index += 1
      //       } catch (error) {
      //         console.log(error)
      //       }
      //       return 1
      //     },
      //   )(CHART_KEYS)
      //   console.log('FINISH')
      //   const pdfBytes = await pdfDoc.save()

      // Trigger the browser to download the PDF document
      // download(pdfBytes, {
      //   name: 'pdf-lib_image_embedding_example.pdf',
      //   mimeType: '"application/pdf"',
      // })
      // } catch (error) {
      //   console.error(error)
      //   toast.show({
      //     title: 'Something went wrong',
      //     status: 'error',
      //     description: error.message,
      //   })
      // }
      const source = document.getElementById('ChartContainer')
      const width = source?.scrollWidth
      const height = source?.scrollHeight
      const canvas = await html2canvas(source, {
        windowWidth: source?.scrollWidth,
        windowHeight: source?.scrollHeight,
        width,
        height,
      })
      canvas.toBlob((blob) => {
        window.open(URL.createObjectURL(blob), '__blank')
        download(blob, {
          name: 'charts.jpeg',
          // mimeType: '"application/pdf"',
        })
      })
    },
    [data],
  )
  const onPressUpdateData = () => R.callLater(
    () => setFormVisible(!formVisible),
    0,
  )
  const onUpdateData = React.useMemo(() => R.debounce(
    ({ formData }) => {
      setTimeout(() => setData(formData), 0)
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
            false && (
              <Button
                onPress={onDownload}
              >
                Download
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
              <PresenceTransition
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
              >
                <Stack
                  direction="row"
                  space={2}
                  height="100%"
                >
                  <Center
                    flex={1}
                  >
                    <FlatList
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
                    />
                  </Center>
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

              </PresenceTransition>

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
