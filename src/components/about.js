
import React, { Component } from "react";

export default class About extends Component {
    displayData() {
        var obj = document.querySelector('.div-container + .data-container');
        obj.style.display = (obj.style.display === 'block') ? 'none' : 'block';
    }
    render() {
        return (
            <div>
                <div className="div-container" onClick={this.displayData.bind(this)} >
                    This is About page..!
                </div>
                <div className="data-container  div-container">
                Cras feugiat, massa rutrum sagittis consequat, quam sem vestibulum dolor, eget ultricies felis urna dapibus dolor. Nunc id fermentum lacus. Aliquam quis eros faucibus, commodo ante non, convallis ligula. Quisque cursus auctor metus vitae pharetra. Aenean in porta magna. In malesuada, mauris ac consectetur laoreet, justo neque mollis risus, at volutpat mauris orci sit amet libero. Nulla gravida magna ut risus condimentum ultrices. Donec a pretium nisi, vitae malesuada lacus. Quisque a turpis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec vitae sapien interdum justo pulvinar maximus. Vivamus non leo ut dui vestibulum accumsan ut a ante.
                </div>
            </div>
        )
    }
}