import React from "react";
import Panel from "../UI/Panel.js";
import InformationBox from "./InformationBox.js";

const InformationPanel = (props) => {
  const locationText =
    props.data.city + ", " + props.data.region + " " + props.data.postalCode;
  const timezoneText = "UTC " + props.data.timezone;

  return (
    <Panel>
      <InformationBox title="ip address" content={props.data.ip} />
      <InformationBox title="location" content={locationText} />
      <InformationBox title="timezone" content={timezoneText} />
      <InformationBox title="isp" content={props.data.isp} />
    </Panel>
  );
};

export default InformationPanel;
