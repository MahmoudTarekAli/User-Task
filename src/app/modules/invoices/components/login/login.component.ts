import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UpdateInvoiceComponent} from '../update-invoice/update-invoice.component';
import {MatDialog} from '@angular/material';
import {InvoicesComponent} from '../../invoices.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fg: FormBuilder, private router: Router) {
  }

  public loginForm = this.fg.group({
    name: ['', Validators.required]
  });

  ngOnInit() {
  }

  login() {
    localStorage.setItem('username', this.loginForm.controls.name.value);
    this.router.navigateByUrl('');
  }

}
