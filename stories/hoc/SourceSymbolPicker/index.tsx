import React, { useState } from 'react'
import { SourceSymbolPicker } from '../../../src/SourceSymbolPicker'
import { generateFakeSources, generateSymbolsMap } from '../../../src/utils/fakeDataGenerator'
import { ISourceEntity } from '../../../src/domain/ISourceEntity'
import { ISymbolEntity } from '../../../src/domain/ISymbolEntity'
import { SelectedValue, SelectedValueType, VALUE_NONE } from '../../../src'
import { ISourcePickerProps } from '../../../src/SourcePicker/SourcePicker'
import { ISymbolPickerProps } from '../../../src/SymbolPicker/SymbolPicker'

const FAKE_SOURCE: Array<ISourceEntity> = generateFakeSources(10)
const FAKE_SYMBOLS: {[sourceIs: number]: ISymbolEntity[] } = generateSymbolsMap(FAKE_SOURCE, 20)

const sourcePickerOptions: Omit<ISourcePickerProps, 'value' | 'data' | 'onSelect'> = {
  showInactiveInfo: true,
  allowFiltering: true,
  allowSelectAllOption: true,
  disabled: false
}

const symbolPickerOptions: Omit<ISymbolPickerProps, 'value' | 'data' | 'onSelect' | 'showSourceName'> = {
  allowFiltering: true,
  allowSelectAllOption: true,
  disabled: false
}

export function SourceSymbolPickerHoc(): JSX.Element {
  const [source, setSource] = useState<SelectedValue<SelectedValueType, ISourceEntity | null>>({type: VALUE_NONE, value: null})
  const [symbol, setSymbol] = useState<SelectedValue<SelectedValueType, ISymbolEntity | null>>({type: VALUE_NONE, value: null})

  return (
    <div>
      <div>
        selected source
        <pre>
          {JSON.stringify(source)}
        </pre>
      </div>

      <div>
        selected symbol
        <pre>
          {JSON.stringify(symbol)}
        </pre>
      </div>
      <SourceSymbolPicker
        sources={FAKE_SOURCE}
        onSourceSelect={setSource}
        sourceValue={source}
        symbols={FAKE_SYMBOLS}
        onSymbolSelect={setSymbol}
        symbolValue={symbol}
        sourcePickerOptions={sourcePickerOptions}
        symbolPickerOptions={symbolPickerOptions}
      />
    </div>
  )
}
