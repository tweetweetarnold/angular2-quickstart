import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './hero';
import { RouteParams } from '@angular/router-deprecated';
import { HeroService } from './hero.service';



@Component({
	selector: 'my-hero-detail',
	template: `
	<div *ngIf="hero">
  <h2>{{hero.name}} details!</h2>
  <div>
    <label>id: </label>{{hero.id}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name" />
  </div>
  <button (click)="goBack()">Back</button>
</div>
	`,
	templateUrl: 'app/hero-detail.component.html'


})
export class HeroDetailComponent implements OnInit{
	@Input() 
	hero: Hero;

	constructor(
  private heroService: HeroService,
  private routeParams: RouteParams) {
}

  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.heroService.getHero(id)
      .then(hero => this.hero = hero);
  }

  goBack() {
  window.history.back();
}



}
