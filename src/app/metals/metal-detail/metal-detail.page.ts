import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { Metal } from '../metal.model';
import { MetalsService } from '../metals.service';

@Component({
  selector: 'app-metal-detail',
  templateUrl: './metal-detail.page.html',
  styleUrls: ['./metal-detail.page.scss'],
})
export class MetalDetailPage implements OnInit {
  loadedMetal: Metal;

  constructor(
    private activatedRoute: ActivatedRoute,
    private metalsService: MetalsService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('metalId')) {
        this.router.navigate(['./']);
        return;
      }
      const metalId = paramMap.get('metalId');
      this.loadedMetal = this.metalsService.getMetal(metalId);
    });
  }

  onDeleteMetal() {
    this.alertCtrl.create({
      header: 'Are you sure?', message: 'Do you really want to delete the metal?', buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.metalsService.deleteMetal(this.loadedMetal.id);
            this.router.navigate(['./']);
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present()
    })
  }
}
