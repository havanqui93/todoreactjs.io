import React, { Component } from 'react';

class Items extends Component {

    constructor(props){
        super(props);

        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    };

    handleDeleteItem(id){
        this.props.onclickBtnDelete(id);
    }
    
    render() {
        let dataItems = this.props.dataItems;
        if(dataItems != null && dataItems.length > 0)
            dataItems = dataItems.map((data, index) => {
                return <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-primary" key={index}>{data.value}<span className="badge badge-primary badge-pill" onClick={(e) => this.handleDeleteItem(data.id)}>X</span></li>
            })

        return (
            <ul className="form-control list-item list-group">
                {dataItems}
            </ul>
        );
    }
}

export default Items;