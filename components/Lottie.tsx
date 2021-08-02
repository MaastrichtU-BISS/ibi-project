import React from 'react'
import * as lottie from 'lottie-web'
import { View } from 'react-native'
import { useForwardRef, wrapComponent } from 'colay-ui'
import * as R from 'colay/ramda'

export type LottieType = lottie.AnimationItem & {
  totalFrames: number;
}

const RESIZE_MODE = {
  center: 'xMidYMid meet',
  contain: 'xMinYMin meet',
  cover: 'none',
} as const

function LottieElement(
  props: LottieProps,
  forwardRef: React.ForwardedRef<LottieType>,
) {
  const {
    style,
    loop,
    source = { uri: 'https://assets2.lottiefiles.com/datafiles/Hc0DflKIkYg1j3u/data.json' },
    autoPlay = true,
    resizeMode = 'contain',
  } = props
  const animationRef = useForwardRef<lottie.AnimationItem>(forwardRef)
  const id = React.useMemo(() => R.uuid(), [])
  React.useEffect(
    () => {
      if (animationRef.current) {
        animationRef.current.destroy()
      }
      const animationContainerNode = document.getElementById(id)
      const animation = lottie.loadAnimation({
        container: animationContainerNode,
        renderer: 'svg',
        loop,
        autoplay: autoPlay,
        ...(
          // @ts-ignore
          source.uri
          // @ts-ignore
            ? { path: source.uri }
            : { animationData: source }
        ),
        rendererSettings: {
          preserveAspectRatio: RESIZE_MODE[resizeMode],
        },
      })
      animationRef.current = animation
      // @ts-ignore
      forwardRef?.(animation)
      return () => animationRef.current?.destroy()
    },
    [autoPlay, loop, source],
  )
  return (
    <View
    // @ts-ignore
      nativeID={id}
      style={style}
    />
  )
}

export const Lottie = wrapComponent<LottieProps>(
  LottieElement,
  {
    isForwardRef: true,
  },
)
