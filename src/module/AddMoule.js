import React, { Component } from 'react';
import _ from 'lodash';

class AddModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtInput: ''
        };

        this.onChangeInput = this.onChangeInput.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
        // this.testLodash = this.testLodash.bind(this);
    }

    onChangeInput = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    handleAddItem = () => {
        if(this.state.txtInput == "")
            return undefined;

        const item = {
            value : this.state.txtInput
        };

        this.props.onclickSubmit(item);
        // reset input text.
        this.setState({
            txtInput : ''
        })
    }

    // testLodash = () => {
    //     var users = [
    //         { 'user': 'barney', 'age': 36, 'active': true },
    //         { 'user': 'fred',   'age': 40, 'active': false }
    //       ];
           
    //       let _user = _.filter(users, function(o) { return !o.active; });
    //     console.log(_user);
    // }

    render() {

        // {this.testLodash()}
        return (
            <div className="headForm">
                <input className="txtInput" name="txtInput" value={this.state.txtInput} type="text" onChange={this.onChangeInput} />
                <input className="btnSubmit bg-primary text-white" type="button" value="Add Item" onClick={this.handleAddItem} />
            </div>
        );
    }
}

export default AddModule;