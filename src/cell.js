import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import './tic.css';

const cell = (props) => {
  return(
    <div>
      <Button value={props.id} variant="contained" onClick={props.fillcell} disabled={props.disabled}>{props.playerCellData}</Button>
   </div>

  );

};
cell.propTypes = {
  playerCellData: PropTypes.string.isRequired,
  fillcell: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,

};

export default cell;
