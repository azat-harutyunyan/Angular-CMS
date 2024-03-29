import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenusService } from '../../service/menus/menus.service';
import { PostsService } from '../../service/posts/posts.service';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [NgFor, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {
  menu: any
  postsList: any

  constructor(private route: ActivatedRoute, private menusService: MenusService, private postsService: PostsService) {
    this.route.params.subscribe(params => {
      console.log(params)
      this.menusService.getConditionalMenus("url", "==", params["url"]).subscribe(menus => {
        console.log(menus)
        if (menus.length > 0) {
          this.menu = menus[0]
          this.postsService.getConditionalPosts("menu_id", "==", this.menu.id).subscribe(posts => {
            console.log(posts)
            this.postsList = posts
          })
        }
      })
    })
  }

}
