import React from 'react';
import Aux from '../../hoc/Aux';
import style from './Layout.css'

const layout = (property)=> (
    <Aux>
        <div>
            Toolbar, SideDrawer, BackDrop
        </div>
        <main className={style.Content}>
            {property.children}
        </main>
    </Aux>
);

export default layout;