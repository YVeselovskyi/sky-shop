import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
   Card,
   CardActionArea,
   CardMedia,
   CardContent,
   Typography,
   CardActions,
   Button,
   Grid,
} from '@material-ui/core';

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles((theme) => ({
   cardWidth: {
      maxWidth: 345,
      [theme.breakpoints.down('xs')]: {
         maxWidth: 'none',
      },
   },
   buyBtn: {
      justifyContent: 'space-between',
      padding: theme.spacing(3),
   },
}));

const clothesCard = (clothe) => {
   const classes = useStyles();
   const { _id, name, description, category, price, imgUrl } = clothe;
   if (category === 'Clothes') {
      return (
         <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className={classes.cardWidth}>
               <CardActionArea>
                  <CardMedia
                     component='img'
                     alt='Clothes'
                     image={imgUrl}
                     title='Man clothes'
                  />
                  <CardContent>
                     <Typography gutterBottom variant='h5' component='h2'>
                        {name}
                     </Typography>
                     <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'
                     >
                        {description.split('-').join(' ')}
                     </Typography>
                  </CardContent>
               </CardActionArea>
               <CardActions className={classes.buyBtn}>
                  <Typography variant='h4'>
                     {price}
                     <AttachMoneyIcon />
                  </Typography>
                  <Button
                     size='medium'
                     color='primary'
                     variant='outlined'
                     // onClick={addToCart.bind(this, clothe)}
                  >
                     Buy
                  </Button>
               </CardActions>
            </Card>
         </Grid>
      );
   } else {
      return <></>;
   }
};

export default clothesCard;
