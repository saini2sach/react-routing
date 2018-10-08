
import React, { Component } from "react";
import Minions from '../images/minions.jpg'

export default class Gallery extends Component {
    displayData() {
        var obj = document.querySelector('.div-container + .data-container');
        obj.style.display = (obj.style.display === 'block') ? 'none' : 'block';
    }
    render() {
        return (
            <div>
                <div className="div-container" onClick={this.displayData.bind(this)} >
                    This is Gallery page..!
                </div>
                <div className="data-container div-container">
                    <img src={Minions} alt="Minions groups" className="minion-pics"/>
                Aliquam fringilla molestie hendrerit. Praesent interdum tristique dignissim. Proin faucibus ipsum vitae sapien convallis rhoncus. Donec ultricies hendrerit tellus, at iaculis lacus porttitor a. Etiam in sagittis purus. Donec tincidunt sed eros fringilla convallis. Mauris ac molestie ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </div>
            </div>
        )
    }
}