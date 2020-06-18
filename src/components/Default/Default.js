import React, {Component} from 'react';

class Default extends Component{
    render(){
        console.log(this.props);
        return(
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1>404</h1>
                        <h1>error</h1>
                        <h2>page  <span style={{color:"red"}}>{this.props.location.pathname}</span> not found</h2>
                    </div>
                </div>
            </div>
        )
    }
}
export default Default;