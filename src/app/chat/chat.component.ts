import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private service: ChatService) { }

  ngOnInit() {
  }
  message:string;
  messages=[];
  
  sendMessage()
  {
    let details={
      message:"",
      sender:"user",
      date : new Date()
    }
    details.message=this.message
    details.sender="user"
    this.messages.push(details);
    this.service.sendMessage(this.message).subscribe((data)=>{
      this.messages.push(data);
      console.log(data)
      this.message=""
    })
  }
}
