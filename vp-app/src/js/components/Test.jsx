import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeText} from '../actions/index';

class Test extends Component {
    constructor(){
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        this.props.changeText({justtest: "something new", secondtest:"second new thing"});
    }

    render(){

        const {justtest, secondtest} = this.props;

        return (
            <div>
                <p>First test: {justtest}</p>
                <p>Second test: {secondtest}</p>
                <input type="button" value="Update" onClick={this.handleClick} />
            </div>
        );
    }
}


const mapStateToProps = (state => ({justtest: state.justtest, secondtest: state.secondtest}));

export default connect(mapStateToProps, {changeText})(Test);