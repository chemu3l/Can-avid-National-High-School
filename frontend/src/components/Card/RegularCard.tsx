import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import type { NewsCardInterface } from "../../types/NewsCard.interface";
 
 const RegularCard = () => {

    const handleReadMore = () => {
    window.location.href = '/recipe-details';
  };
  
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: '#e0e0e0' }}>
      <CardHeader
        title="Shrimp and Chorizo Paella"
        sx={{ backgroundColor: '#4caf50', color: 'white' }}
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          01/01/2026
        </Typography>
        <Button
          variant="contained"
          onClick={handleReadMore}
          sx={{ marginLeft: 'auto' }}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default RegularCard;