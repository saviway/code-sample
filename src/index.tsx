import React from 'react'

export type SimpleComponentProps = {
  text?: string
}

export function SimpleComponent(props: SimpleComponentProps): JSX.Element {
  return <div>{props.text ?? 'default text'}</div>
}
