module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [
    {
      // https://www.npmjs.com/package/@storybook/addon-essentials
      name: '@storybook/addon-essentials',
      options: {
        // Valid addon keys include: actions, backgrounds, controls, docs, viewport, toolbars.
        // <addon-key>: false,
      },
    },
    // https://www.npmjs.com/package/@storybook/addon-actions
    "@storybook/addon-actions",
    // https://www.npmjs.com/package/@storybook/addon-links
    "@storybook/addon-links"
  ],
}
