import React from 'react';

import './FooterBody.scss';

function FooterBody(props) {
  const year = new Date().getFullYear();
  return (
    <div className="footer-body">
      <div className="footer-body__contact">
        <strong>Reach out:</strong>
        <br /><a href="mailto:hello@normative.com">hello@normative.com</a>
      </div>
      <div className="footer-body__address">
        <strong>Normative Inc.</strong>
        <br />91 Oxford Street, Suite #200
        <br />Toronto, Ontario
        <br />M5T 1P2
      </div>
      <div className="footer-body__copy">
        &copy; Normative {year}
      </div>
    </div>
  );
}

export default FooterBody;
