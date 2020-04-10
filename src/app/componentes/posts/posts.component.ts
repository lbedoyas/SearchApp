import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {



  constructor() { }

  filterPost = '';

  datos: any = [
    { id: 1,
      nameProduct: 'De todito',
      description: 'Mecato',
      priceProduct: 3200,
      stockUnit: 3,
      packaging: 'Plastico',
      category: 'Pasabocas',
      idProduct: 7002020324310,
      newProduct: false,
      dateCreated: new Date,
      dateModified: new Date},
      { id: 2,
        nameProduct: 'Papas Margarita',
        description: 'Mecato',
        priceProduct: 1800,
        stockUnit: 900,
        packaging: 'Plastico',
        category: 'Pasabocas',
        idProduct: 7002020322219,
        newProduct: true,
        dateCreated: new Date,
        dateModified: new Date},
        { id: 3,
          nameProduct: 'Papas Margarita embalaje x 12',
          description: 'Mecato',
          priceProduct: 1800,
          stockUnit: 900,
          packaging: 'Caja',
          category: 'Pasabocas',
          idProduct: 7002020322233,
          newProduct: true,
          dateCreated: new Date,
          dateModified: new Date}
  ]

  ngOnInit(): void {
    // console.log(this.datos);
  }

}
