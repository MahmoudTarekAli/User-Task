import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {InvoiceService} from './service/invoice.service';
import {MatDialog} from '@angular/material';
import {takeUntil} from 'rxjs/operators';
import {UpdateInvoiceComponent} from './components/update-invoice/update-invoice.component';
import {NotificationService} from './service/notification.service';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'id', 'email', 'phone', 'status'];
  isAdmin = false;

  constructor(private notificationService: NotificationService, private invoiceService: InvoiceService, private changeDetectorRefs: ChangeDetectorRef, public dialogRef: MatDialog,  private router: Router ) {
  }

  dataSource: Subject<any[]> = new BehaviorSubject<any[]>([]);

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/login');

  }

  ngOnInit() {
    if (!localStorage.getItem('username')) {
      this.router.navigateByUrl('/login');
    }
    this.invoiceService.getInvoices().subscribe(data => {
        this.dataSource.next(data);
      },
      error1 => {
        console.log(error1);
      }
    );
    this.onRefresh();
    if (localStorage.getItem('username') === 'admin') {
      this.isAdmin = true;
      this.displayedColumns.push('action');
    }
    console.log(`is Admin ${this.isAdmin}`);
  }

  onRefresh() {
    this.invoiceService.getInvoices().subscribe(data => {
        this.dataSource.next(data);
        this.changeDetectorRefs.detectChanges();

        console.log(data);
      },
      err => {
        console.log(err);
      });
  }

  deleteInvoice(element) {
    console.log(`this is salah element ${JSON.stringify(element)}`);
    this.invoiceService.deleteInovice(element.id).subscribe(data => {
        console.log(data);
        this.notificationService.success('deleted Successfully');
        this.onRefresh();
      },
      error1 => {
        console.log(error1);
      }
    );

  }

  updateInvoice(invoice) {
    console.log(invoice._id);
    const dialogRef = this.dialogRef.open(UpdateInvoiceComponent, {
      maxWidth: '60%',
      width: '60%',
      maxHeight: '90vh',
      data: invoice
    });
    dialogRef.afterClosed().subscribe(() => {
      this.onRefresh();
    });
  }
}

