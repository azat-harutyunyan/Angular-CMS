import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'pages-list',
    templateUrl: './pages-list.component.html',
    styleUrl: './pages-list.component.css',
    standalone: true,
    imports: [NgFor, AsyncPipe]
})
export class PagesListComponent implements OnInit {
  pagesObservable: Observable<any[]>
  pages: any[]

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.pagesObservable = this.getPages('/pages');
    this.pagesObservable.subscribe((data) => {
      this.pages = data;
      console.log(this.pages)
    })

  }
  getPages(listPath: string): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}