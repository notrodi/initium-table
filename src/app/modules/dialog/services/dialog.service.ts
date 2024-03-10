import { Injectable } from '@angular/core';
import { dialogType } from 'app/modules/dialog/interfaces/dialog-type.enum';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  public isShowDialog: boolean = false;
  public editClientIndex: number;
  public dialogType: dialogType = dialogType.ADD;

  getDialogType(): dialogType {
    return this.dialogType;
  }

  public show(type: dialogType, id?: number): void {
    if (id !== undefined) {
      this.editClientIndex = id;
    }
    
    this.dialogType = type;
    this.isShowDialog = true;
  }

  public close(): void {
    this.isShowDialog = false;
    this.editClientIndex = -1;
  }
}
