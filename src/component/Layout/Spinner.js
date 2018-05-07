import React from 'react';

import classes from './Spinner.css';

const spinner = () => (
    <div className={classes.spinnerOverlay}>
        <div className={classes.spinnerWrapper}>
            <div className={classes.spinner}></div>
        </div>
    </div>

);

export default spinner;