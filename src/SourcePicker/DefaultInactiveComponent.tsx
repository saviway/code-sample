import React from 'react'

export type DefaultInactiveComponentProps = {
  ts: number
}

export function defaultInactiveComponent(ts: number): JSX.Element {
  return <span>Inactive since: {new Date(ts).toISOString()}</span>
}
