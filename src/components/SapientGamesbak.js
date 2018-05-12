import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import GamesList from './GamesList.js';
import logo from '.././logo.svg';
import '.././App.css';

class SapientGames extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [],
      allList:[],
      search: "",
      order: 'asc'
    };
  }

  componentDidMount() {
    fetch("http://starlord.hackerearth.com/gamesext")
      .then(response => response.json())
      .then(data => this.setState({ allList: data,
        List : data
       }));
  }


handleSearch = (event) => {
  this.setState({
    search: event.target.value,
    List: this.state.allList.filter((data) => new RegExp(event.target.value, "i").exec(data.title))
  })
}
handleSortScore = (event) => {
const sortAsc  = (a, b) => parseInt(a.score) - parseInt(b.score);
const sortDesc = (a, b) => parseInt(b.score) - parseInt(a.score);
  this.setState({
     order: (this.state.order === 'asc' ? 'desc' : 'asc'),
     List : this.state.allList.sort(this.state.order === 'asc' ? sortDesc : sortAsc)
/*
List : this.state.allList.sort(function(l1,l2){
  if(l1.score > l2.score){
    return 1;
  } else {
    return -1;
  }
})*/

   })
}


handleSortReleaseDate = (event) => {
const sortAsc  = (a, b) => parseInt(a.release_year) - parseInt(b.release_year);
const sortDesc = (a, b) => parseInt(b.release_year) - parseInt(a.release_year);
  this.setState({
     order: (this.state.order === 'asc' ? 'desc' : 'asc'),
     List : this.state.allList.sort(this.state.order === 'asc' ? sortDesc : sortAsc)
   })
}


  render() {
    return (
      <div className="filter-list">
        <form>
        <fieldset className="form-group">
        <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.handleSearch}/>
        <div class="btn-group">
          <button type="button" class="btn btn-primary" onClick={this.handleSortScore}>Sort By score</button>
          <button type="button" class="btn btn-primary" onClick={this.handleSortReleaseDate}>Sort By Release date</button>
        </div>
        </fieldset>
        </form>
        <ul className="list-group">
        {
          this.state.List.map(function(data) {
            return <li className="list-group-item" data-category={data.title} ><span class="badge">Editors choice</span><h4 class="list-group-item-heading">{data.title}</h4><p>Genre : {data.genre} | Score : {data.score} | Released in {data.release_year}</p></li>
          })
         }
        </ul>
      </div>

    );
  }
}


export default SapientGames;
