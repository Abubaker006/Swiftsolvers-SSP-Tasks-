import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerBox">
        <div className="heading__footer">
          <h2 className="heading_second">Dev.Const</h2>
        </div>
        <div className="footer_Description">
          <p>
            Dev.Const is an industry-leading software development company
            building digital products that last. By being reasonable product
            craftsmen, we're able to avoid surprises and focus on the quality of
            the software we deliver.
          </p>
        </div>
        <div className="copyright_claim">
          <p>© 2023 All rights reserved. </p>
        </div>
      </div>
      <div className="footerBox">
        <h1>Contact Information</h1>
        <p>
          2130 Fulton Street,
          <br />
          San Diego, CA 94117-1080 USA
        </p>
        <p>Phone: 1-800-1234-567</p>
        <p>
          Email:{" "}
          <a className="Mail" href="mailto:info@demolink.org">
            info@demolink.org
          </a>
        </p>
      </div>
      <div className="footerBox">
        <div className="heading__footer">
          <h2 className="heading_second">Subscribe!</h2>
        </div>
        <div className="footerBox_Email">
          <p>
            Keep up with our always upcoming news and updates. Enter your e-mail
            and subscribe to our newsletter.
          </p>
        </div>
        <div className="footerBox_EmailBox">
          <input type="email" name="Email" placeholder="Enter Email" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
