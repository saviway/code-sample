/**
 * Describes a selected value of both Source Picker and Symbol Picker
 */
export type SelectedValue<T, V> = {
  type: T
  value: V
}

// Following constants describe a Selected value of Source Picker and Symbol Picker
export const VALUE_ALL: SelectedValueType = 'ALL'
export const VALUE_SINGLE: SelectedValueType = 'SINGLE'
export const VALUE_NONE: SelectedValueType = 'NONE'
export type SelectedValueType = 'ALL' | 'SINGLE' | 'NONE'
