import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

export interface Post {
  title: string,
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor(private afs: AngularFirestore) {

  }

  getMenus() {
    return this.afs.collection("posts").snapshotChanges()
      .pipe(
        map(post => {
          return post.map(a => {
            const data = a.payload.doc.data() as Post
            const id = a.payload.doc.id
            return { id, ...data }
          })
        })
      )

  }

  addMenu(post: Post) {
    this.afs.collection("posts").add(post)
  }

  deleteMenu(postId: number) {
    this.afs.doc('posts/' + postId).delete()
  }

  updateMenu(postId: number, post: Post) {
    this.afs.doc('posts/' + postId).update(post)
  }
}
