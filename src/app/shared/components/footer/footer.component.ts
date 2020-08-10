import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() credits = 'David Royo & Irwing Herrera';
  @Input() date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
