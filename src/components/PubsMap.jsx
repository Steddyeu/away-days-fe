import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import * as api from "../apiReq";
import key from "../apiKey";
export class PubsMap extends Component {
  componentDidMount() {
    api.getPubs(this.props.lat, this.props.long).catch((err) => {
      console.log("err-->", err);
    });
  }

  render() {
    const style = {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "auto",
    };
    const containerStyle = {
      position: "relative",
      width: "80vw",
      height: "50vh",
     
    };

    return (
      <Map
        google={this.props.google}
        initialCenter={{
          lat: this.props.lat,
          lng: this.props.long,
        }}
        zoom={13.5}
        style={style}
        containerStyle={containerStyle}
      >
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div></div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: key,
})(PubsMap);
