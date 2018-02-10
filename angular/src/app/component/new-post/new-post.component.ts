import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  postValue: string = "";
  constructor() { }

  ngOnInit() {
  }

  getPost(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.value;
    console.log("hello:" + idAttr);
  }

}
