import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  public isShowDialog: boolean = false;

  public show(): void {
    this.isShowDialog = true;
  }

  public close(): void {
    this.isShowDialog = false;
  }
}
