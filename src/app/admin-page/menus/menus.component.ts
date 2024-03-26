import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input'
import { Menu, MenusService } from '../../service/menus/menus.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';

@Component({
  selector: 'app-menus',
  standalone: true,
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatSortModule, MatPaginatorModule, MatIconModule],
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.css'
})
export class MenusComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource()
  displayedColumns = ["id", "title", "url", "actions"]
  menuDetails: Menu = {
    title: "",
    url: "",
  }

  constructor(private menusService: MenusService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.menusService.getMenus().subscribe((data: any) => {
      this.dataSource.data = data
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase()
    this.dataSource.filter = filterValue;
  }

  addMenu() {
    this.menusService.addMenu(this.menuDetails)
  }

  editMenu(menuId: string, menu: Menu) {
    this.menusService.updateMenu(menuId, menu)
  }

  deleteMenu(menuId: string) {
    this.menusService.deleteMenu(menuId)
  }

  openDialog(menuId: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'true') {
        console.log('The dialog was closed ' + menuId);
        this.deleteMenu(menuId)
      }
    });
  }

  openEditDialog(menuId: string, title: string, url: string): void {
    const dialogRef = this.dialog.open(EditMenuComponent, {
      width: '250px',
      data: { title, url }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('The Edit dialog was closed ');
        this.editMenu(menuId, result)
        // this.editMenu(menuId)
      }
    });
  }

}
