import { Injectable } from '@angular/core';

import { MessageService } from './message.service'

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`Hero service: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id))
  }

  constructor(private messageService: MessageService) { }
}
