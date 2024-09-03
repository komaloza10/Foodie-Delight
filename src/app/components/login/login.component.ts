import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,RouterModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string ='';
  password: string ='';

  constructor(private authService: AuthService){ }

  login(){
    if(this.authService.login(this.username, this.password)){
      this.authService.login
    }
    else{
      alert('Login Failed');
    }
  }
  
}
