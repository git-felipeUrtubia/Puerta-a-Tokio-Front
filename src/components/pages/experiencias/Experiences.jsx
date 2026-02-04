import { useParams } from "react-router-dom"
import { Matsuri } from "./Matsuri.jsx"
import { Temples } from "./Temples.jsx";
import { Nature } from "./Nature.jsx";
import { Neighborhoods } from "./Neighborhoods.jsx";
import { ErrorView } from "../../exception/ErrorView.jsx";

export const Experiences = () => {

    const { option } = useParams();

    const options = {
        "matsuri": 1,
        "santuarios-y-templos": 2,
        "naturaleza": 3,
        "barrios-emblematicos": 4
    }

    if(options[option] === 1) {
        return <Matsuri />
    }else if(options[option] === 2) {
        return <Temples />
    }else if(options[option] === 3) {
        return <Nature />
    }else if(options[option] === 4) {
        return <Neighborhoods />
    }else {
        return <ErrorView />
    }

}

