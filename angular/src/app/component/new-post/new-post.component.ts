import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  htmlContent;
  ngOnInit(): void {

  }

  preview() {
    console.log("HTML: " + this.htmlContent);
  }
}
