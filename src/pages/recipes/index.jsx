import { CardMedia, Container, Grid, TextField, Card, CardContent } from "@mui/material";



export default function Recipes(){
    return(
        <Container sx={{my: '2rem'}} maxWidth="sm">
     <TextField 
     fullWidth
      id="outlined-basic" 
      label="Enter a keyword to search recipes and hit enter" 
      variant="outlined" />


      <Grid sx={{mt:'1rem'}} container spacing={3}>
       <Grid item xs={4}>
        <Card>
        <CardMedia 
        sx={{height: 140}}
        image="https://images.unsplash.com/photo-1708312609475-0c339fa63bc5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        </Card>
        <CardContent variant="h5">Recipe Name</CardContent>
       </Grid>

      </Grid>
        </Container>
    )
}