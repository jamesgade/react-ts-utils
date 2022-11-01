import Tour from "./Tour";
import { TourProps } from "../interface/TourProps"

type ToursComponentProps = {
    tours: TourProps[],
    deleteTour: (id: number) => void
}

const Tours = ({ tours, deleteTour }: ToursComponentProps) => {

    console.log(tours)

    return (
        <section>
            <div className="title">
                <h2>Our Tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                {tours.map((tour: TourProps) => {
                    return <Tour key={tour.id} {...tour} deleteTour={deleteTour} />
                })}
            </div>
        </section>
    );
};

export default Tours;
