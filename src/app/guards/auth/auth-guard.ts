import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of  } from 'rxjs';
import { take, switchMap  } from 'rxjs/operators';
import { AppState } from 'src/app/store/app-state';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<AppState>,
    private router: Router) {}

canActivate(): Observable<boolean> {
    return this.store.select('login').pipe(
      take(1),
      switchMap(loginState => {
        if (loginState.isLoggedin) {
          return of(true);
        }
        this.router.navigateByUrl('login');
        return of(false);
      })
    )
  }
}
