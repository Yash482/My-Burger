import React from 'react';

import classes from './Layout.css'

import Aux from '../../hoc/Auxilliary';

const layout = (props) => (
    <Aux>
        <div>Navbaar</div>
        <main className = {classes.Content}>
            {props.children}
        </main>
    </Aux>
)

export default layout ;