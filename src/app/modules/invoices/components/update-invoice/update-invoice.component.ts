import {Component, OnInit, Inject, Optional} from '@angular/core';
import {FormBuilder, Validators, FormArray, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {InvoiceService} from '../../service/invoice.service';
import {invoices} from '../../model/invoices';
import {NotificationService} from '../../service/notification.service';

@Component({
  selector: 'app-update-invoice',
  templateUrl: './update-invoice.component.html',
  styleUrls: ['./update-invoice.component.css']
})
export class UpdateInvoiceComponent implements OnInit {
  updateInvoiceForm: FormGroup;

  constructor(private notificationService: NotificationService, private formBuilder: FormBuilder, private invoiceService: InvoiceService, public dialogRef: MatDialog,
              @Inject(MAT_DIALOG_DATA) public serviceData: any,
  ) {
  }

  ngOnInit() {
    this.updateInvoiceForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      id: [null, [Validators.required]],
      email: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      status: [null, [Validators.required]],
    });
    this.setFormData(this.serviceData);
  }

  setFormData(invoiceData) {
    this.updateInvoiceForm.controls.name.setValue(invoiceData.name);
    this.updateInvoiceForm.controls.id.setValue(invoiceData.id);
    this.updateInvoiceForm.controls.email.setValue(invoiceData.email);
    this.updateInvoiceForm.controls.phone.setValue(invoiceData.phone);
    this.updateInvoiceForm.controls.status.setValue(invoiceData.status);
  }

  onSubmit() {
    // const data = {
    // const data = {
    //   name: this.updateInvoiceForm.controls.name.value,
    //   id: this.updateInvoiceForm.controls.id.value,
    //   email: this.updateInvoiceForm.controls.email.value,
    //   phone: this.updateInvoiceForm.controls.phone.value,
    //   status: this.updateInvoiceForm.controls.status.value,
    //
    // };
    this.notificationService.success('Edited Successfully');
    this.invoiceService.updateInvoice(this.updateInvoiceForm.value, this.serviceData.id).subscribe(data => {
      this.dialogRef.closeAll();
    });

  }

}
