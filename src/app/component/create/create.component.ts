import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  submitform!: FormGroup;

  constructor(
    public postService: PostService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.submitform = new FormGroup({
      title: new FormControl('', [Validators.required]),
      year: new FormControl('', Validators.required),
      director: new FormControl('', Validators.required),
      stars: new FormControl('', Validators.required),
      review: new FormControl('', Validators.required),
    });
  }

  // Performing save operation by calling the rest service
  submit() {
    this.postService.create(this.submitform.value).subscribe((res: any) => {
      this.router.navigateByUrl('/');
    })
  }
}
