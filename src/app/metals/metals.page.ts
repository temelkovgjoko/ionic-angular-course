import { Component, OnInit } from '@angular/core';

import { MetalsService } from './metals.service';
import { Metal } from './metal.model';

@Component({
  selector: 'app-metals',
  templateUrl: './metals.page.html',
  styleUrls: ['./metals.page.scss'],
})
export class MetalsPage implements OnInit {
  metals: Metal[];
  constructor(
    private metalsService: MetalsService,
    
  ) { }

  ngOnInit() {
    this.metals = this.metalsService.getAllMetals()
  }
}
