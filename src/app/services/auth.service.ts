import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: { email: string; password: string }[] = [];
  private currentUser: string | null = null;

  constructor() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }

    const storedSession = localStorage.getItem('currentUser');
    if (storedSession) {
      this.currentUser = storedSession;
    }
  }

  private saveUsersToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  register(email: string, password: string): boolean {
    const exists = this.users.find(user => user.email === email);
    if (exists) return false;

    this.users.push({ email, password });
    this.saveUsersToLocalStorage();
    return true;
  }

  login(email: string, password: string): boolean {
    const found = this.users.some(user => user.email === email && user.password === password);
    if (found) {
      this.currentUser = email;
      localStorage.setItem('currentUser', email);
    }
    return found;
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  getCurrentUser(): string | null {
    return this.currentUser;
  }
}
