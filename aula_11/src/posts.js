import { useEffect, useState } from 'react'
import axios from 'axios'

import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    Typography,
    Grid,
    Divider,
    Button
} from '@material-ui/core'

const Posts = () => {
    const [ posts, setPost ] = useState([])

    useEffect(() => {
        buscarPosts()
    }, [])

    const buscarPosts = async () => {
        let url = "https://jsonplaceholder.typicode.com/photos"
        await axios.get(url)
            .then( (result) => {
                setPost(result.data)
            })
    }

    const lista = posts.slice(0, 15).map( (linha, key) =>{
        return(
            <div>
                <Card key={ key }>
                    <CardHeader title={linha.title} />

                    <CardMedia
                        style={{ height: 0, paddingTop: '56.25%'}}
                        image={ linha.thumbnailUrl }
                    />
                    <CardContent>
                        <Typography  component="p">
                            { linha.title }
                            { linha.title }
                            { linha.title }
                            { linha.title }
                        </Typography>
                    </CardContent>
                    <Button color="secondary" variant="contained">Ler mais</Button>
                </Card>
                <Divider />
            </div>
        )
    })

    return (
        <Grid container>
            <Grid item xs={ 12 } sm={3} ms={6}>
                { lista }
            </Grid>
        </Grid>
    )
}

export default Posts