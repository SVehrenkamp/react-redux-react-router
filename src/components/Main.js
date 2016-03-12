require('normalize.css');
require('styles/App.css');

import React from 'react';
import SearchContainer from '../containers/SearchContainer';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        Global Stuff Here
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
