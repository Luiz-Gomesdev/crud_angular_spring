import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Project } from './../model/project';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) { }

  list(): Project[] {
    return [
      {_id: '1', name: 'Angular', category: 'front-end'}
    ];
  }
}
