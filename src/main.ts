import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { RootModule } from './root.module';

import { hmrBootstrap } from './hmr';


if (environment.production) {
  enableProdMode();
}

const bootstrap = () => {
  return platformBrowserDynamic().bootstrapModule(RootModule);
};

if (environment.hmr && module['hot']) {
  console.log('hmr mode');
  hmrBootstrap(module, bootstrap);
} else {
  console.log('default mode');
  bootstrap().catch(err => console.error(err));
}