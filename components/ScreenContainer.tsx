import React from 'react'
import {
  ScrollView as NativeScrollView,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { Paper, PaperProps } from '@components/Paper'
import { KeyboardAvoidingView, Spinner } from 'native-base'

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
  isLoading?: boolean;
  hasKeyboardAvoidingView?: boolean;
} & PaperProps

export function ScreenContainer({
  scrollable = false,
  hasKeyboardAvoidingView = false,
  children,
  isLoading,
  ...rest
}: Props) {
  const Container = hasKeyboardAvoidingView
    ? KeyboardAvoidingView
    : React.Fragment
  if (isLoading) {
    return (
      <Paper
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Spinner />
      </Paper>
    )
  }
  return (
    <Paper
      flex={1}
      safeArea
      {...rest}
    >
      {scrollable ? (
        <Container
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <ScrollView style={{
            width: '100%',
            height: '100%',
          }}
          >
            {children}
          </ScrollView>
        </Container>
      ) : (
        <Container
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          {children}
        </Container>
      )}
    </Paper>
  )
}
