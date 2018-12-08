import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('Store') @observer
class MainContainer extends React.Component {
    render() { 
        return (<div>hello</div>);
    }
}

export default MainContainer;