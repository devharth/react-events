import React, { Component } from 'react'

export default class AnnoyingForm extends Component {
    handleKeyUp = evt => {
        if (evt.keyCode === 56) {
          alert("MOAR * PLZ");
        } else {
          alert("NO!");
        }
      }
      render() {
        return (
          <div>
            <h3>Try Typing In Here:</h3>
            <textarea onKeyUp={this.handleKeyUp} />
          </div>
        );
      }
}
