import { Component } from "@angular/core";
import { MenuController } from "@ionic/angular";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent {
  constructor(private menu: MenuController) {}

  openFirst() {
    this.menu.enable(true, "first");
    this.menu.open("first");
  }
}
