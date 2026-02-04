import { useParams } from "react-router-dom";
import { OurHistory } from "./OurHistory.jsx";
import { Inspiration } from "./Inspiration.jsx";
import { Contact } from "./Contact.jsx";
import { ErrorView } from "../../exception/ErrorView.jsx";

export const Our = () => {

    const { option } = useParams();

    const options = {
        "nuestra-historia": 1,
        "inspiracion": 2,
        "contacto": 3
    }

    if(options[option] === 1)  {
        return <OurHistory />
    }else if(options[option] === 2) {
        return <Inspiration />
    }else if(options[option] === 3) {
        return <Contact />
    }else {
        return <ErrorView />
    }

}