import { Injectable } from '@angular/core';
import { dialogType } from 'app/modules/dialog/models/dialog-type.enum';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  public isShowDialog: boolean = false;
  public dialogType: dialogType = dialogType.ADD;

  getDialogType(): dialogType {
    return this.dialogType;
  }

  public show(type: dialogType): void {
    this.dialogType = type;
    this.isShowDialog = true;
  }

  public close(): void {
    this.isShowDialog = false;
  }
}
