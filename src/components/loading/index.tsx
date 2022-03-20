import React from 'react'
import type { ReactElement } from 'react'
import { ActivityIndicator } from 'react-native'

import * as S from './styles'

export const Loading: React.FC = (): ReactElement => (
  <S.Container>
    <ActivityIndicator size="large" color="#000000" />
  </S.Container>
)
