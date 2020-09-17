import React from 'react'
import { ISourcePickerProps } from '../SourcePicker/SourcePicker'
import { ISymbolPickerProps } from '../SymbolPicker/SymbolPicker'
import { ISourceEntity } from '../domain/ISourceEntity'
import { ISymbolEntity } from '../domain/ISymbolEntity'

export type FilterableSourceProps = {
  // component: JSX.Element
  component: React.ElementType
  targetProps: ISourcePickerProps | ISymbolPickerProps
  filterFn: (v: any) => any
}

export function FilterableSource(props: FilterableSourceProps): JSX.Element {
  const { component, targetProps, filterFn } = props
  const componentProps = {
    ...targetProps,
    data: (targetProps.data as Array<ISourceEntity | ISymbolEntity>).filter(filterFn),
  }
  const Component = component
  return <Component {...componentProps} />
}
