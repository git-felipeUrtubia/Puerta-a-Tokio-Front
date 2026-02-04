import { useParams } from "react-router-dom"
import { CityGuides } from "./CityGuides.jsx"
import { Gastronomy } from "./Gastronomy.jsx";
import { TravelTips } from "./TravelTips.jsx";
import { ErrorView } from "../../exception/ErrorView.jsx";

export const Blog = () => {

    const { option } = useParams();

    const options = {
        "guias-de-ciudad": 1,
        "gastronomia": 2,
        "concejos-de-viaje": 3
    }

    if(options[option] === 1) {
        return <CityGuides />
    }else if(options[option] === 2) {
        return <Gastronomy />
    }else if(options[option] === 3) {
        return <TravelTips />
    }else {
        return <ErrorView />
    }

}