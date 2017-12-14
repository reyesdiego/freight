import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})

export class UserComponent implements OnInit {

  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {

// 0810 345 0304
    this.http.get("http://localhost:3000/clients").toPromise().then((data: any) => {
      this.users = data.data;
    }).catch(error => {
      console.log(error);
    });
  }

}
