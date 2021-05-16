import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // public porque vai estar bind no template, Angular apenas bind a propriedades publicas
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
