import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menulateral',
  templateUrl: './menulateral.component.html',
  styleUrls: ['./menulateral.component.scss'],
})
export class MenulateralComponent implements OnInit {
  public cuenta: string="";
  constructor(private authSvc:AuthService, private router:Router) { }

  ngOnInit() {}

}
