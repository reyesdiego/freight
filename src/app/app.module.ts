import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserCreateComponent } from './user-create/user-create.component';


const appRoutes: Routes = [
  {
    path: 'users',
    component: UserComponent,
    data: { title: 'Usuarios' }
  },
  {
    path: 'user-details/:id',
    component: UserDetailComponent,
    data: { title: 'Detalle Usuarios' }
  },
  {
    path: 'user-create',
    component: UserCreateComponent,
    data: { title: 'Crear Usuario' }
  },
  { path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailComponent,
    UserCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
