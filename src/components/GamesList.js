import React, { Component } from 'react';

class GamesList extends React.Component {
  render() {
    return (
      <ul className="list-group">
      {
        this.props.list.map(function(data) {
          return <a href={"http://www.ign.com" + data.url} class="list-group-item list-group-item-action" target="_blank">
          {data.editors_choice === "Y" &&
          <span class="badge">Editors choice</span>
          }
          <h3 class="list-group-item-heading">{data.title}</h3>
          <h4 class="list-group-item-heading">{data.platform}</h4>
          <p>Genre : {data.genre} | Score : {data.score} | Released in {data.release_year}</p></a>
        })
       }
      </ul>
    );
  }
}

export default GamesList;
