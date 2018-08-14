import { Component, OnInit, OnChanges } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  pageTitle = "All About Hair";

  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
  }
}
