import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width:300,
        maxWidth:300
    },
});

const Historycard = ( { historycard }) => {
    const classes = useStyles();
    return (
        <Grid container justifyContent="center" alignItems="center" item xs={12} md={12} key={historycard.id}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className="img__musician"
                    image={historycard.image}
                    title={historycard.name}
                    height="200"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {historycard.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {historycard.description} 
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