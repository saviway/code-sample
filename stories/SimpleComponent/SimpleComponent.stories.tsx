import React from 'react'

import { SimpleComponent, SimpleComponentProps } from '../../src'

export default { title: 'SimpleComponent' }

export const withSimpleText = (args: SimpleComponentProps) => (
  <SimpleComponent {...args} />
)

withSimpleText.args = { text: 'hello' }
// https://github.com/storybookjs/storybook/blob/next/addons/controls/README.md#how-do-i-migrate-from-addon-knobs
export const withDefaultText = () => (
  <SimpleComponent />
)
