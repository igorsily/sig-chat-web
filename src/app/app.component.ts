import { Component } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sig-chat-web';

  constructor(private chatService: ChatService) {
    this.chatService.getMensages().subscribe((resp) => {
      console.log('RECEBI A MENSAGEM', resp);
    });
  }

  entreChat = (sala: string) => {
    console.log("ENTROU AQUi");

    this.chatService.connect(sala);
  };
}
