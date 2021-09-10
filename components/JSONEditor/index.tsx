import React from 'react'
import { JsonEditor as Editor } from 'jsoneditor-react'
import ace from 'brace'
import 'brace/mode/json'
import 'brace/theme/github'
import 'brace/theme/tomorrow_night_blue'

export type JSONEditorProps = {
  value: any
  onChange: (value: any) => void
}

export const JSONEditor = (props: JSONEditorProps) => {
  const {
    onChange,
    value,
  } = props
  return (
    <>
      <Editor
        htmlElementProps={{
          style: {
            width: '100%',
            height: '100%',
          },
        }}
        ace={ace}
        value={value}
        onChange={onChange}
        theme="ace/theme/tomorrow_night_blue"
      />
    </>
  )
}
