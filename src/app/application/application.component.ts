import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

export interface Incident {
  position: number;
  date: string;
  incident_type: string;
  status: string;
}

const incidentData: Incident[] = [
  { position: 1, date: '04-24-2021', incident_type: 'test', status: 'closed' },
  { position: 2, date: '04-24-2021', incident_type: 'test', status: 'closed' },
  { position: 3, date: '04-24-2021', incident_type: 'test', status: 'closed' },
  { position: 4, date: '04-24-2021', incident_type: 'test', status: 'closed' },
  { position: 5, date: '04-24-2021', incident_type: 'test', status: 'closed' },
  { position: 6, date: '04-24-2021', incident_type: 'test', status: 'closed' },
];

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css'],
})
export class ApplicationComponent implements OnInit {
  displayedColumns: string[] = ['select', 'date', 'incident_type', 'status'];
  dataSource = new MatTableDataSource<Incident>(incidentData);
  selection = new SelectionModel<Incident>(true, []);

  logo: string = '../../assets/logo--Gaggle.svg';
  alert: string = '../../assets/icon--alert.svg';
  saveSucess: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Incident): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }
}
