import { Component } from '@angular/core';

@Component({
    selector: 'app-cmpdatabinding',
   templateUrl: './cmp-databinding.component.html',
   styleUrls: ['cmp-databinding.component.css']
})


export class cmpDatabindingComponent{

    serverElements = [{type: 'server', name: 'TestServer', content: 'Just a Test!'}];
  
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
    type: 'server',
    name: serverData.serverName,
    content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
    type: 'blueprint',
    name: blueprintData.serverName,
    content: blueprintData.serverContent
    });
  }


}