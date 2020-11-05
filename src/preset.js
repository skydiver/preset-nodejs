const { Preset } = require('use-preset');

module.exports = Preset.make('preset-nextjs')

  /**
   * Copy config files
   */
  .copyTemplates()

  /**
   * Install npm dependencies
   */
  .command()
    .title('Install dependencies')
    .run('npx', ['install-peerdeps', '--dev', 'eslint-config-wesbos'])
    .chain()

  /**
   * Sort package.json
   */
  .command()
    .title('Cleanup package.json')
    .run('npx', ['sort-package-json'])
    .chain();