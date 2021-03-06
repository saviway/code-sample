import React, { useState, ChangeEvent, Fragment } from 'react'
import { SelectedValue, SelectedValueType, VALUE_SINGLE, VALUE_ALL } from '..'
import { ISourceEntity } from '../domain/ISourceEntity'
import clsx from 'clsx'
import { defaultInactiveComponent } from './DefaultInactiveComponent'
import { FilterableSource } from '../FilterableSource/FilterableSource'

export type SelectedSourceValue = SelectedValue<SelectedValueType, ISourceEntity | null>

export type SourcePickerComponentProps = {
  value: SelectedSourceValue
  data: Array<ISourceEntity>
  onSelect: (value: SelectedSourceValue) => void
  allowSelectAllOption?: boolean
  disabled?: boolean
  showInactiveInfo?: boolean
  inActiveComponent?: (ts: number) => JSX.Element
}

export interface ISourcePickerProps extends SourcePickerComponentProps {
  allowFiltering?: boolean
  filterFn?: (v: string) => (v: ISourceEntity) => boolean
}

/**
 * The clear component of SourcePicker without filtering (pure implementation)
 * @param props
 * @constructor
 */
export function SourcePickerComponent(props: SourcePickerComponentProps): JSX.Element {
  const {
    value,
    data,
    onSelect,
    allowSelectAllOption,
    disabled,
    showInactiveInfo,
    inActiveComponent,
  } = props
  const isSourceExists: boolean = data.length > 0
  // region handlers
  const onSelectAll = () =>
    allowSelectAllOption && !disabled ? onSelect({ type: VALUE_ALL, value: null }) : false
  const createOnSelectHandler = (value: ISourceEntity) => () =>
    !disabled ? onSelect({ type: VALUE_SINGLE, value }) : false
  // endregion

  const selectedEntity: ISourceEntity | null = value.value

  return (
    <div className={clsx('sources-list', { disabled })}>
      {!isSourceExists && <div className="empty">Selected venue does not provide sources</div>}

      {isSourceExists && (
        <ul className="sources-list_ul">
          {allowSelectAllOption && (
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
              onClick={createOnSelectHandler(s)}
              key={i}
              className={clsx(
                {
                  active: selectedEntity !== null && selectedEntity.id === s.id,
                  disabled,
                },
                'item'
              )}
            >
              {s.name}
              {showInactiveInfo && s.ended && true && (
                <Fragment>
                  {inActiveComponent
                    ? inActiveComponent(s.ended)
                    : defaultInactiveComponent(s.ended!)}
                </Fragment>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/**
 * Source Picker
 * @param props { ISourcePickerProps }
 * @constructor
 */
export function SourcePicker(props: ISourcePickerProps): JSX.Element {
  const { allowFiltering, filterFn, ...rest } = props
  const [filterValue, setFilterValue] = useState('')
  const disabled = rest.disabled

  const onFilterChange = (e: ChangeEvent<HTMLInputElement>) => setFilterValue(e.target.value)

  const filterFunction = filterFn
    ? filterFn(filterValue)
    : (entity: ISourceEntity) => entity.name.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1

  if (allowFiltering) {
    return (
      <div className="source-picker-wrapper">
        <div className="input_container">
          <input
            className="input"
            type="text"
            value={filterValue}
            onChange={onFilterChange}
            disabled={disabled}
            placeholder="type to filter"
          />
        </div>
        <FilterableSource
          component={SourcePickerComponent}
          targetProps={rest}
          filterFn={filterFunction}
        />
      </div>
    )
  }

  return (
    <div className="source-picker-wrapper">
      <SourcePickerComponent {...rest} />
    </div>
  )
}
