import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

const routes: Route[] = [
 {
    path: 'lifecycle-hooks',
    loadChildren: () =>
      import('../lifecycle-hooks/lifecycle-hooks.module').then(
        (m) => m.LifecycleHooksModule
      ),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
