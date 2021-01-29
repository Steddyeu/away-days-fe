import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../apiReq';
import Load from './Load';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import PubsMap from './PubsMap';


export default class IndividualStadium extends Component {
  state = { stadium: {}, isLoading: true };

  componentDidMount() {
    const id = this.props.stadiumId;
    api.getStadiumById(id).then((stadium) => {
      this.setState({ stadium, isLoading: false });
    });
  }

  render() {
    if (this.state.isLoading) {
      return <Load />;
    } else {
      return (
        <div
          className={"individual-stadium-page-container"}
          style={{ backgroundColor: `${this.state.stadium.color}` }}
        >
          <div
            style={{ backgroundImage: `url(${this.state.stadium.picture})` }}
            className="individual-stadium-picture-container"
          >
           

            <div className={"individual-stadium-info-container"}>
              <img
                src={this.state.stadium.logo}
                className={"individual-stadium-club-logo"}
              ></img>
              <h1 className={"individual-stadium-club-name"}>
                <FontAwesomeIcon className={"sign-nail-icon"} icon={faCircle} />
                {this.state.stadium.name}
                <FontAwesomeIcon className={"sign-nail-icon"} icon={faCircle} />
              </h1>
            </div>
          </div>
          <div className={"individual-stadium-description-container"}>
            <h2 className={"individual-stadium-description-header"}>
              Description
            </h2>
            <p className={"individual-stadium-description"}>
              {this.state.stadium.description}
            </p>
          </div>
          <div className="map-container">
            <PubsMap
              lat={this.state.stadium.latitude}
              long={this.state.stadium.longitude}
              id={this.state.stadium.stadium_id}
              stadiumName={this.state.stadium.name}
            />
          </div>
          <Link className={"individual-stadium-home-button-link"} to="/">
            <button className={"individual-stadium-home-button"}>Home page</button>
          </Link>
        </div>
      );
    }
  }
}
