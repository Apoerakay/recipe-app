import { Container } from "@mui/material";
import { useParams } from "react-router-dom"
import useSWR from "swr";
import spinner from "../../assets/images/infinite-spinner.svg";

const getRecipe = (...args) => {
    // Prepare URL
    const url = new URL(...args);
    url.searchParams.append('apiKey', process.env.REACT_APP_SPOONACULAR_API_KEY);
    // Fetch and return data

    return fetch(url).then(response => response.json())
}

export default function Recipe() {
    const { id } = useParams();

    const {data : recipe, isLoading } = useSWR(`https://api.spoonacular.com/recipes/${id}/information`, getRecipe);

    console.log(recipe, isLoading);
    


    return (
        <>
        {isLoading?<img src={spinner}/> : (
            <Container>
            <h1>  {recipe.title} </h1>
            {/* <p>{recipe.summary}</p> */}
            <div dangerouslySetInnerHTML={{__html:recipe.summary}}></div>
            <img src={recipe.image}></img>
            </Container>
        )}
        </>
    );
}