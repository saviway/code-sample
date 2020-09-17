import React from 'react'
import { generateFakeSymbols } from '../../src/utils/fakeDataGenerator'
import { VALUE_ALL, VALUE_SINGLE, VALUE_NONE } from '../../src'
import { action } from '@storybook/addon-actions'
import '../StylesWrapper/styles.css'
import { ISymbolPickerProps, SymbolPicker } from '../../src/SymbolPicker/SymbolPicker'
import { SymbolPickerHoc } from '../hoc/SymbolPicker'
import { StylesWrapper } from '../StylesWrapper/StylesWrapper'
import '../../src/styles.css'

const FAKE_SYMBOLS = generateFakeSymbols(15)

const defaultProps: Partial<ISymbolPickerProps> = {
  value: { type: VALUE_NONE, value: null },
  data: FAKE_SYMBOLS,
  allowSelectAllOption: true,
  allowFiltering: true,
  disabled: false,
  showSourceName: false,
}

// #### DEFAULT
export const Default = (args: ISymbolPickerProps) => (
  <StylesWrapper>
    <SymbolPicker {...args} />
  </StylesWrapper>
)

Default.args = {
  ...defaultProps,
  onSelect: action('onSelect'),
}

// #### WITH SELECTED SYMBOL
export const WithSelectedSymbol = (args: ISymbolPickerProps) => (
  <StylesWrapper>
    <SymbolPicker {...args} />
  </StylesWrapper>
)

WithSelectedSymbol.args = {
  ...defaultProps,
  value: { type: VALUE_SINGLE, value: FAKE_SYMBOLS[2] },
  onSelect: action('onSelect'),
} as ISymbolPickerProps

// #### WITH SELECTED ALL SYMBOLS
export const WithSelectedAllSymbols = (args: ISymbolPickerProps) => (
  <StylesWrapper>
    <SymbolPicker {...args} />
  </StylesWrapper>
)

WithSelectedAllSymbols.args = {
  ...defaultProps,
  value: { type: VALUE_ALL, value: null },
  onSelect: action('onSelect'),
} as ISymbolPickerProps

// #### EMPTY
export const Empty = (args: ISymbolPickerProps) => (
  <StylesWrapper>
    <SymbolPicker {...args} />
  </StylesWrapper>
)

Empty.args = {
  ...defaultProps,
  data: [],
  onSelect: action('onSelect'),
} as ISymbolPickerProps

// #### DISABLED
export const Disabled = (args: ISymbolPickerProps) => (
  <StylesWrapper>
    <SymbolPicker {...args} />
  </StylesWrapper>
)

Disabled.args = {
  ...defaultProps,
  disabled: true,
  onSelect: action('onSelect'),
} as ISymbolPickerProps

// #### INTERACTIVE
export const Interactive = () => (
  <StylesWrapper>
    <SymbolPickerHoc />
  </StylesWrapper>
)

export default { title: 'SymbolPicker' }
