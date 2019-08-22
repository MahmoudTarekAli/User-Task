import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {InvoiceService} from './service/invoice.service';
import {MatDialog} from '@angular/material';
import {takeUntil} from 'rxjs/operators';
import {UpdateInvoiceComponent} from './components/update-invoice/update-invoice.component';
import {NotificationService} from './service/notification.service';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'id', 'email', 'phone', 'status', 'action'];

  constructor(private notificationService: NotificationService, private invoiceService: InvoiceService, private changeDetectorRefs: ChangeDetectorRef, public dialogRef: MatDialog) {
  }

  dataSource: Subject<any[]> = new BehaviorSubject<any[]>([]);


  ngOnInit() {
    this.invoiceService.getInvoices().subscribe(data => {
        this.dataSource.next(data);
      },
      error1 => {
        console.log(error1);
      }
    );
    this.onRefresh();
  }

  onRefresh() {
    this.invoiceService.getInvoices().subscribe(data => {
      console.log(`this is salah Data ${data}`);
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
      this.ngOnInit();
    });
  }
}

