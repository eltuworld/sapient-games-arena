import React, { Component } from 'react';
import GamesList from './GamesList.js';
import Header from './Header.js';
import '.././App.css';

//const API = 'http://starlord.hackerearth.com/gamesext';
const API = 'https://eltuworld.github.io/sapient-games-arena/data/gamesext.json';

class SapientGames extends Component {
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
    fetch(API)
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
  const sortAsc  = (a, b) => parseInt(a.score, 10) - parseInt(b.score, 10);
  const sortDesc = (a, b) => parseInt(b.score, 10) - parseInt(a.score, 10);
    this.setState({
       order: (this.state.order === 'asc' ? 'desc' : 'asc'),
       List : this.state.allList.sort(this.state.order === 'asc' ? sortDesc : sortAsc)
     })
  }
  handleSortReleaseDate = (event) => {
  const sortAsc  = (a, b) => parseInt(a.release_year, 10) - parseInt(b.release_year, 10);
  const sortDesc = (a, b) => parseInt(b.release_year, 10) - parseInt(a.release_year, 10);
    this.setState({
       order: (this.state.order === 'asc' ? 'desc' : 'asc'),
       List : this.state.allList.sort(this.state.order === 'asc' ? sortDesc : sortAsc)
     })
  }
  render() {
    return (
      <div>
      <Header />
      <div className="filter-list">
        <form>
        <fieldset className="form-group">
        <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.handleSearch}/>
        <div className="btn-group">
          <button type="button" className="btn btn-primary" onClick={this.handleSortScore}>Sort By Score</button>
          <button type="button" className="btn btn-primary" onClick={this.handleSortReleaseDate}>Sort By Release date</button>
        </div>
        </fieldset>
        </form>
        <GamesList list={this.state.List} />
      </div>
      </div>
    );
  }
}

export default SapientGames;
