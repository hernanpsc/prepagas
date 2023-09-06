import { Imagen as MiImagen } from './interfaces';

export interface Planes {
    type: any;
    price?: number;
    precio?: number;
    rating?: '1' | '2' | '3'| '4' | '5';
    copagos?: string;
    category?: 'inferior' | 'intermedio' | 'superior';
    tags?: string[];
    hijosSolos?: string;
    name?: string;
    images?:MiImagen[];
    folletos?:string[];
    beneficios?:string[];
    clinicas?:string[];
    _id?: string;
    item_id?:string;
    description:string;
    caracteristicas:string[];
    servicios:string[]
    
  }
  
  export class filterObject {
    discountRates!: number[];
    maxVal!: number;
    minVal!: number;
  }

  export const planesList: Planes[] = [

    { type:"",
    item_id: "",
        images: [{id:"",descripcion:"logo",empresa:"SanCor Salud",url:"assets/images/images/card-header/sancorsalud.png"},
                 {id:"",descripcion:"credencial",empresa:"SanCor Salud",url:"assets/images/images/card-header/sancorsalud.png"},
                 {id:"",descripcion:"flyer",empresa:"SanCor Salud",url:"assets/images/planes_sancor/Feed4000-sm(680x664).jpg"},],
        name: 'Full Sleeve Sweatshirt for Men (Pink)',
        category: 'inferior',
        rating: '4',
        price: 120,
        description: '',
        caracteristicas: ['Full Sleeve', 'Full Sleeve', 'All Sizes available', '4 Different Color'],
        servicios: ['10 Days Replacement', 'Cash on Delivery available'],
    }
  ];

