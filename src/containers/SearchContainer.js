/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from '../components/Search';
/* Populated by react-webpack-redux:reducer */
class SearchContainer extends Component {
  render() {
    const {actions} = this.props;
    return <Search {...this.props.search} ref="searchBox" submit={this.submit.bind(this)} />;
  }

  submit() {
    console.log('SEARCHING....', this);
    var qString = this.refs.searchBox.refs.searchString.value;
    this.props.actions.submitSearch(qString);

  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
SearchContainer.propTypes = {
   actions: PropTypes.object.isRequired,
   search: PropTypes.object.isRequired,
   user: PropTypes.object.isRequired
 };
 function mapStateToProps(state) {
   /* Populated by react-webpack-redux:reducer */
   const props = {
     search: state.search,
     user: state.user
   };
   return props;
 }
 function mapDispatchToProps(dispatch) {
   /* Populated by react-webpack-redux:action */
   const actions = { submitSearch: require('../actions/search/submitSearch.js') };
   const actionMap = { actions: bindActionCreators(actions, dispatch) };
   return actionMap;
 }
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
