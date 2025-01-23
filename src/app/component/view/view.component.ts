import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/post.service';
import { Post } from '../post';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  id!: number;
  post!: Post;
    

  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router
   ) { }

  ngOnInit(): void {
    // Invoking the record for the read operation based on id with the help of rest api service
    this.id = this.route.snapshot.params['id'];
    this.postService.find(this.id).subscribe((data: Post)=>{
      this.post = data;
    });
  }

}
