import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/shared/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: User | undefined;
  private currentUserSource = new Subject<User | undefined>();
  private usersList: User[] = [];
  updatedUserInfo$ = this.currentUserSource.asObservable();

  constructor() {
    const defaultUser = new User(34, "Michael", "Penzin", "penzin", "123");
    this.usersList.push(defaultUser);
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

  setUpdatedUserInfo(user: User | undefined) {
    this.currentUserSource.next(user);
  }

  authenticate(login: string, password: string): boolean {
      // const user = new User(43, "Name", "LastName", login, password);

      const index = this.usersList.findIndex((u) => {
        return u.login === login && u.password === password
      });

      if (index > -1) {
        this.setCurrentUser(this.usersList[index]);
        return true;
      } else {
        return false;
      }
  }

  signup(login:string, password:string, name: string, lastname:string): boolean {

    const isLoggeIn = this.authenticate(login, password);
    if (isLoggeIn) {
      return true;
    } else {
      const user = new User(this.usersList.length + 5, name, lastname, login, password);

      this.usersList.push(user);
      const authenticated = this.authenticate(login, password);

      if (authenticated) {
        return true;
      } else {
        return false;
      }
    }
  }

  logout(): boolean {
    if (this.currentUser) {
      this.currentUser = undefined;
      this.setUpdatedUserInfo(this.currentUser);
      return true;
    } else {
      return false;
    }
  }

}
