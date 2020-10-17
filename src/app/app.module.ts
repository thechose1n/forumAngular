import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ThreadsComponent } from './threads/threads.component';
import {
    MatButtonModule, MatCardModule, MatChipsModule,
    MatDialogModule,
    MatFormFieldModule, MatGridListModule,
    MatIconModule,
    MatInputModule, MatListModule,
    MatToolbarModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { InputWindowComponent } from './input-window/input-window.component';
import { RouterModule, Routes } from '@angular/router';
import { ThreadDetailComponent } from './thread-detail/thread-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'threads', pathMatch: 'full' },
  { path: 'threads', component: ThreadsComponent},
  { path: 'thread/:id', component: ThreadDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    ThreadsComponent,
    InputWindowComponent,
    ThreadDetailComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        MatDialogModule,
        MatCardModule,
        MatListModule,
        RouterModule.forRoot(appRoutes),
        MatChipsModule,
        MatGridListModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
    ],
  providers: [ToolBarComponent],
  bootstrap: [AppComponent],
  entryComponents: [InputWindowComponent]
})


export class AppModule { }
