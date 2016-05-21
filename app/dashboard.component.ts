import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
	selector: 'my-dashboard',
	template: `<h3>My Dashboard</h3>
	<div *ngFor="let hero of heroes" (click)="gotoDetail(hero)" class="col-1-4">
	`,
	templateUrl: 'app/dashboard.component.html',
	styleUrls: ['app/dashboard.component.css']

})
export class DashboardComponent implements OnInit {
	heroes: Hero[] = [];
	
	ngOnInit() {
		this.heroService.getHeroes()
		.then(heroes => this.heroes = heroes.slice(1,5));
	}
	gotoDetail(hero: Hero) {
		let link = ['HeroDetail', { id: hero.id }];
		this.router.navigate(link);
	}
	constructor(
		private router: Router,
		private heroService: HeroService) {
	}


}

