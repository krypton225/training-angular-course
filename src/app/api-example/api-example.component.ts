import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { PostsService } from '../../shared/services/posts.service';
import { IPost } from '../../shared/interfaces/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-api-example',
  imports: [],
  templateUrl: './api-example.component.html',
  styleUrl: './api-example.component.scss'
})
export class ApiExampleComponent implements OnInit, OnDestroy {
  private readonly posts = inject(PostsService);
  private observer!: Subscription;

  postsArray: IPost[] = [];

  ngOnInit(): void {
    this.observer = this.posts.getAll().subscribe({
      next: (response) => {
        this.postsArray = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  ngOnDestroy(): void {
    this.observer.unsubscribe();
  }
}
