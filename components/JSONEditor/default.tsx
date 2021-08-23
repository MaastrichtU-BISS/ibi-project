import React from 'react'
import JSONEditorNative from 'jsoneditor/dist/jsoneditor-minimalist'
import 'jsoneditor/dist/jsoneditor.css'
import { useForwardRef, wrapComponent } from 'colay-ui'

// import './fixAce.css'

export type JSONEditorProps = {
  value: any
  onChange: (value: any) => void
}

const JSONEditorDefault = (props: JSONEditorProps, forwardRef: any) => {
  const {
    style = {},
    value,
    name,
    theme,
    schema,
    schemaRefs,
    ...rest
  } = props
  const ref = useForwardRef(forwardRef)
  const containerRef = React.useRef()
  React.useEffect(() => {
    ref.current = new JSONEditorNative(containerRef.current, {
      ...rest,
      name,
      theme,
      schema,
      schemaRefs,
    })
    const jsonEditor = ref.current
    jsonEditor.set(value)
    return () => jsonEditor.destroy()
  }, [
    name,
    theme,
    schema,
    schemaRefs,
  ])
  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        ...style,
      }}
    />
  )
}

export const JSONEditor = wrapComponent(JSONEditorDefault, {
  isForwardRef: true,
})
