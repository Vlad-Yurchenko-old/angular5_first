import {Component, OnInit} from '@angular/core';
import {ArtuserService} from '../../services/artuser.service';
import {ActivatedRoute} from '@angular/router';
import {UserCV} from '../../classes/UserCV';
import {Location} from '@angular/common';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  userCV: UserCV;

  constructor(private route: ActivatedRoute,
              private artuserService: ArtuserService,
              private location: Location) { }

  ngOnInit() {
    this.artuserService.getUserCv(this.route.snapshot.paramMap.get('owner')).subscribe(value => {
      this.userCV = value;
    })
  }

  goBack(): void {
    this.location.back();
  }

}
