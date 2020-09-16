import React, { PropsWithChildren } from 'react'

export type StylesWrapperProps = {
  wrapToClass?: string
}

/**
 * Styles wrapper for Stories
 * @param children
 * @constructor
 */
export function StylesWrapper({children, wrapToClass}: PropsWithChildren<any>): JSX.Element {
  return <div className={`${wrapToClass ? wrapToClass : ''} story-styles-wrapper`}>{children}</div>
}
