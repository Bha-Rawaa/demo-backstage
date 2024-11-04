import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { branchByEnvPlugin, BranchByEnvPage } from '../src/plugin';

createDevApp()
  .registerPlugin(branchByEnvPlugin)
  .addPage({
    element: <BranchByEnvPage />,
    title: 'Root Page',
    path: '/branch-by-env',
  })
  .render();
