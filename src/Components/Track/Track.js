import React from "react";
import './Track.css';

class Track extends React.Component {
  renderAction() {
    if (this.props.isRemoval) {
      return (
        <button className="Track-action" onClick={ this.removeTrack }>-</button>
      )
    } else {
      return (
        <button className="track-action" onClick={ this.addTrack }>+</button>
      )
    }
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>Track name here</h3>
          <p>track artist | track album</p>
        </div>
        { this.renderAction() }
      </div>
    )
  }
}

export default Track;