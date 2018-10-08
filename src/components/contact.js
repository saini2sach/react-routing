
import React, { Component } from "react";

export default class Contact extends Component {
    displayData() {
        var obj = document.querySelector('.div-container + .data-container');
        obj.style.display = (obj.style.display === 'block') ? 'none' : 'block';
    }
    render() {
        return (
            <div>
                <div className="div-container" onClick={this.displayData.bind(this)} >
                    This is Contact page..!
                </div>
                <div className="data-container div-container">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </div>
            </div>
        )
    }
}