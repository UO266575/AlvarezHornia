import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-exhibitions',
  standalone: true,
  imports: [ CarouselComponent, ],
  templateUrl: './exhibitions.component.html',
  styleUrl: './exhibitions.component.scss'
})
export class ExhibitionsComponent {

}
