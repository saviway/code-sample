import React from 'react'
import { generateFakeSources } from '../../src/utils/fakeDataGenerator'
import { SourcePicker } from '../../src/SourcePicker/'
import { ISourcePickerProps } from '../../src/SourcePicker/SourcePicker'
import { VALUE_ALL, VALUE_SINGLE, VALUE_NONE } from '../../src'
import '../../src/styles.css'
import { StylesWrapper } from '../StylesWrapper/StylesWrapper'
import '../StylesWrapper/styles.css'
import { ISourceEntity } from '../../src/domain/ISourceEntity'
import { SourcePickerHoc } from '../hoc/SourcePicker'
import { action } from '@storybook/addon-actions'
const FAKE_SOURCES = generateFakeSources(10)

const defaultProps: Partial<ISourcePickerProps> = {
  value: { type: VALUE_ALL, value: null },
  data: FAKE_SOURCES,
  // onSelect: (value) => false, // commented for StoryBook's actions work
  allowSelectAllOption: true,
  allowFiltering: true,
  disabled: false,
  showInactiveInfo: false,
}

// ### DEFAULT
export const Default = (args: ISourcePickerProps) => (
  <StylesWrapper>
    <SourcePicker {...args} />
  </StylesWrapper>
)
Default.args = {
  ...defaultProps,
  onSelect: action('onSelect'),
} as ISourcePickerProps
// DefaultWithAllFeatures.args = {
//   value: { type: VALUE_ALL, value: null },
//   sources: FAKE_SOURCES,
//   // onSelect: (value) => false,
//   allowSelectAllOption: true,
//   disabled: false,
//   showInactiveInfo: true,
// } as SourcePickerProps

// ### WITHOUT SELECT ALL
export const WithoutSelectAll = (args: ISourcePickerProps) => (
  <StylesWrapper>
    <SourcePicker {...args} />
  </StylesWrapper>
)

WithoutSelectAll.args = {
  ...defaultProps,
  onSelect: action('onSelect'),
  allowSelectAllOption: false,
} as ISourcePickerProps

// ### WITH A SELECTED ITEM
export const WithSelectedItem = (args: ISourcePickerProps) => (
  <StylesWrapper>
    <SourcePicker {...args} />
  </StylesWrapper>
)

WithSelectedItem.args = {
  ...defaultProps,
  allowSelectAllOption: false,
  onSelect: action('onSelect'),
  value: { type: VALUE_SINGLE, value: FAKE_SOURCES[2] },
} as ISourcePickerProps

// ## WITH FILTERING
export const FilteredData = (args: ISourcePickerProps) => (
  <StylesWrapper>
    <SourcePicker {...args} />
  </StylesWrapper>
)

FilteredData.args = {
  ...defaultProps,
  allowSelectAllOption: true,
  allowFiltering: true,
  onSelect: action('onSelect'),
  value: { type: VALUE_NONE, value: null },
  filterFn: () => (s: ISourceEntity) => s.name === FAKE_SOURCES[3].name,
} as ISourcePickerProps

// ### WITH INACTIVE INFO
export const WithInactiveInfo = (args: ISourcePickerProps) => (
  <StylesWrapper>
    <SourcePicker {...args} />
  </StylesWrapper>
)

WithInactiveInfo.args = {
  ...defaultProps,
  allowSelectAllOption: true,
  onSelect: action('onSelect'),
  value: { type: VALUE_SINGLE, value: FAKE_SOURCES[2] },
  showInactiveInfo: true,
} as ISourcePickerProps
// ### DISABLED
export const Disabled = (args: ISourcePickerProps) => (
  <StylesWrapper>
    <SourcePicker {...args} />
  </StylesWrapper>
)

Disabled.args = {
  ...defaultProps,
  allowSelectAllOption: true,
  disabled: true,
  onSelect: action('onSelect'),
} as ISourcePickerProps

// ### INTERACTIVE EXAMPLE
export const Interactive = () => (
  <StylesWrapper>
    <SourcePickerHoc />
  </StylesWrapper>
)

// Interactive.args = {
//   ...defaultProps,
//   data: FAKE_SOURCES,
// } as ISourcePickerProps

// export default { title: 'SourcePicker', argTypes: { onSelect: { action: 'onSelect' } } }
export default { title: 'SourcePicker' }
