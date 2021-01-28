import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper, } from "google-maps-react";

export class PubsMap extends Component {
  render() {
    const style = {
      width: "100%",
      height: "30em",
    };

  

    return (
      <div style={{ height: "100%", width: "100%" }}>
        <Map
          google={this.props.google}
          initialCenter={{
            lat: this.props.lat,
            lng: this.props.long,
          }}
          zoom={13.5}
          style={style}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div></div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB12YVrfE3v1VZ51xmdJFXeXFfS1QwaIfk",
})(PubsMap);
