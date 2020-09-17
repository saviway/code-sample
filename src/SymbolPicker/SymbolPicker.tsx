import React, { ChangeEvent, useState } from 'react'
import { SelectedValue, SelectedValueType, VALUE_ALL, VALUE_SINGLE } from '..'
import { ISymbolEntity } from '../domain/ISymbolEntity'
import clsx from 'clsx'
import { FilterableSource } from '../FilterableSource/FilterableSource'

export type SymbolPickerComponentProps = {
  value: SelectedValue<SelectedValueType, ISymbolEntity | null>
  data: Array<ISymbolEntity>
  onSelect: (value: SelectedValue<SelectedValueType, ISymbolEntity | null>) => void
  allowSelectAllOption?: boolean
  disabled?: boolean
  showSourceName?: boolean
}

export interface ISymbolPickerProps extends SymbolPickerComponentProps {
  allowFiltering?: boolean
  filterFn?: (v: string) => (s: ISymbolEntity) => boolean
}

export function SymbolPickerComponent(props: SymbolPickerComponentProps): JSX.Element {
  const { value, data, onSelect, allowSelectAllOption, disabled, showSourceName } = props
  const isSymbolsExist: boolean = data.length > 0
  // region handlers
  const onSelectAll = () =>
    allowSelectAllOption && !disabled ? onSelect({ type: VALUE_ALL, value: null }) : false

  const createOnSelectHandler = (value: ISymbolEntity) => () =>
    !disabled ? onSelect({ type: VALUE_SINGLE, value }) : false
  // endregion
  const selectedEntity: ISymbolEntity | null = value.value

  return (
    <div className={clsx({ disabled }, 'symbols-list')}>
      {!isSymbolsExist && <div className="empty">Symbols is empty or hidden by filters</div>}

      <ul className="symbols-list_ul">
        {allowSelectAllOption && isSymbolsExist && (
          <li
            onClick={onSelectAll}
            className={clsx(
              { disabled: disabled, active: value.type === VALUE_ALL && !disabled },
              'select-all-item'
            )}
          >
            Select all
          </li>
        )}

        {data.map((s, i) => (
          <li
            key={i}
            onClick={createOnSelectHandler(s)}
            className={clsx({
              active: (selectedEntity !== null && selectedEntity.id === s.id) || value.type === VALUE_ALL,
              disabled,
            })}
          >
            {s.symbol}

            {showSourceName && s.sourceName && <span>{s.sourceName}</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function SymbolPicker(props: ISymbolPickerProps): JSX.Element {
  const { allowFiltering, filterFn, ...rest } = props
  const [filterValue, setFilterValue] = useState('')
  const onFilterChange = (e: ChangeEvent<HTMLInputElement>) => setFilterValue(e.target.value)
  const disabled = rest.disabled
  const filterFunction = filterFn
    ? filterFn(filterValue)
    : (entity: ISymbolEntity) =>
        entity.symbol.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1

  if (allowFiltering) {
    return (
      <div className="symbol-picker-wrapper">
        <input type="text" value={filterValue} onChange={onFilterChange} disabled={disabled} />
        <FilterableSource
          component={SymbolPickerComponent}
          targetProps={rest}
          filterFn={filterFunction}
        />
      </div>
    )
  }

  return (
    <div className="source-picker-wrapper">
      <SymbolPickerComponent {...rest} disabled={disabled} />
    </div>
  )
}
