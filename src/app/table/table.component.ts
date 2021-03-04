import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PeriodicElement, PeriodicElement2 } from '../shared/Entidades/periodicElement';
import { TableDataSource, TableItem } from './table-datasource';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { TestBed } from '@angular/core/testing';
import { SelectionModel } from '@angular/cdk/collections';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit, OnInit {

  ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    {position: 11, name: 'Lincoln', weight: 10.999, symbol: 'Link'},
  ];


  ELEMENT_DATA2: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 111.026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 19.122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.797, symbol: 'Ne'},
    {position: 11, name: 'Sodium', weight: 22.897, symbol: 'Na'},
    {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
    {position: 13, name: 'Aluminum', weight: 126.815, symbol: 'Al'},
    {position: 14, name: 'Silicon', weight: 28.855, symbol: 'Si'},
    {position: 15, name: 'Phosphorus', weight: 30.738, symbol: 'P'},
    {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
    {position: 17, name: 'Chlorine', weight: 135.453, symbol: 'Cl'},
    {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
    {position: 19, name: 'Potassium', weight: 39.983, symbol: 'K'},
    {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
  ];


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns2: string[] = ['position', 'name', 'weight', 'symbol'];

  dataSource = this.ELEMENT_DATA;
  dataSource2 = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA2);


  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // Seleção
  /*
  initialSelection = [];
  allowMultiSelect = true;
  selection = new SelectionModel<PeriodicElement>(this.allowMultiSelect, this.initialSelection);
*/

  ngOnInit() {}

  ngAfterViewInit() {

    this.dataSource2.sort = this.sort;
    this.dataSource2.paginator = this.paginator;

  }


  /** Whether the number of selected elements matches the total number of rows. */
  /*
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource2.data.length;
    return numSelected == numRows;
  }*/

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  /*
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource2.data.forEach(row => this.selection.select(row));
  }*/

}


