import React from 'react'
import { ISourcePickerProps } from '../SourcePicker/SourcePicker'

export type FilterableSourceProps = {
  // component: JSX.Element
  component: React.ElementType
  targetProps: ISourcePickerProps
  filterFn: (v: any) => any
}

export function FilterableSource(props: FilterableSourceProps): JSX.Element {
  const { component, targetProps, filterFn } = props
  const componentProps = {
    ...targetProps,
    data: targetProps.data.filter(filterFn),
  }
  const Component = component
  return <Component {...componentProps} />
}
