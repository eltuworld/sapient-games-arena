import React, { Component } from 'react';

class GamesList extends Component {
  render() {
    return (
      <ul className="list-group">
      {
        this.props.list.map(function(data, i) {
          return <a href={"http://www.ign.com" + data.url} key={i} className="list-group-item list-group-item-action" target="_blank">
          {data.editors_choice === "Y" &&
          <span className="badge">Editors choice</span>
          }
          <h3 className="list-group-item-heading">{data.title}</h3>
          <h4 className="list-group-item-heading">{data.platform}</h4>
          <p>Genre : {data.genre} | Score : {data.score} | Released in {data.release_year}</p></a>
        })
       }
      </ul>
    );
  }
}

export default GamesList;
