import { Component, OnInit, Input } from '@angular/core';
import { Metal } from '../metal.model';

@Component({
  selector: 'app-metal-item',
  templateUrl: './metal-item.component.html',
  styleUrls: ['./metal-item.component.scss'],
})
export class MetalItemComponent implements OnInit {
  @Input() metalItem: Metal;
  constructor() { }

  ngOnInit() { }

}
