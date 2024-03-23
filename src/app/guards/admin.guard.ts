import { CanActivateFn } from '@angular/router';
import { AfService } from '../providers/af.service';
import { inject } from '@angular/core';
import { map, take, tap } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {
  return inject(AfService).user$.pipe(
    take(1),
    map(user => user && user.roles.admin ? true : false),
    tap(isAdmin => {
      if (!isAdmin) {
        console.error("Access denied - Admins only allowed")
      }
    })
  )
};
