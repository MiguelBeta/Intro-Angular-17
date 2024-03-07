import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule, UserComponent],
  template: `
  <h3>Los juegos favoritod de {{ username }} </h3>
    <ul>
      @for (game of games; track game.id) {
        <li (click)="fav( game.name )"> {{ game.name }} </li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {

  @Input()
  username = '';

  @Output()
  addFavoriteEvent = new EventEmitter<string>();

  fav( gameName: string ){
    this.addFavoriteEvent.emit( gameName );
  }

  games = [
    {
      id: 1,
      name: 'Uncharted 4'
    },
    {
      id: 2,
      name: 'Horizon Cero Dawm'
    },
    {
      id: 3,
      name: 'Bloodborne'
    }
  ]

}
