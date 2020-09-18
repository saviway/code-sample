import React from 'react'
// import { VALUE_ALL, VALUE_SINGLE, VALUE_NONE } from '../../src'
import { SourceSymbolPickerProps } from '../../src/SourceSymbolPicker/SourceSymbolPicker'
import { SourceSymbolPickerHoc } from '../hoc/SourceSymbolPicker'
import { StylesWrapper } from '../StylesWrapper/StylesWrapper'
import '../../src/styles.css'

export const Interactive = () => (
  <StylesWrapper>
    <SourceSymbolPickerHoc />
  </StylesWrapper>
)

export default { title: 'SourceSymbolPicker' }
