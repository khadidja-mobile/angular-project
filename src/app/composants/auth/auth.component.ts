import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { TokenStorageService } from 'src/app/shared/token-storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  // erreur:boolean = true;
  // username!: String;
  // password!: String;

  form: any = {
    username: null,
    password: null
  };

  isLoggedIn: boolean = false;
  isLoginFailed: boolean = false;
  errorMessage = '';

  constructor(private router:Router, private authService:AuthService, 
    private tokenStorage:TokenStorageService ) { }

  ngOnInit(): void {
  }

  // Session Storage
  isAuthenticated() { 
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe(data => {
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUser(data);

      this.isLoggedIn = true;
      this.isLoginFailed = false;
      this.router.navigateByUrl('/person');
    }, err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;

      }
    )
  }

  // Localstorage
  // isAuthenticated() {
  //   if(this.username === 'John' && this.password === '1234') {
  //     localStorage.setItem('isConnected', 'true');
  //     this.router.navigateByUrl('/person');
  //   } else {
  //     this.erreur = false;
  //   }
  // }

}
