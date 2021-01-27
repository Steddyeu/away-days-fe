import React, { Component } from "react";
import * as api from "../apiReq";
import Load from "./Load";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faUsers } from "@fortawesome/free-solid-svg-icons";
import commaNumber from 'comma-number'
import { Link } from "@reach/router";

export default class StadiumsList extends Component {
  state = {
    stadiums: [],
    isLoading: true,
  };

  componentDidMount() {
    const country = this.props.country;
    api.getStadiumsByCountry(country).then((stadiums) => {
      this.setState({ stadiums, isLoading: false });
    });
  }

  render() {
    if (this.state.isLoading) {
      return <Load />;
    } else {
      return (
        <div>
          <Link to='/'> <button className='home-button'>Home</button></Link>
        <div className= 'stadiums-list-country'>
          {this.state.stadiums.map((stadium) => {
            return (
              <div className="country-stadium-card" key={stadium.id}>
                <img
                  className="country-club-logo"
                  src={stadium.logo}
                  alt="club logo"
                />
                <div className="country-club-container">
                  <p className="country-stadium-name">{stadium.name}</p>
                </div>
                <p className="stadium-capacity">
                  <FontAwesomeIcon icon={faUsers} />{" "}
                  {commaNumber(stadium.capacity)}
                </p>
              </div>
            );
          })}
        </div>
        </div>
      );
    }
  }
}
