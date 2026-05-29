export interface Testimonial {
    id: number
    name: string
    location: string
    text: string
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Ana Beatriz',
        location: 'Barra da Tijuca, RJ',
        text: 'Comprei minha primeira planta na Lamata há dois anos e até hoje recebo orientações do Matheus. Nunca vi um atendimento assim.',
    },
    {
        id: 2,
        name: 'Ricardo Alves',
        location: 'Botafogo, RJ',
        text: 'O espaço é incrível. Passei uma tarde inteira entre as estufas e saí com três plantas e muito mais calma do que entrei.',
    },
    {
        id: 3,
        name: 'Fernanda Costa',
        location: 'São Paulo, SP',
        text: 'A planta chegou perfeitamente embalada, com um guia de cuidados escrito à mão. Um detalhe que faz toda a diferença.',
    },
]
