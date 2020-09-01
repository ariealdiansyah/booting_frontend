import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../../../../service/api.service';
import { AuthService } from '../../../../service/auth.service';

import { Priorities } from '../../../../model/priorities';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {

  priority:Priorities;
  temp:Priorities;

  constructor(private apiService:ApiService, private authService:AuthService, private activatedRoute:ActivatedRoute) { 
    this.priority = new Priorities();
    this.temp = new Priorities();

    this.activatedRoute.queryParams.subscribe((data) => {
      this.temp = <Priorities>data;
      this.priority.name = this.temp.name;
      this.priority.code = this.temp.code;
    })
  }

  ngOnInit() {
    
  }

  async updatePriority() {
    this.priority.id = this.temp.id;
    this.priority.createdBy = this.temp.createdBy;
    this.priority.updatedBy = this.authService.getAccount().idUser.name;

    this.apiService.updatePriorities(this.priority).subscribe(priority =>{
      console.log(this.priority);
    })
  }

}
