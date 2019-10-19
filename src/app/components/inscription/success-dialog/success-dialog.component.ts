import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.scss']
})
export class SuccessDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<SuccessDialogComponent>) { }

  ngOnInit() {
  }
  refresh() {
    window.location.reload();
  }
}
