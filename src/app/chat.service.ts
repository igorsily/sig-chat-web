import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private room: String = '';

  constructor(private socket: Socket) {}

  connect = (nomeSala: string): void => {
    this.room = nomeSala;
    this.leave()
    this.socket.connect();

    this.socket.on('connect', () => {
      console.log(this.room);

      this.socket.emit('createChat', nomeSala);
    });
  };

  leave = () => {
    this.socket.disconnect()
  };

  getMensages = (): Observable<string> => {
    return new Observable((observable) => {
      this.socket.on('messagem', (data: any) => {
        observable.next(data);
      });
    });
  };
}
