import React from 'react';
import { ArrowBack } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import './Mail.css';

function Mail() {
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => history.push('/')}>
            <ArrowBack />
          </IconButton>
        </div>
        <div className="mail__toolsRight">

        </div>
      </div>
    </div>
  );
}

export default Mail;
