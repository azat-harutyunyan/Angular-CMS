import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
  selector: 'pages-list',
  standalone: true,
  imports: [NgFor, AsyncPipe],
  templateUrl: './pages-list.component.html',
  styleUrl: './pages-list.component.css'
})
export class PagesListComponent implements OnInit {
  pagesObservable: Observable<any[]>

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.pagesObservable = this.getPages('/pages');
  }
  getPages(listPath: string): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
}