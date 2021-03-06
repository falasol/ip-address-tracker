import React from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.map = {};
    this.mapOption = {
      center: [props.lat ? props.lat : 0, props.lng ? props.lng : 0],
      zoom: 15,
      scrollWheelZoom: false,
      dragging: false,
      attributionControl: false,
      zoomControl: false,
    };
    this.OSMUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    this.icon = L.icon({
      iconUrl: "/icon-location.svg",
    });
  }

  componentDidMount() {
    this.map = L.map("mymap", this.mapOption);
    L.tileLayer(this.OSMUrl).addTo(this.map);
  }

  componentDidUpdate() {
    this.map.panTo([
      this.props.lat ? this.props.lat : 0,
      this.props.lng ? this.props.lng : 0,
    ]);
    L.marker(
      [
        this.props.lat ? this.props.lat : 0,
        this.props.lng ? this.props.lng : 0,
      ],
      { icon: this.icon }
    ).addTo(this.map);
  }

  setLocation = () => {
    this.map.panTo([
      this.props.lat ? this.props.lat : 0,
      this.props.lng ? this.props.lng : 0,
    ]);
  };

  render() {
    return <div id="mymap" style={{ width: "100%", height: "60vh" }}></div>;
  }
}

export default Map;
