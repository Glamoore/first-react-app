import React, {useContext} from 'react';
import classNames from 'classnames';
import {MenuContext} from './../contexts/menu.context';
import styles from './ToggleDisplay.module.css';
import Button from '@mui/material/Button';

function ToggleDisplay(){
  const {text} = styles;
  const { isOpen, toggle } = useContext(MenuContext);
  console.log({ isOpen, toggle });
  return (
    <>
      <p className={classNames(text, { open: isOpen })}>Toggle Value: {`${isOpen}`}</p>
      <Button variant="outlined" onClick={toggle}>Outlined</Button>
    </>
  );
}

export default ToggleDisplay;