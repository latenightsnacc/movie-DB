import React, { Component } from 'react'
import Search from './Search'

class SearchResults extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <a className="btn-Modal" href="#modal-full" uk-toggle><i className="fa fa-search"></i></a>

                    <div id="modal-full" className="uk-modal-full uk-animation-slide-right" uk-modal>
                        <div className="uk-modal-dialog">
                            <button className="uk-modal-close-full uk-close-large" type="button" uk-close></button>
                            <div className="container">
                                <div className="searchBar">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fa fa-search"></i>
                                            </div>
                                        </div>
                                        <input type="text" className="form-control" id="searchBtn" placeholder="search by movie title" />
                                    </div>
                                </div>
                            </div>
                            <div className="container  card-row">
                                <div className="row">
                                    <div className="col">
                                        <a href="#">
                                            <div className="card fadeIn animated">
                                                <div className="card-img">
                                                    <img src="images/movieImg2.jpg" />
                                                </div>
                                                <div className="card-content">
                                                    <span className="card-rating">8.7</span>
                                                    <div className="movie-content">
                                                        <a className="watchlist-btn">
                                                            <i className="fa fa-bookmark"></i>
                                                        </a> 
                                                        <div className="movie-title">Wreck-it Ralph</div>
                                                        <p>Animation, Comedy, Family</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a href="#">
                                            <div className="card">
                                                <div className="card-img">
                                                    <img src="images/movieImg2.jpg" />
                                                </div>
                                                <div className="card-content">
                                                    <span className="card-rating">8.7</span>
                                                    <div className="movie-content">
                                                        <a className="watchlist-btn">
                                                            <i className="fa fa-bookmark"></i>
                                                        </a> 
                                                        <div className="movie-title">Wreck-it Ralph</div>
                                                        <p>Animation, Comedy, Family</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a href="#">
                                            <div className="card">
                                                <div className="card-img">
                                                    <img src="images/movieImg2.jpg" />
                                                </div>
                                                <div className="card-content">
                                                    <span className="card-rating">8.7</span>
                                                    <div className="movie-content">
                                                        <a className="watchlist-btn">
                                                            <i className="fa fa-bookmark"></i>
                                                        </a> 
                                                        <div className="movie-title">Wreck-it Ralph</div>
                                                        <p>Animation, Comedy, Family</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a href="#">
                                            <div className="card">
                                                <div className="card-img">
                                                    <img src="images/movieImg2.jpg" />
                                                </div>
                                                <div className="card-content">
                                                    <span className="card-rating">8.7</span>
                                                    <div className="movie-content">
                                                        <a className="watchlist-btn">
                                                            <i className="fa fa-bookmark"></i>
                                                        </a> 
                                                        <div className="movie-title">Wreck-it Ralph</div>
                                                        <p>Animation, Comedy, Family</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="container  card-row">
                                <div className="row">
                                    <div className="col">
                                        <a href="#">
                                            <div className="card fadeIn animated">
                                                <div className="card-img">
                                                    <img src="images/movieImg2.jpg" />
                                                </div>
                                                <div className="card-content">
                                                    <span className="card-rating">8.7</span>
                                                    <div className="movie-content">
                                                        <a className="watchlist-btn">
                                                            <i className="fa fa-bookmark"></i>
                                                        </a> 
                                                        <div className="movie-title">Wreck-it Ralph</div>
                                                        <p>Animation, Comedy, Family</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a href="#">
                                            <div className="card">
                                                <div className="card-img">
                                                    <img src="images/movieImg2.jpg" />
                                                </div>
                                                <div className="card-content">
                                                    <span className="card-rating">8.7</span>
                                                    <div className="movie-content">
                                                        <a className="watchlist-btn">
                                                            <i className="fa fa-bookmark"></i>
                                                        </a> 
                                                        <div className="movie-title">Wreck-it Ralph</div>
                                                        <p>Animation, Comedy, Family</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a href="#">
                                            <div className="card">
                                                <div className="card-img">
                                                    <img src="images/movieImg2.jpg" />
                                                </div>
                                                <div className="card-content">
                                                    <span className="card-rating">8.7</span>
                                                    <div className="movie-content">
                                                        <a className="watchlist-btn">
                                                            <i className="fa fa-bookmark"></i>
                                                        </a> 
                                                        <div className="movie-title">Wreck-it Ralph</div>
                                                        <p>Animation, Comedy, Family</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a href="#">
                                            <div className="card">
                                                <div className="card-img">
                                                    <img src="images/movieImg2.jpg" />
                                                </div>
                                                <div className="card-content">
                                                    <span className="card-rating">8.7</span>
                                                    <div className="movie-content">
                                                        <a className="watchlist-btn">
                                                            <i className="fa fa-bookmark"></i>
                                                        </a> 
                                                        <div className="movie-title">Wreck-it Ralph</div>
                                                        <p>Animation, Comedy, Family</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default SearchResults
