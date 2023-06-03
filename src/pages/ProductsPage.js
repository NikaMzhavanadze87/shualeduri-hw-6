import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import { FavoriteBorder } from '@mui/icons-material';

function ProductsPage({searchResults}) {
  
  

  return (
    <div style={{ marginTop: '2rem', maxWidth: '1440px', margin: '0 auto' }}>
      <Grid container spacing={2} style={{ padding: '16px' }}>
        
        {searchResults.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.product_Id}>
            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardMedia component="img" height="200" image={product.photo} />
              <CardContent>
                <Typography variant="h5" component="div">{product.title}</Typography>
                <Typography variant="body1">{product.stripped_descr}</Typography>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: 'auto' }}>
                  <Typography variant="h6" style={{ marginRight: '8px' }}>{product.price}</Typography>
                  <IconButton sx={{ color: 'lightgrey' }}>
                    <FavoriteBorder />
                  </IconButton>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProductsPage;
