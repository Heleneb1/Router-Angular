import { Component } from "@angular/core";
import { User } from "./User";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent {
  public user: User;
  public showAge: boolean = false;

  constructor() {
    this.user = new User(
      "Doe",
      "John",
      25,
      "Salut, et merci pour le poisson",
      "https://randomuser.me/api/portraits/lego/2.jpg"
    );
  }

  click() {
    this.showAge = !this.showAge;
  }
}
