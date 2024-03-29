import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input'
import { Post, PostsService } from '../../service/posts/posts.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { MatSelectModule } from '@angular/material/select';
import { MenusService } from '../../service/menus/menus.service';
import { JsonPipe, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatSortModule, MatPaginatorModule, MatIconModule, MatSelectModule, ReactiveFormsModule, JsonPipe, SlicePipe],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  postDetails: Post = {
    title: "",
    menu_id: "",
    content: ""
  }
  menusList: any

  postForm: FormGroup

  displayedColumns = ["id", "title", "menu_id", "content", "actions"]
  dataSource = new MatTableDataSource()

  constructor(
    private postsService: PostsService,
    private menusService: MenusService,
    public dialog: MatDialog) {
      this.postForm = new FormGroup({
        'title': new FormControl('', Validators.required),
        'menu_id': new FormControl('', Validators.required),
        'content': new FormControl('', Validators.required),
      })
  }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((data: any) => {
      this.dataSource.data = data
    })

    this.menusService.getMenus().subscribe((data: any) => {
      this.menusList = data
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase()
    this.dataSource.filter = filterValue;
  }

  addPost() {
    this.postsService.addPost(this.postForm.value)
  }

  editPost(postId: string, post: Post) {
    this.postsService.updatePost(postId, post)
  }

  deletePost(postId: string) {
    this.postsService.deletePost(postId)
  }

  openDialog(postId: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'true') {
        console.log('The dialog was closed ' + postId);
        this.deletePost(postId)
      }
    });
  }

  openEditDialog(postId: string, title: string, menu_id: string, content: string): void {
    const dialogRef = this.dialog.open(EditPostComponent, {
      width: '250px',
      data: { title, menu_id, content, "menus": this.menusList }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('The Edit dialog was closed ');
        this.editPost(postId, result)
      }
    });
  }

}
