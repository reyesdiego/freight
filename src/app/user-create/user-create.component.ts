import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UserCreateComponent implements OnInit {

  user = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveBook() {
    this.http.post('/user', this.user)
      .subscribe(res => {
          const id = res['_id'];
          this.router.navigate(['/user-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}

