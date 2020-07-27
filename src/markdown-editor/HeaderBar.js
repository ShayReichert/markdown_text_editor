import React, { Component, Fragment } from 'react';
import '../App.css';

class HeaderBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const { titleDisplay } = this.props;
        return (
            <Fragment>
                <p className="header-bar"> {titleDisplay} </p>
            </Fragment>
        )
    }
}
export default HeaderBar;