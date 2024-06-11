import React from 'react';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import { Link } from 'react-router-dom';

const RoundedButton = ({ content, icon, link, color, txt }) => {
  const buttonStyles = {
    borderRadius: '20px',
    border: '1px solid white',
    backgroundColor: color || 'transparent',
    color: txt || 'white',
    padding: '5px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  };

  return (
    <Button style={buttonStyles} component={Link} to={link}>
      {icon && <SvgIcon component={icon} style={{ marginRight: '8px' }} />}
      {content}
    </Button>
  );
};

export default RoundedButton;