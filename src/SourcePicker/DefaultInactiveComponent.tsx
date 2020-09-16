import React from 'react'

export type DefaultInactiveComponentProps = {
  ts: number
}

export function defaultInactiveComponent(ts: number): JSX.Element {
  return <span>{new Date(ts).toISOString()}</span>
}
