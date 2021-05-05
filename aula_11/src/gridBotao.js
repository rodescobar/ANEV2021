import { 
    Button, 
    Grid 
} from '@material-ui/core'

const gridBotao = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Button 
                    variant="outlined"
                    onClick={ () => { alert("Hello mundão!!!") }}
                >
                    Default
                </Button>

            </Grid>
            <Grid item xs={6}>
                <Button 
                    color="primary"
                    variant="outlined"
                    onClick={ () => { alert("Hello mundão!!!") }}
                >
                    Outro botao
                </Button>

            </Grid>
            <Grid item xs={6}>
                <Button 
                    color="secondary"
                    variant="outlined"
                    onClick={ () => { alert("Hello mundão!!!") }}
                >
                    Outro botao
                </Button>

            </Grid>

        </Grid>
    )
}

export default gridBotao