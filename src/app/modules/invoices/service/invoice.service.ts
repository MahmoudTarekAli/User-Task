import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

const users = [
  {
    id: '1',
    name: 'mahmoud',
    email: 'mahmoud@gsa',
    phone: '01231231',
    status: 'active'
  },
  {
    id: '1',
    name: 'mahmoud',
    email: 'mahmoud@gsa',
    phone: '01231231',
    status: 'active'
  },
  {
    id: '1',
    name: 'mahmoud',
    email: 'mahmoud@gsa',
    phone: '01231231',
    status: 'active'
  },
  {
    id: '1',
    name: 'mahmoud',
    email: 'mahmoud@gsa',
    phone: '01231231',
    status: 'active'
  },
  {
    id: '1',
    name: 'mahmoud',
    email: 'mahmoud@gsa',
    phone: '01231231',
    status: 'active'
  },
  {
    id: '1',
    name: 'mahmoud',
    email: 'mahmoud@gsa',
    phone: '01231231',
    status: 'active'
  }
];

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor() {
  }

  getInvoices(): Observable<any> {
    return of(users);
  }

  updateInvoice(body, InvoiceId): Observable<any> {
    console.log(`this is salaah id ${InvoiceId}`);
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === InvoiceId) {
        users[i] = body;
      }
    }
    return of(body);
  }

  deleteInovice(InvoiceId: string): Observable<any> {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === InvoiceId) {
        users.splice(i, 1);
      }
    }
    return of({});
  }
}
