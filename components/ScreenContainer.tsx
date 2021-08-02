import React from 'react'
import {
  ScrollView as NativeScrollView,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { Paper, PaperProps } from '@components/Paper'
import { KeyboardAvoidingView } from 'native-base'

function ScrollView({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <NativeScrollView
      contentContainerStyle={[
        {
          flexGrow: 1,
        },
        style,
      ]}
    >
      {children}
    </NativeScrollView>
  )
}

type Props = {
  scrollable?: boolean;
  hasKeyboardAvoidingView?: boolean;
} & PaperProps

export function ScreenContainer({
  scrollable = false,
  hasKeyboardAvoidingView = false,
  children,
  ...rest
}: Props) {
  const Container = hasKeyboardAvoidingView
    ? KeyboardAvoidingView
    : React.Fragment
  return (
    <Paper
      flex={1}
      safeArea
      {...rest}
    >
      {scrollable ? (
        <ScrollView style={{
          width: '100%',
          height: '100%',
        }}
        >
          <Container
            style={{
              width: '100%',
              height: '100%',
            }}
          >
            {children}
          </Container>
        </ScrollView>
      ) : (
        <Container
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          children
        </Container>
      )}
    </Paper>
  )
}
