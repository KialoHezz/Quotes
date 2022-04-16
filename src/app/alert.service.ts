import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  alterMe(Message:string) {
    alert(Message);
  }
  constructor() {}
}
