import { Component, OnInit } from '@angular/core';
import { SpringService } from '../shared/spring/spring.service';

@Component({
  selector: 'app-spring-list',
  templateUrl: './spring-list.component.html',
  styleUrls: ['./spring-list.component.css']
})
export class SpringListComponent implements OnInit {
  heroes: Array<any>;
  constructor(private springService: SpringService) { }

  ngOnInit() {
    this.springService.getAll().subscribe(data => {
      this.heroes = data;
    });
  }

}
