import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DataService {
  images: any = {};
  constructor(private http: HttpClient) {}

  gimmeJokes() {
    return this.http.get("https://api.chucknorris.io/jokes/random");
  }

  dadJokes() {
    let header = new HttpHeaders();
    header.append("content-type", "application/json");
    return this.http.get("https://icanhazdadjoke.com/", { headers: header });
  }

  getRandomImages() {
    return (this.images = {
      random: "https://picsum.photos/500/350.jpg",
      grayScale: "https://picsum.photos/500/350.jpg?grayscale",
      blur: "https://picsum.photos/500/350.jpg/?blur",
      any: "https://picsum.photos/500/350.jpg?random=1"
    });
  }
}
