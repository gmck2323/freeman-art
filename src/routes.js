import React from 'react';
import { Route } from 'react-router-dom';

import Artist from './Artist'
import Collectors from './Collectors'


const BaseRouter = () => (
    <div>
        <Route exact path ="/" component={Artist} />
        <Route exact path ="/artists" component={Artist} />
        <Route exact path ="/collectors" component={Collectors} />
    </div>
)

export default BaseRouter