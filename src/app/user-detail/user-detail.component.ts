import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserDetailComponent implements OnInit {

  user = {};

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getUserDetail(this.route.snapshot.params['id']);
  }

  getUserDetail(id) {
    this.http.get('/user/' + id).subscribe(data => {
      this.user = data;
    });
  }
}
