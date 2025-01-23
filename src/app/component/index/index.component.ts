import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { Post } from '../post';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  posts: Post[] = [];

  constructor(public postService: PostService) { }

  ngOnInit(): void {
    // Retrieving all the record while the screen is loading
    this.postService.getAll().subscribe((data: Post[])=>{
      this.posts = data;
    })  
  }

  deletePost(id:number){
    // Delete function called when the user click on the delete button
    this.postService.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item.id !== id);
    })
  }

}
