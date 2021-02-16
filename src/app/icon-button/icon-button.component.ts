import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-icon-button",
  templateUrl: "./icon-button.component.html",
  styleUrls: ["./icon-button.component.scss"],
})
export class IconButtonComponent implements OnInit {
  @Input() icon: string;
  @Input() text: string;
  @Input() backgroundColor: string;
  @Input() foregroundColor: string;
  @Input() size: string;
  @Input() fontSize: string;
  @Input() iconSize: string;

  constructor() {}

  ngOnInit(): void {}
}
