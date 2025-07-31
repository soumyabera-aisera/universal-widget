import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'aisera-universal-widget',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      dir: 'dist/components'
    }
  ],
  buildEs5: false
};