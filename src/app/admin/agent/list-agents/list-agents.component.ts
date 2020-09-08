import { Component, QueryList, ViewChildren, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AgentRelations } from '../../../model/agent-relations';
import { AgentModal } from '../../../model/agent-modal';
import { Companies } from '../../../model/companies';
import { AgentModalService } from '../../../service/agent-modal.service';
import { ListAgentsService } from '../../../service/list-agents.service';

@Component({
  selector: 'app-list-agents',
  templateUrl: './list-agents.component.html',
  styleUrls: ['./list-agents.component.scss'],
  providers: [
    DecimalPipe, AgentModalService, ListAgentsService
  ]
})
export class ListAgentsComponent implements OnInit {

  agentRelations$: Observable<AgentRelations[]>;
  agentModals$: Observable<AgentModal[]>;
  total$: Observable<number>;
  total2$: Observable<number>;

  constructor(private service:ListAgentsService, private modalService: NgbModal, private service2:AgentModalService) { 
  	this.agentRelations$ = service.agentRelations$;
  	this.total$ = service.total$;
  }

  ngOnInit() {
  }

  async openMediumModal( mediumModalContent, id ) {
  	console.log(id);
  	this.service2.viewAgentModal(id);
  	this.agentModals$ = this.service2.agentModals$;
  	this.total2$ = this.service2.total$;
  		
    this.modalService.open( mediumModalContent, { size : 'lg' } );
  }

}
