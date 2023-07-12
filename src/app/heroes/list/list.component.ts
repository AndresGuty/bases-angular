import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Iroman', 'Hulk', 'She Hulk', 'Thor'];
  public eliminar?: string;

  deleteHeroe(): void {
    this.eliminar = this.heroNames.pop();
  }

}
