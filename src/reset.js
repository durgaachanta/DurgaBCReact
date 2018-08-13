import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const reset = (props) => {
  return (
    <div>
      <Button variant="outlined" onClick={props.resetPlay}>
        {props.display}
      </Button>
    </div>

  );
};

reset.propTypes = {
  display: PropTypes.string.isRequired,
  resetPlay: PropTypes.func.isRequired,
};

export default reset;
