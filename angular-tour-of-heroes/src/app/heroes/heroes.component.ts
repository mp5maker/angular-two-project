import { Component, OnInit } from '@angular/core';
 
import { HeroService } from '../hero.service'

import { Hero } from '../hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero = Hero;

  onSelect = (hero) => {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  
  constructor(private heroService: HeroService) { }

  ngOnInit() {
      this.getHeroes();
  }

}
