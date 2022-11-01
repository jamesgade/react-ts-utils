export interface TourProps {
    id: number
    info: string
    name: string
    price: number
    image: string
    deleteTour: (id: number) => void
}
