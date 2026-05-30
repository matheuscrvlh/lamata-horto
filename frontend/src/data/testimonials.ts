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
        text: 'Atendimento nota 10. O Matheus tirou todas as minhas dúvidas e ainda me ajudou a escolher a planta certa pro meu apartamento.',
    },
    {
        id: 2,
        name: 'Ricardo Alves',
        location: 'Botafogo, RJ',
        text: 'Plantas de qualidade e preço justo. Já comprei três vezes e todas chegaram em perfeito estado. Recomendo muito.',
    },
    {
        id: 3,
        name: 'Fernanda Costa',
        location: 'São Paulo, SP',
        text: 'Fui bem atendida do começo ao fim. Senti que se importam de verdade com o cliente, não é só vender e acabou.',
    },
]
