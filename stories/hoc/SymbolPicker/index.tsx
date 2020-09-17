import React, { useState } from 'react'

import { generateFakeSymbols } from '../../../src/utils/fakeDataGenerator'
import { SymbolPicker } from '../../../src/SymbolPicker/SymbolPicker'
import { SelectedValue, SelectedValueType, VALUE_NONE } from '../../../src'
import { ISymbolEntity } from '../../../src/domain/ISymbolEntity'
const FAKE_DATA = generateFakeSymbols(10)

export function SymbolPickerHoc(): JSX.Element {
  const [value, setValue] = useState<SelectedValue<SelectedValueType, ISymbolEntity | null>>({
    type: VALUE_NONE,
    value: null,
  })
  const onSelect = (v: SelectedValue<SelectedValueType, ISymbolEntity | null>) => setValue(v)

  return (
    <div>
      <SymbolPicker
        value={value}
        data={FAKE_DATA}
        onSelect={onSelect}
        allowFiltering
        allowSelectAllOption
        showSourceName
      />
    </div>
  )
}
