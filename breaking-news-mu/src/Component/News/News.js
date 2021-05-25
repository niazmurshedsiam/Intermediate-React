import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      margin: 10,
      padding: 10
    },
    media: {
      height: 140,
    },
  });

const News = (props) => {
    const classes = useStyles();
    const {urlToImage,title,description} = props.article;
    return (
        
    <Card className={classes.root}>
        
      <CardActionArea>
          
        <CardMedia
          className={classes.media}
          image={urlToImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color="primary">
        Details
      </Button>
        
      </CardActions>
    </Card>
        
    );
}

export default News;