import { Component } from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
})
export class DialogsComponent {
  private dialogData: any[] = [
    {
      title: 'Dialog 1',
      content: 'This is the content of Dialog 1',
    },
    {
      title: 'Dialog 2',
      content: 'This is the content of Dialog 2',
    },
    {
      title: 'Dialog 3',
      content: 'This is the content of Dialog 3',
    },
  ];

  constructor(private dialogService: DialogService) {}

  openNextDialog() {
    if (this.dialogData.length > 0) {
      this.dialogService
        .openDialog(this.dialogData.shift())
        .afterClosed()
        .subscribe(() => {
          this.openNextDialog();
        });
    }
  }
}
