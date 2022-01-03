import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'colas';

  constructor(private wsService: WebsocketService) {}
  ngOnInit(): void {
    this.wsService.nuevoCliente.subscribe(console.log);
  }
}
