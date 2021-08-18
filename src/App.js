import React from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import InformationPanel from "./components/InformationPanel";

const axios = require("axios");

class App extends React.Component {
  state = {
    ip: null,
    city: null,
    region: null,
    postalCode: null,
    timezone: null,
    lat: null,
    lng: null,
    isp: null,
  };

  componentDidMount() {
    let ipify = {};
    axios
      .get(
        `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_KEY}`
      )
      .then((response) => {
        ipify = response;
        this.setState({
          ip: ipify.data.ip,
          city: ipify.data.location.city,
          region: ipify.data.location.region,
          postalCode: ipify.data.location.postalCode,
          timezone: ipify.data.location.timezone,
          lat: ipify.data.location.lat,
          lng: ipify.data.location.lng,
          isp: ipify.data.isp,
        });
      })
      .then((error) => {
        console.log(error);
      });
  }

  onSubmit = (term) => {
    this.requestIpify(term);
  };

  requestIpify = (ipString) => {
    let ipify = {};
    axios
      .get(
        `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IPIFY_KEY}&ipAddress=${ipString}`
      )
      .then((response) => {
        ipify = response;
        this.setState({
          ip: ipify.data.ip,
          city: ipify.data.location.city,
          region: ipify.data.location.region,
          postalCode: ipify.data.location.postalCode,
          timezone: ipify.data.location.timezone,
          lat: ipify.data.location.lat,
          lng: ipify.data.location.lng,
          isp: ipify.data.isp,
        });
      })
      .then((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <Header ip={this.state.ip} onSubmit={this.onSubmit} />
        <InformationPanel data={this.state} />
        <Map lat={this.state.lat} lng={this.state.lng}></Map>
      </>
    );
  }
}

export default App;
