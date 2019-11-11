import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'metals', pathMatch: 'full' },
  {
    path: 'metals',
    children: [
      {
        path: '',
        loadChildren: './metals/metals.module#MetalsPageModule'
      },
      {
        path: ':metalId',
        loadChildren: './metals/metal-detail/metal-detail.module#MetalDetailPageModule'
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
