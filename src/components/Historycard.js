import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Historycard = ( { historycard }) => {
    return (
        <Grid item xs={12} md={3}  key={historycard.id}>
            <Card>
                <CardActionArea>
                    <CardMedia className="img__musician"
                    image={historycard.image}
                    title={historycard.name}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {historycard.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {historycard.description.substring(0, 200)} ...
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <a href={historycard.link} target="_blank">
                        <Button size="small" color="primary">
                        learn more
                        </Button>
                    </a>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Historycard;