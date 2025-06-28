import { Component, inject, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { IPost } from '../../shared/interfaces/post';

@Component({
  selector: 'app-api-example',
  imports: [],
  templateUrl: './api-example.component.html',
  styleUrl: './api-example.component.scss'
})
export class ApiExampleComponent implements OnInit {
  private readonly posts = inject(PostsService);
  postsArray: IPost[] = [];

  ngOnInit(): void {
    this.posts.getAll().subscribe({
      next: (response) => {
        console.log(response);
        this.postsArray = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
