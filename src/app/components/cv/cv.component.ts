import {Component, OnInit} from '@angular/core';
import {ArtuserService} from '../../services/artuser.service';
import {ActivatedRoute} from '@angular/router';
import {UserCV} from '../../classes/UserCV';
import {Location} from '@angular/common';
import {MONTHS_RU} from '../../constants/months';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  userCV: UserCV;

  constructor(private route: ActivatedRoute,
              private artuserService: ArtuserService,
              private location: Location) {
  }

  ngOnInit() {
    this.artuserService.getUserCv(this.route.snapshot.paramMap.get('owner')).subscribe(value => {
      this.userCV = value;
      console.log(this.userCV);
    });
  }

  getMonthByNumber(number: number): string {
    return MONTHS_RU[number - 1];
  }

  goBack(): void {
    this.location.back();
  }

}
