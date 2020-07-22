import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Model/item';
import { ItemsList } from '../../itemsList';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  itemNames = ItemsList;
  constructor() { }

  ngOnInit(): void {
  }

}
