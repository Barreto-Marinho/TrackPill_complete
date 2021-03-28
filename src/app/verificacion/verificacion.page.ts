import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user_interface';


@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.page.html',
  styleUrls: ['./verificacion.page.scss'],
})
export class VerificacionPage{
  user$: Observable<User>=this.authSvc.afAuth.user ;
  constructor(private authSvc:AuthService, private router: Router) { }

  async Reenvio():Promise<void>{
    try{
      await this.authSvc.sendVerificationEmail();
      //await this.router.navigate(['/cuenta']);
    }catch(error){console.log('Error->',error)}
  }

  ngOnDestroy(): void{
    this.authSvc.logout();
  }
}
