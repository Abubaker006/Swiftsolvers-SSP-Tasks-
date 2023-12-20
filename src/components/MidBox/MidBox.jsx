import React from "react";
import "./midbox.css";
import {
  DesktopWindowsOutlined,
  LaptopChromebookOutlined,
  MobileFriendlyOutlined,
  StarBorderOutlined,
  HeadsetMicOutlined,
  VerifiedOutlined,
} from "@mui/icons-material";
const Box = ({ headingName, boxDescription, children }) => {
  return (
    <div className="component_Box">
      <div className="picture_Box">{children}</div>
      <div className="box_Heading">
        <h3 className="heading_Box">{headingName}</h3>
      </div>
      <div className="box_description">
        <p>{boxDescription}</p>
      </div>
    </div>
  );
};
const MidBox = () => {
  return (
    <div className="midBox">
      <Box
        headingName={"Why Contact Us ?"}
        boxDescription=" Our company delivers various types of mobile and desktop software as
          well as custom solutions for businesses.">
        <DesktopWindowsOutlined className="pics" />
        <LaptopChromebookOutlined className="pics" />
        <MobileFriendlyOutlined className="pics" />
      </Box>
      <Box
        headingName={"Corporate Solutions"}
        boxDescription=" Need specific software for your company? Our team is ready to design and develop it for you!">
        <StarBorderOutlined className="pics" />
      </Box>
      <Box
        headingName={"24/7"}
        boxDescription=" We also provide full 24/7 client support. In case you have a problem with our apps, feel free to contact us anytime.">
        <HeadsetMicOutlined className="pics" />
      </Box>
      <Box
        headingName={"Reliable Apps Since 2005"}
        boxDescription="We Can Design an App of Any Complexity for Your Company">
        <VerifiedOutlined className="pics" />
      </Box>
    </div>
  );
};

export default MidBox;
