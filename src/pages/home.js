import React, { useState } from 'react';
import { useQuery } from "@apollo/client"

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';

import ProductModel from '../components/ProductModel';

// import UserModel from '../components/UserModel';

import { GET_PRODUCT_COMMENTS } from '../gql/query';

const CustomizedCard = styled(Card)`
    margin: 30px auto 0;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    position: relative;
    background-color: #f6f6f6;
`;

const CustomizedCardMedia = styled(CardMedia)`
  border-radius: 30px;
  position: relative;
  z-index: 2;
`;

const CustomizedCardContent = styled(CardContent)`
  color: white;
  background-color: #ab877c;
  padding-top: 50px;
  padding-bottom: 30px;
  position: relative;
  top: -28px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

const CustomizedTypography = styled(Typography)`
  color: white;
`;

const CustomizedCardActions = styled(CardActions)`
  background-color: #f6f6f6;
  color: #9a7f7e;
  justify-content: center;
  position: relative;
  top: -10px;
`;


const MultiActionAreaCard = props => {
    const [value, setValue] = useState({ content: props.content || '' });

    return (
      <CustomizedCard sx={{ maxWidth: 345 }}>
        <CustomizedCardMedia
          component="img"
          height="140"
          image="https://i.pinimg.com/564x/c3/09/13/c309132f5d48a6262199af1841b32c7a.jpg"
          alt="green iguana"
        />
        <CustomizedCardContent>
          <Typography gutterBottom variant="h5" component="div">
            {value.content.product.name}
          </Typography>
          <CustomizedTypography variant="body2">
            STAR: {value.content.star} ☆
          </CustomizedTypography>
          <CustomizedTypography variant="body2">
            COMMENT: {value.content.comment}
          </CustomizedTypography>
        </CustomizedCardContent>
        <CustomizedCardActions>
          <ProductModel productId = {value.content.product.id} />
          {/* <CustomizedButton color="primary">
            View Product
          </CustomizedButton> */}
        </CustomizedCardActions>
      </CustomizedCard>
    );
  }

const Home = () => {
    const { loading, error, data } = useQuery(GET_PRODUCT_COMMENTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <Grid container spacing={2}>
        {data.product_comments.data.map((item) => (
        
            <Grid item xs={6} key={item.star}>
                <div>
                    <MultiActionAreaCard content={item} />
                </div>
            </Grid>
        ))}
      </Grid>
    )
};

export default Home