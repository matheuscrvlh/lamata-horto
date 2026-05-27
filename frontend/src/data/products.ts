// images
import produto1 from '../assets/products/1.png'
import produto2 from '../assets/products/2.png'
import produto3 from '../assets/products/3.png'

import type { Product } from '../types/products'

export const products: Product[] = [
    {
        id: 1,
        name: 'planta',

        description: 'descricao planta',
        shortDescription: 'descricao planta curta',

        value: 190.00,
        promotionalValue: 159.00,

        images: produto1,

        category: 'planta',
        subCategory: 'interior',
        brand: 'Lamata',
        tags: ['verde', 'indoor', 'ornamental'],

        stock: 8,
        sku: 'MIDAJSND',

        height: 120,
        width: 40,
        weight: 2.5,

        sunlight: 'meia-sombra',
        watering: '2x semana',

        featured: true,
        active: true
    },
    {
        id: 2,
        name: 'planta 2',

        description: 'descricao planta 2',
        shortDescription: 'descricao planta curta 2',

        value: 140.00,
        promotionalValue: 119.00,

        images: produto2,

        category: 'planta',
        subCategory: 'interior',
        brand: 'Lamata',
        tags: ['verde', 'indoor', 'ornamental'],

        stock: 3,
        sku: 'MIDAJSNSADDWD',

        height: 110,
        width: 20,
        weight: 1.5,

        sunlight: 'meia-sombra',
        watering: '2x semana',

        featured: true,
        active: true
    },
    {
        id: 3,
        name: 'planta3',

        description: 'descricao planta3',
        shortDescription: 'descricao planta curta3',

        value: 90.00,
        promotionalValue: 69.00,

        images: produto3,

        category: 'planta',
        subCategory: 'interior',
        brand: 'Lamata',
        tags: ['verde', 'indoor', 'ornamental'],

        stock: 5,
        sku: 'MIDAJSASDAHHJTND',

        height: 10,
        width: 10,
        weight: 0.5,

        sunlight: 'meia-sombra',
        watering: '2x semana',

        featured: true,
        active: true
    }
]