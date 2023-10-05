import { Component } from '@angular/core';

@Component({
  selector: 'app-items-route',
  templateUrl: './items-route.component.html',
  styleUrls: ['./items-route.component.css'],
})
export class ItemsRouteComponent {
  selectedItem: number | null = null;
  items = new Array(5000).fill('');

  onItemSelection(index: number) {
    this.selectedItem = index;
  }
}
