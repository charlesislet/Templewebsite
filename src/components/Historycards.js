import Historycard from "./Historycard";
import Grid from '@material-ui/core/Grid';

const Historycards = ( { selectedHistorycards }) => {
    return (
        <div className="historycards">
            <Grid container spacing={3}>
                {selectedHistorycards.map(element => {
                    return <Historycard historycard={element} />
                })}
            </Grid>
        </div>
    )
}

export default Historycards;