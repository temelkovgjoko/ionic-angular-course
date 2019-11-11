import { Injectable } from '@angular/core';
import { Metal } from './metal.model';

@Injectable({
  providedIn: 'root'
})
export class MetalsService {
  private metals: Metal[] = [
    {
      id: 'm1',
      title: 'Copper',
      imageUrl: 'http://www.chemicalelements.com/bohr/b0029.gif',
      atomicNumber: 29,
      neutrons: 35
    },
    {
      id: 'm2',
      title: 'Iron',
      imageUrl: 'http://www.chemicalelements.com/bohr/b0026.gif',
      atomicNumber: 26,
      neutrons: 30
    }
  ];


  constructor() { }

  getAllMetals() {
    return [...this.metals]
  }

  getMetal(metalId: string) {
    return {
      ...this.metals.find(metal => {
        return metal.id === metalId;
      })
    }
  }

  deleteMetal(metalId: string) {
    this.metals = this.metals.filter(metal => {
      return metal.id !== metalId;
    })
  }
}
