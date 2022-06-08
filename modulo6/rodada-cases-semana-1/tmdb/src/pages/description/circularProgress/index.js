import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

function CircularProgressWithLabel(props) {

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }} >
      <CircularProgress sx={{color: '#14FF00', backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%'
        }} variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          
        }}
      >
        <Typography variant="caption" component="div" color="#14FF00">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function CircularStatic({percentage}) {
  if(isNaN(percentage)){
    percentage = 0
  }
  return <CircularProgressWithLabel value={percentage} />;
}
