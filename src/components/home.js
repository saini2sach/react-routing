
import React, { Component } from "react";

export default class Home extends Component {
    displayData() {
        var obj = document.querySelector('.div-container + .data-container');
        obj.style.display = (obj.style.display === 'block') ? 'none' : 'block';
    }
    render() {
        return (
            <div>
                <div className="div-container" onClick={this.displayData.bind(this)} >
                    This is Home page..!
                </div>
                <div className="data-container div-container">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </div>
        )
    }
}