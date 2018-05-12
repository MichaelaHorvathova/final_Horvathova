import React, { Component } from "react";

class Čas extends Component {
    render() {
        let datum = new Date();
        return <div>Dnes je : {datum.toLocaleDateString()} </div>;


    }
}

export default Čas;