import { Component } from '@angular/core';
import { CarouselComponent } from '../../../components/carousel/carousel.component';

@Component({
  selector: 'app-miscelanea',
  standalone: true,
  imports: [ CarouselComponent,],
  templateUrl: './miscelanea.component.html',
  styleUrl: './miscelanea.component.scss'
})
export class MiscelaneaComponent {

  firstCarouselInterval = 4000;
  secondCarouselInterval = 9000;
  thirdCarouselInterval = 7000;

  ngOnInit() {
    this.updateIntervals();
  }

  updateIntervals() {
    setInterval(() => {
      this.firstCarouselInterval = this.getRandomInterval();
      this.secondCarouselInterval = this.getRandomInterval();
      this.thirdCarouselInterval = this.getRandomInterval();
    }, this.getMaxInterval());
  }

  getRandomInterval() {
    return Math.floor(Math.random() * (10000 - 6000 + 1)) + 6000;
  }

  getMaxInterval() {
    return Math.max(this.firstCarouselInterval, this.secondCarouselInterval, this.thirdCarouselInterval);
  }
}
