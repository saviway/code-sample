import React from 'react'
import { ISourceEntity } from '../domain/ISourceEntity'
import { SelectedValue, SelectedValueType, SourcePicker, VALUE_ALL } from '..'
import { ISymbolEntity } from '../domain/ISymbolEntity'
import { ISourcePickerProps } from '../SourcePicker/SourcePicker'
import { ISymbolPickerProps, SymbolPicker } from '../SymbolPicker/SymbolPicker'
import { flattenSymbols } from '../utils/flattenSymbols'

export type SourceOptions = Omit<ISourcePickerProps, 'value' | 'data' | 'onSelect'>
export type SymbolOptions = Omit<ISymbolPickerProps, 'value' | 'data' | 'onSelect' | 'showSourceName'>

export type SourceSymbolPickerProps = {
  sources: Array<ISourceEntity>
  onSourceSelect: (val: SelectedValue<SelectedValueType, ISourceEntity | null>) => void
  sourceValue: SelectedValue<SelectedValueType, ISourceEntity | null>

  symbols: { [sourceId: number]: Array<ISymbolEntity> }
  onSymbolSelect: (val: SelectedValue<SelectedValueType, ISymbolEntity | null>) => void
  symbolValue: SelectedValue<SelectedValueType, ISymbolEntity | null>

  sourcePickerOptions?: SourceOptions
  symbolPickerOptions?: SymbolOptions
}

export function SourceSymbolPicker(props: SourceSymbolPickerProps): JSX.Element {
  const {
    sources,
    sourceValue,
    onSourceSelect,
    sourcePickerOptions,

    symbols,
    symbolValue,
    onSymbolSelect,
    symbolPickerOptions,
  } = props

  const symbolsDataSet =
    sourceValue.value !== null && symbols[sourceValue.value.id] !== undefined
      ? symbols[sourceValue.value.id]
      : flattenSymbols(symbols)

  return (
    <div className="source-symbol-picker">
      <div className="source-symbol-picker_column sources-section">
        <SourcePicker
          value={sourceValue}
          data={sources}
          onSelect={onSourceSelect}
          {...sourcePickerOptions}
        />
      </div>
      <div className="source-symbol-picker_column symbols-section">
        <SymbolPicker
          value={symbolValue}
          data={symbolsDataSet}
          onSelect={onSymbolSelect}
          showSourceName={sourceValue.type === VALUE_ALL}
          {...symbolPickerOptions}
        />
      </div>
    </div>
  )
}
