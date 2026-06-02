// images
import produto1 from '../assets/products/1.png'
import produto2 from '../assets/products/2.png'
import produto3 from '../assets/products/3.png'
import produto4 from '../assets/products/4.png'
import produto5 from '../assets/products/5.png'
import produto6 from '../assets/products/6.png'
import produto7 from '../assets/products/7.png'
import produto8 from '../assets/products/8.png'
import produto9 from '../assets/products/9.png'
import produto10 from '../assets/products/10.png'
import produto11 from '../assets/products/11.png'

import type { Product } from '../types/products'

export const products: Product[] = [
    {
        id: 1,
        name: 'Kokedama Sansevieria',

        description: 'A Sansevieria, conhecida como língua-de-sogra, é uma das plantas mais resistentes e purificadoras do ar. Nesta versão kokedama, ela é cultivada em uma esfera artesanal de musgo e fibra, acompanhada de suporte de madeira. Ideal para quem busca beleza com baixíssima manutenção.',
        shortDescription: 'Sansevieria em kokedama artesanal com suporte de madeira. Purifica o ar e exige pouquíssima atenção.',


        images: produto1,

        category: 'planta',
        subCategory: 'kokedama',
        brand: 'Lamata',
        tags: ['kokedama', 'indoor', 'ar-puro', 'baixa-manutenção', 'sansevieria'],

        stock: 8,
        sku: 'KOK-SAN-001',

        height: 45,
        width: 20,
        weight: 1.2,

        sunlight: 'meia-sombra',
        watering: '1x por semana',

        featured: true,
        active: true,
    },
    {
        id: 2,
        name: 'Kokedama Antúrio Branco',

        description: 'O Antúrio Branco traz elegância e floração prolongada para ambientes internos. Em formato kokedama, a esfera de musgo artesanal substitui o vaso e mantém a umidade ideal para a planta prosperar. Suas flores brancas contrastam lindamente com as folhas verde-escuras.',
        shortDescription: 'Antúrio branco florido em kokedama artesanal. Elegante e de floração duradoura.',


        images: produto2,

        category: 'planta',
        subCategory: 'kokedama',
        brand: 'Lamata',
        tags: ['kokedama', 'indoor', 'florido', 'ornamental', 'antúrio'],

        stock: 5,
        sku: 'KOK-ANT-001',

        height: 30,
        width: 25,
        weight: 1.0,

        sunlight: 'meia-sombra',
        watering: '2x por semana',

        featured: true,
        active: true,
    },
    {
        id: 3,
        name: 'Kokedama Palmeira de Bambu',

        description: 'A Palmeira de Bambu (Chamaedorea) traz um toque tropical e sofisticado para qualquer ambiente. Cultivada em kokedama artesanal, suas folhas delicadas e arqueadas criam uma presença única. Adapta-se bem a ambientes internos com luminosidade indireta.',
        shortDescription: 'Palmeira de Bambu em kokedama artesanal. Toque tropical para ambientes internos.',


        images: produto3,

        category: 'planta',
        subCategory: 'kokedama',
        brand: 'Lamata',
        tags: ['kokedama', 'indoor', 'tropical', 'ornamental', 'palmeira'],

        stock: 6,
        sku: 'KOK-PAL-001',

        height: 35,
        width: 30,
        weight: 1.1,

        sunlight: 'meia-sombra',
        watering: '2x por semana',

        featured: true,
        active: true,
    },
    {
        id: 4,
        name: 'Forth Bokashi 250g',

        description: 'O Forth Bokashi é um fertilizante orgânico de origem japonesa que revitaliza a vida microbiológica do solo. Rico em nutrientes naturais, melhora a estrutura do substrato e estimula o desenvolvimento saudável das plantas. Aplicação via solo.',
        shortDescription: 'Composto orgânico bokashi para revitalizar o solo e estimular a vida microbiológica.',


        images: produto4,

        category: 'insumo',
        subCategory: 'orgânico',
        brand: 'Forth',
        tags: ['orgânico', 'solo', 'fertilizante', 'bokashi', 'substrato'],

        stock: 20,
        sku: 'INS-BOK-001',

        height: 10,
        width: 10,
        weight: 0.25,

        sunlight: '—',
        watering: '—',

        featured: false,
        active: true,
    },
    {
        id: 5,
        name: 'Forth Enraizador',

        description: 'O Forth Enraizador é um estimulante orgânico e natural que promove o crescimento de raízes fortes e saudáveis. Ideal para mudas recém-transplantadas, estacas e plantas em fase de estabelecimento. Fórmula líquida de fácil aplicação.',
        shortDescription: 'Estimulante de raízes orgânico e natural. Ideal para mudas e estacas.',


        images: produto5,

        category: 'insumo',
        subCategory: 'estimulante',
        brand: 'Forth',
        tags: ['enraizador', 'raízes', 'orgânico', 'mudas', 'estacas'],

        stock: 15,
        sku: 'INS-ENR-001',

        height: 12,
        width: 5,
        weight: 0.15,

        sunlight: '—',
        watering: '—',

        featured: false,
        active: true,
    },
    {
        id: 6,
        name: 'Torta de Mamona 1kg',

        description: 'A Torta de Mamona é um adubo orgânico rico em nitrogênio que fortalece e revitaliza o jardim. Melhora a fertilidade do solo, estimula o crescimento saudável das plantas e funciona ainda como repelente natural de pragas do solo.',
        shortDescription: 'Adubo orgânico rico em nitrogênio. Fortalece o solo e repele pragas naturalmente.',


        images: produto6,

        category: 'insumo',
        subCategory: 'orgânico',
        brand: 'Maxgreen',
        tags: ['orgânico', 'adubo', 'solo', 'nitrogênio', 'jardim'],

        stock: 18,
        sku: 'INS-TOM-001',

        height: 15,
        width: 12,
        weight: 1.0,

        sunlight: '—',
        watering: '—',

        featured: false,
        active: true,
    },
    {
        id: 7,
        name: 'Fertilizante NPK 10-10-10 1kg',

        description: 'Fertilizante mineral misto granulado com equilíbrio NPK 10-10-10. Nutrição completa e equilibrada para todas as plantas do jardim. Melhora a floração, o enraizamento e a produção. Aplicação via solo.',
        shortDescription: 'NPK equilibrado 10-10-10 granulado. Nutrição completa para todas as plantas.',


        images: produto7,

        category: 'insumo',
        subCategory: 'fertilizante',
        brand: 'Maxgreen',
        tags: ['npk', 'granulado', 'jardim', 'mineral', '10-10-10'],

        stock: 22,
        sku: 'INS-NPK-GRA-001',

        height: 20,
        width: 14,
        weight: 1.0,

        sunlight: '—',
        watering: '—',

        featured: false,
        active: true,
    },
    {
        id: 8,
        name: 'Fertilizante NPK 10-10-10 Líquido 100ml',

        description: 'Fertilizante mineral líquido NPK 10-10-10 de ação rápida e equilibrada. Pode ser aplicado via solo ou fertirrigação. Nutrição completa para diversas plantas e hortas, com impacto imediato no desenvolvimento.',
        shortDescription: 'NPK 10-10-10 líquido de ação rápida. Via solo ou fertirrigação.',


        images: produto8,

        category: 'insumo',
        subCategory: 'fertilizante',
        brand: 'Maxgreen',
        tags: ['npk', 'líquido', 'fertirrigação', 'mineral', '10-10-10'],

        stock: 18,
        sku: 'INS-NPK-LIQ-001',

        height: 14,
        width: 5,
        weight: 0.15,

        sunlight: '—',
        watering: '—',

        featured: false,
        active: true,
    },
    {
        id: 9,
        name: 'Fertilizante 04-14-08 100ml',

        description: 'Fertilizante mineral líquido com fórmula NPK 04-14-08, especialmente indicado para potencializar a floração, o desenvolvimento e o enraizamento das plantas. Aplicação via solo ou fertirrigação. Ideal para plantas ornamentais e com flores.',
        shortDescription: 'NPK 04-14-08 líquido. Potencializa floração e enraizamento das plantas.',


        images: produto9,

        category: 'insumo',
        subCategory: 'fertilizante',
        brand: 'Maxgreen',
        tags: ['npk', 'floração', 'líquido', 'enraizamento', '04-14-08'],

        stock: 14,
        sku: 'INS-0408-001',

        height: 14,
        width: 5,
        weight: 0.15,

        sunlight: '—',
        watering: '—',

        featured: false,
        active: true,
    },
    {
        id: 10,
        name: 'Forth Jabuticabeiras 400g',

        description: 'Fertilizante especialmente formulado para jabuticabeiras. Com fórmula NPK+9 micronutrientes, favorece a floração abundante, o frutificação e a saúde geral da planta. Aplicação via solo, ideal para quem cultiva jabuticabeiras em vasos ou jardins.',
        shortDescription: 'Fertilizante específico para jabuticabeiras. Mais flores, mais frutos.',


        images: produto10,

        category: 'insumo',
        subCategory: 'fertilizante',
        brand: 'Forth',
        tags: ['jabuticabeira', 'frutífera', 'npk', 'floração', 'frutificação'],

        stock: 10,
        sku: 'INS-JAB-001',

        height: 12,
        width: 12,
        weight: 0.4,

        sunlight: '—',
        watering: '—',

        featured: false,
        active: true,
    },
    {
        id: 11,
        name: 'Forth Cote 14-14-14 150g',

        description: 'O Forth Cote é um fertilizante de liberação lenta com fórmula 14-14-14, ideal para iniciantes. Libera nutrientes gradualmente conforme a rega, garantindo nutrição contínua e segura por semanas. Perfeito para vasos, mudas e plantas em geral.',
        shortDescription: 'Fertilizante de liberação lenta 14-14-14. Ideal para iniciantes, vasos e mudas.',


        images: produto11,

        category: 'insumo',
        subCategory: 'fertilizante',
        brand: 'Forth',
        tags: ['liberação-lenta', 'iniciantes', 'vasos', 'mudas', '14-14-14'],

        stock: 16,
        sku: 'INS-COT-001',

        height: 10,
        width: 10,
        weight: 0.15,

        sunlight: '—',
        watering: '—',

        featured: false,
        active: true,
    },
]
