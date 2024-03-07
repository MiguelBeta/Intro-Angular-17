import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>CUENTOS DE LA FAMILIA LERELE</h3>
    <img src="https://www.cuentosyrecetas.com/wp-content/uploads/2017/08/NARRADOR-PABLO.jpg">
    <p>
    Cuando la profesora propuso el tema de la exposición oral, sabía que,
    mi amigo Guille y yo, lo íbamos a bordar: “Tú receta favorita”
    </p>
  `,
  styles: `
    img {
      width: 100%;
      height: auto;
    }
  `
})
export class CommentsComponent {

}
