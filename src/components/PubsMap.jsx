import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import * as api from "../apiReq";
import Load from "./Load";
import key from "../key";
export class PubsMap extends Component {
  state = {
    pubs: [],
    selectedPlace: {},
    activeMarker: {},
    showingInfoWindow: false,
    isLoading: true,
  };

  componentDidMount() {
    const id = this.props.id;
    api.getPubs(id).then((pubs) => {
      this.setState({ pubs, isLoading: false });
    });
  }

  onMarkerClick = (props, marker, event) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  render() {
    const { google } = this.props;

    const style = {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "auto",
    };
    const containerStyle = {
      position: "relative",
      width: "85vw",
      height: "50vh",
    };

    if (this.state.isLoading) {
      return <Load />;
    } else {
      return (
        <Map
          google={this.props.google}
          initialCenter={{
            lat: this.props.lat,
            lng: this.props.long,
          }}
          zoom={14.8}
          style={style}
          containerStyle={containerStyle}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={this.props.stadiumName}
            icon={{
              url:
                "https://www.flaticon.com/svg/vstatic/svg/704/704892.svg?token=exp=1611937063~hmac=8e12531557c417c99c0611f1462469ea",
              anchor: new google.maps.Point(10, 10),
              scaledSize: new google.maps.Size(34, 34),
            }}
          />
          {this.state.pubs.map((pub) => {
            return (
              <Marker
                position={{ lat: pub.lat, lng: pub.long }}
                onClick={this.onMarkerClick}
                name={pub.name}
                icon={{
                  url:
                    "https://www.flaticon.com/svg/vstatic/svg/931/931949.svg?token=exp=1611935294~hmac=9b17581f5a88529a494b6022f3359be0",
                  anchor: new google.maps.Point(10, 10),
                  scaledSize: new google.maps.Size(34, 34),
                }}
              />
            );
          })}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <p className="marker-text">{this.state.selectedPlace.name}</p>
            </div>
          </InfoWindow>
        </Map>
      );
    }
  }
}

export default GoogleApiWrapper({
  apiKey: key,
})(PubsMap);
