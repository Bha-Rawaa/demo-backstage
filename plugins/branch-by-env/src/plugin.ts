import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const branchByEnvPlugin = createPlugin({
  id: 'branch-by-env',
  routes: {
    root: rootRouteRef,
  },
});

export const BranchByEnvPage = branchByEnvPlugin.provide(
  createRoutableExtension({
    name: 'BranchByEnvPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
