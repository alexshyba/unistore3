import { Context, ManifestV2, enableContextDevTools } from '@uniformdev/context';
import { NextCookieTransitionDataStore } from '@uniformdev/context-next';
import { NextPageContext } from 'next';
import manifest from './manifest.json';

export function createUniformContext(serverContext?: NextPageContext) {
  const context = new Context({
    defaultConsent: true,
    manifest: manifest as ManifestV2,
    transitionStore: new NextCookieTransitionDataStore({
      serverContext,
    }),
    plugins: [enableContextDevTools()],
  });

  return context;
}
