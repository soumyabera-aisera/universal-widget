import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'universal-widget',
  outputTargets: [
    {
      type: 'dist-custom-elements',
    },
  ],
};