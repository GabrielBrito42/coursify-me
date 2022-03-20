import { Picker, PickerProps } from '@react-native-picker/picker'
import React from 'react'
import type { ReactElement, ReactNode } from 'react'

import * as S from './styles'

export type PickerData = {
  label: string
  value: string | number
}

interface Props extends PickerProps {
  title: string
  value?: PickerData[]
  children?: ReactNode
}

export const FilterInput: React.FC<Props> = ({
  title,
  value,
  children,
  ...rest
}: Props): ReactElement => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.PickerContainer>
        <Picker style={{ width: '100%' }} itemStyle={{fontFamily: 'Roboto_400Regular'}} mode="dropdown" {...rest}>
          {value?.map((item) => (
            <Picker.Item value={item.value} label={item.label} key={item.label} />
          ))}
        </Picker>
      </S.PickerContainer>
      {children}
    </S.Container>
  )
}
