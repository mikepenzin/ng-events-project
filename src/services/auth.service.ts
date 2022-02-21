import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/shared/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: User | undefined;
  private currentUserSource = new Subject<User>();
  updatedUserInfo$ = this.currentUserSource.asObservable();

  constructor() {
    const defaultUser = new User(34, "Michael", "Penzin", "penzin");
    this.setCurrentUser(defaultUser);
   }

  getCurrentUser():User | undefined {
    return this.currentUser;
  }

  setCurrentUser(user: User): void {
    this.currentUser = JSON.parse(JSON.stringify(user));
    if(this.currentUser) {
      this.setUpdatedUserInfo(this.currentUser);
    }
  }

  setUpdatedUserInfo(user: User) {
    this.currentUserSource.next(user);
  }

}
