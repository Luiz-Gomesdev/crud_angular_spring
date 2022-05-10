import { CoursesService } from './../services/courses.service';
import { Project } from './../model/project';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];
  displayedColumns = ['name', 'category'];


  constructor(private coursesService: CoursesService) {
  }

  ngOnInit(): void {
    this.projects = this.coursesService.list();
  }

}
