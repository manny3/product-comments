import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import { useLazyQuery } from "@apollo/client"
import { GET_PRODUCT } from '../gql/query';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  backgroundColor: '#f1ecec',
  borderRadius: '20px',
  color: '#61464c'
};

const titleStyle = {
  fontSize: '26px',
  mt: 2
};

const textStyle = {
  fontSize: '18px',
  mt: 2
};

const ProductModelButton = styled(Button)`
  color: #a08585;
  font-size: 18px;
  font-weight: bold;
`;

const ProductModel = ({productId}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setProductData();
  const handleClose = () => setOpen(false);

  const [getProductData ,{ data, loading, error }] = useLazyQuery(GET_PRODUCT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const setProductData = () => {
    const id = productId
    getProductData({ variables: { id } })
    setOpen(true);
  }

  return (
    <div>
      <ProductModelButton onClick={handleOpen}>Open modal</ProductModelButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2" sx={ titleStyle }>
              {data?.product && data.product.name}
            </Typography>
            <Typography id="transition-modal-description" sx={textStyle}>
              Description: {data?.product && data.product.description}
            </Typography>
            <Typography id="transition-modal-description" sx={textStyle}>
              Price: {data?.product && data.product.price}
            </Typography>
            <Typography id="transition-modal-description" sx={textStyle}>
              Date Added: {data?.product && data.product.created_at}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ProductModel;