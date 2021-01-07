import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  serverCreated = false;
  userName = '';
  userNameEmpty = true;
  servers = ['Testserver', 'Testserver 2'];

  StringInterpolation = "Just a way to get data from the TS File. This can be called by having the {{ foo }} in the html code. "


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    } ,2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is: ' + this.serverName;
  }

  onUpdateServerName( event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }


}
