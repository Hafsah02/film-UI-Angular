import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from 'src/app/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id!: number;
  post!: Post;
  updateform!: FormGroup;
    
  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
    

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.postService.find(this.id).subscribe((data: Post)=>{
      this.post = data;
    }); 
      
    this.updateform = new FormGroup({
      title: new FormControl('', [Validators.required]),
      year: new FormControl('', Validators.required),
      director: new FormControl('', Validators.required),
      stars: new FormControl('', Validators.required),
      review: new FormControl('', Validators.required),
    });
  }

  // Performing update operation with the help of id by using rest service
  submit(){
    this.postService.update(this.id, this.updateform.value).subscribe((res:any) => {
         this.router.navigateByUrl('/');
    })
  }

}
