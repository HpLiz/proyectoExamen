import { Component, OnInit } from '@angular/core';
import { RandomUserService } from './../../../services/api.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit{
  logout() {
    sessionStorage.clear();
  }
  public user: any=null;
  constructor(private RandomUserService: RandomUserService) {}
  // interface Usuario{}

  ngOnInit() {
    this.RandomUserService.getUsers('https://randomuser.me/api/').subscribe(
      (res: any) => {
        console.log('Response', res.results[0]);
        this.user = res.results[0];
        console.log(this.user.picture);
      }
    );
  }
}
