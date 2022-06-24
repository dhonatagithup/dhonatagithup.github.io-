import { AulaService } from './../../../../services/aula.servic';
import { Router } from '@angular/router';
import { AlunoService } from 'src/app/services/aluno.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Aula } from 'src/app/models/aula';

@Component({
  selector: 'app-aula-read',
  templateUrl: './aula-read.component.html',
  styleUrls: ['./aula-read.component.css']
})
export class AulaReadComponent implements OnInit {

  aulas: Aula[] = [];

  displayedColumns: string[] = ['id', 'data', 'horaInicio', 'horaFim', 'nomeProfessor', 'conteudo', 'action'];
  dataSource = new MatTableDataSource<Aula>(this.aulas);
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
   
  constructor(
    private service : AulaService,
    private router : Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  ngAfterViewInit() {
          this.findAll();
  }

  navigateTurmaAlunos():void {
    this.router.navigate(['turmaAlunos'])
  }

  findAll():void {
    this.service.findAll().subscribe((resposta) => {
      this.aulas = resposta;
      this.dataSource = new MatTableDataSource<Aula>(this.aulas);
      this.dataSource.paginator = this.paginator;
    })
  }

  navigateToCreate():void {
    this.router.navigate(['aulaRegistrar/create'])
  }

}
