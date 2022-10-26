import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layoutquanly.component.html',
  styleUrls: ['./layoutquanly.component.css']
})
export class LayoutQuanLyComponent implements OnInit {
  isCollapsed = false;
  constructor() { }

  ngOnInit(): void {
  }

}
