import { Component } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import { DataService } from "./data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  joke: any;
  image: { random: string; grayScale: string; blur: string; any: string };
  dadjoke: Object;

  constructor(updates: SwUpdate, private data: DataService) {
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => document.location.reload());
    });
  }

  ngOnInit() {
    this.data.gimmeJokes().subscribe(res => {
      this.joke = res;
    });

    // this.data.dadJokes().subscribe(res => {
    //   this.dadjoke = res;
    // });

    this.image = this.data.getRandomImages();
    // console.log("random : ", this.image);
  }
}
