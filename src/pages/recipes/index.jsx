import { Container, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import RecipeItem from "../../components/recipe-item";



export default function Recipes(){
    const [recipes, setRecipes] = useState([]);
    const searchRecipes = () => {

        const url = new URL( "https://api.spoonacular.com/recipes/complexSearch");
        url.searchParams.append('apiKey','6984efcdae8c422ebdbefafc49d574f7')

        fetch(url)
        .then((response) => response.json())
        .then((data) => {
         //update recipes state
         //console.log({data});
         setRecipes(data.results)
        })
        .catch((error) => console.log (error));
    };
    useEffect(searchRecipes, [])

    return(
        <Container sx={{my: '2rem'}}>
     <TextField 
     fullWidth
      id="outlined-basic" 
      label="Enter a keyword to search recipes and hit enter" 
      variant="outlined" />


      <Grid sx={{mt:'1rem'}} container spacing={3}>
      {recipes.map((recipe) => <RecipeItem key={recipe.id} title={recipe.title} image={recipe.image}/>)}

      </Grid>
        </Container>
    );
}