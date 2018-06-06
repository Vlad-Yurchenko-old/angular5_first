import {Component, OnInit} from '@angular/core';
import {ArtuserService} from '../../services/artuser.service';
import {Router} from '@angular/router';

class ArtUser {
  name: String;
  languages: object;
  constructor(name: String, languages: object) {
    this.name = name;
    this.languages = languages;
  }
}

@Component({
  selector: 'app-artuser',
  templateUrl: './artuser.component.html',
  styleUrls: ['./artuser.component.css']
})
export class ArtuserComponent implements OnInit {

  title: String = 'Artezio Users';

  artusers: object;
  cities: string[] = [];
  currentCity: string;
  currentCityUsers: ArtUser[];

  constructor(private artuserService: ArtuserService,
              private router: Router) {
  }

  ngOnInit() {
    this.artusers = null;
    this.currentCity = null;
    this.currentCityUsers = [];
    this.artuserService.getAll().subscribe(value => {
      this.artusers = value;
      for (let city in value) {
        this.cities.push(city.toString());
      }
    }, error1 => console.log(error1));
  }

  chooseCity(city: string) {
    this.currentCity = city;
    this.currentCityUsers = [];
    for(let user in this.artusers[city]) {
      this.currentCityUsers.push(new ArtUser(user, this.artusers[city][user]));
    }
    console.log(this.currentCityUsers)
  }

  openUser(owner: string) {
    this.router.navigate(['/cv/' + owner])
  }

}
