import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import * as api from '../apiReq';
import Load from './Load';
import stadiumImg from '../assets/stadium.png';
import beerImg from '../assets/beer.svg';



const key = process.env.REACT_APP_API_KEY

export class PubsMap extends Component {
  state = {
    pubs: [],
    selectedPlace: {},
    activeMarker: {},
    showingInfoWindow: false,
    isLoading: true,
    isDesktop: window.innerWidth > 1400,
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
      position: 'relative',
      width: '100%',
      height: '100%',
      overflow: 'auto',
    };

    let containerStyle = {
      position: 'relative',
      height: '50vh',
    };

    if (this.state.isDesktop) {
      containerStyle.width = '60vw';
    } else {
      containerStyle.width = '85vw';
    }

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
              url: stadiumImg,
              anchor: new google.maps.Point(10, 10),
              scaledSize: new google.maps.Size(34, 34),
            }}
          />
          {this.state.pubs.map((pub) => {
            return (
              <Marker
              key={pub.lat}
                position={{ lat: pub.lat, lng: pub.long }}
                onClick={this.onMarkerClick}
                name={pub.name}
                icon={{
                  url: beerImg,
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
