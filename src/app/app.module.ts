import { ProfessorUpdadeComponent } from './components/professor/professor-updade/professor-updade.component';
import { ProfessorReadComponent } from './components/professor/professor-read/professor-read.component';
import { ProfessorDeleteComponent } from './components/professor/professor-delete/professor-delete.component';
import { ProfessorCreateComponent } from './components/professor/professor-create/professor-create.component';
import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatMenuModule} from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { AlunoReadComponent } from './components/aluno/aluno-read/aluno-read.component';
import { AlunoCreateComponent } from './components/aluno/aluno-create/aluno-create.component';
import { AlunoUpdateComponent } from './components/aluno/aluno-update/aluno-update.component';
import { AlunoDeleteComponent } from './components/aluno/aluno-delete/aluno-delete.component';
import { MatNativeDateModule } from '@angular/material/core';

import { ObservacoesReadComponent } from './components/observacoes/observacoes-read/observacoes-read.component';
import { ObservacoesCreateComponent } from './components/observacoes/observacoes-create/observacoes-create.component';
import { ObservacoesUpdateComponent } from './components/observacoes/observacoes-update/observacoes-update.component';
import { ObservacoesDeleteComponent } from './components/observacoes/observacoes-delete/observacoes-delete.component';
import { AulasLecionadasReadComponent } from './components/aulasLecionadas/aulas-lecionadas-read/aulas-lecionadas-read.component';
import { AulasLecionadasCreateComponent } from './components/aulasLecionadas/aulas-lecionadas-create/aulas-lecionadas-create.component';
import { AulasLecionadasUpdateComponent } from './components/aulasLecionadas/aulas-lecionadas-update/aulas-lecionadas-update.component';
import { AulasLecionadasDeleteComponent } from './components/aulasLecionadas/aulas-lecionadas-delete/aulas-lecionadas-delete.component';
import { DisciplinaReadComponent } from './components/disciplina/disciplina-read/disciplina-read.component';
import { DisciplinaUpdateComponent } from './components/disciplina/disciplina-update/disciplina-update.component';
import { DisciplinaDeleteComponent } from './components/disciplina/disciplina-delete/disciplina-delete.component';
import { TurmaReadComponent } from './components/turma/turma-read/turma-read.component';
import { ObservacoesViewsComponent } from './components/observacoes/observacoes-views/observacoes-views.component';
import { AulasLecionadasViewsComponent } from './components/aulasLecionadas/aulas-lecionadas-views/aulas-lecionadas-views.component';
import { TurmaCreateComponent } from './components/turma/turma-create/turma-create.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxMaskModule } from 'ngx-mask';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { DisciplinaCreateComponent } from './components/disciplina/disciplina-create/disciplina-create.component';
import { TurmaDeleteComponent } from './components/turma/turma-delete/turma-delete.component';
import { TurmaUpdateComponent } from './components/turma/turma-update/turma-update.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent,
    AlunoReadComponent,
    AlunoCreateComponent,
    AlunoUpdateComponent,
    AlunoDeleteComponent,
    ProfessorCreateComponent,
    ProfessorDeleteComponent,
    ProfessorReadComponent,
    ProfessorUpdadeComponent,
    ObservacoesReadComponent,
    ObservacoesCreateComponent,
    ObservacoesUpdateComponent,
    ObservacoesDeleteComponent,
    AulasLecionadasReadComponent,
    AulasLecionadasCreateComponent,
    AulasLecionadasUpdateComponent,
    AulasLecionadasDeleteComponent,
    DisciplinaReadComponent,
    DisciplinaCreateComponent,
    DisciplinaUpdateComponent,
    DisciplinaDeleteComponent,
    TurmaReadComponent,
    TurmaCreateComponent,
    ObservacoesViewsComponent,
    AulasLecionadasViewsComponent,
    LoginComponent,
    TurmaDeleteComponent,
    TurmaUpdateComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatMenuModule,
    MatNativeDateModule,
    MatCheckboxModule, 
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true
    }),
    NgxMaskModule.forRoot()
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}, AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
