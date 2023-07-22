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
  constructor(private randomUsersService: RandomUserService) {}
  // interface Usuario{}
  public user: any;

  ngOnInit(): void {
    this.cargarUsuarios();
  }
  public cargarUsuarios() {
    this.randomUsersService
      .getUsers(
        `https://randomuser.me/api/?inc=name,email,picture,phone&seed=abc`
      )
      .subscribe((res: any) => {
        this.user = res.results;
      });
  }
}
