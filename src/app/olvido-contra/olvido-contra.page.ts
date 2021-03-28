import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-olvido-contra',
  templateUrl: './olvido-contra.page.html',
  styleUrls: ['./olvido-contra.page.scss'],
})
export class OlvidoContraPage implements OnInit {

  constructor(private authSvc:AuthService, private router: Router) { }

  ngOnInit() {
  }

  async Recuperar(email){
    try{
      await this.authSvc.resetPassword(email.value);
      this.router.navigate(['/cuenta']);
    }
    catch(error){console.log('Error->',error)} 
  }
  }
