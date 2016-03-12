require('normalize.css');
require('styles/App.css');

import React from 'react';
import styles from '../styles/containers/SearchContainer';

let yeomanImage = require('../images/yeoman.png');

class SearchComponent extends React.Component {

  updateDimensions(){
    this.setState({width: window.innerWidth, height: window.innerHeight}, () => {
      this.computeSearchBoxStyles();
    });

  }
  componentWillMount() {
    this.updateDimensions()
    console.log('THIS', this);
  }
  componentDidMount(){
    let updateDimensions = this.updateDimensions.bind(this);
    window.addEventListener('resize', updateDimensions);
  }
  componentWillUnmount(){
    let updateDimensions = this.updateDimensions.bind(this);
    window.removeEventListener('resize', updateDimensions);
  }
  containerStyles() {
    if (this.state.width < 680) {
      styles.container.width = '100%';
      styles.margin = '0 0';
      return styles.container;
    } else {
      styles.container.width = '70%';
      styles.margin = '0 auto';
      return styles.container;
    }
  }
  computeSearchBoxStyles() {

    if (this.state.width < 680) {
      styles.searchBox.input.width = '100%';
      styles.searchBox.button.width = '100%';
      this.setState({inputStyles: styles.searchBox.input});
      this.setState({buttonStyles: styles.searchBox.button});
    } else {
      styles.searchBox.input.width = 'auto';
      styles.searchBox.button.width = '50%';
      this.setState({inputStyles: styles.searchBox.input});
      this.setState({buttonStyles: styles.searchBox.button})
    }
  }
  render() {
    return (
      <div style={this.containerStyles()}>
        <div className="notice"><h1>Search Site</h1></div>
        <div className="search-box">
          <input style={this.state.inputStyles} type="text" name="search" placeholder="search" ref="searchString" onChange={this.props.onChange}/>
          <button style={this.state.buttonStyles} type="button" name="submit_search" onClick={this.props.submit}>search</button>
        </div>
        <div className="previous-searches">
          <ul>
            {this.props.searchString.map( (string, i) => {
              return (
                <li>{string}</li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

SearchComponent.defaultProps = {
  searchString : []
};

export default SearchComponent;
