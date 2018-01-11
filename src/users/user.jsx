import React, { Component } from 'react';
import './user.css';

import Request from 'superagent';
import _ from 'lodash';

export default class User extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        //called the first time the component is loaded right before the component is added to the page.
        this.searchData('star');
    }

    componentDidMount() {
        //called after the component has been rendered to the page.
    }

    componentWillReceiveProps(nextProps) {
        //called after the props provided to the component are changed.
    }

    componentWillUpdate(nextProps, nextState) {
        //called when the props and/or state change.
    }

    componentWillUnmount() {
        ////called when the component is removed.
    }

    searchData(searchText){
        //var url = 'http://omdbapi.com/?s=' + searchText+'&y=&r=json&plot=short&apikey={YourKey}';
        var url = `http://omdbapi.com/?s=${searchText}&y=&r=json&plot=short&apikey={YourKey}`;
        Request.get(url).then((response) => {

            this.setState({
                movies: response.body.Search,
                total: response.body.totalResults
            });
        });
    }
    updateSearch(elem) {
        this.searchData(this.refs.searchText.value);
    }
    render() {
        var movies = _.map(this.state.movies, (movie,index) => {
            return <li key={movie.imdbID.toString()}>{movie.Title}</li>;
        });
        return (
            <div>my movies
                <input ref='searchText' name='searchText' onChange={(e) => { this.updateSearch(); }} type='text' />
                <ul>
                    {movies}
                </ul>
            </div>
            )
    };
}
