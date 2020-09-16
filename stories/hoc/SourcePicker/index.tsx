import React, { useState } from 'react'
import { SourcePicker } from '../../../src/SourcePicker'
import { SelectedValue, SelectedValueType, VALUE_NONE } from '../../../src'
import { ISourceEntity } from '../../../src/domain/ISourceEntity'
import { generateFakeSources } from '../../../src/utils/fakeDataGenerator'
const FAKE_DATA = generateFakeSources(10)

export function SourcePickerHoc(): JSX.Element {
  const [value, setValue] = useState<SelectedValue<SelectedValueType, ISourceEntity | null>>({
    type: VALUE_NONE,
    value: null,
  })
  const onSelect = (v: SelectedValue<SelectedValueType, ISourceEntity | null>) => setValue(v)

  return (
    <div>
      <SourcePicker
        value={value}
        data={FAKE_DATA}
        onSelect={onSelect}
        allowFiltering
        allowSelectAllOption
      />
    </div>
  )
}
