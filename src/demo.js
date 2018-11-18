import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import { simpleAction } from './actions/simpleAction'

class Demo extends Component {
    simpleAction = (event) => {
        this.props.simpleAction();
       }
 render() {
  return (
    <div>
        <pre>
    {
    JSON.stringify(this.props)
    }
</pre>
<button onClick={this.simpleAction}>Test redux action</button>
    </div>

  );
 }
}
const mapStateToProps = state => ({
    ...state
   })

const mapDispatchToProps = dispatch => ({
simpleAction: () => dispatch(simpleAction())
})   
export default connect(mapStateToProps, mapDispatchToProps)(Demo);