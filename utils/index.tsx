export const readTextFile = async (blob: Blob, encoding?: string) => new Promise<string>(
  (res, rej) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => {
      const { result } = reader
      // @ts-ignore
      res(result)
    })
    reader.addEventListener('error', (error) => {
      rej(error)
    })
    reader.readAsText(blob, encoding)
  },
)
