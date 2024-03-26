import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input'
import { Menu, MenusService } from '../../service/menus/menus.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-menus',
  standalone: true,
  imports: [MatTableModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatSortModule, MatPaginatorModule],
  templateUrl: './menus.component.html',
  styleUrl: './menus.component.css'
})
export class MenusComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource()
  displayedColumns = ["id", "title", "url"]
  menuDetails: Menu = {
    title: "",
    url: "",
  }

  constructor(private menusService: MenusService) {

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

}
