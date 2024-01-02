import React from "react";

import "./PasteContent.css";

const PasteContent = () => {
  return (
    <section className="hero-sec">
      <div className="container pasteContent__container" style={{ marginTop: '9rem', background: 'radial-gradient(60% 50% at 50.00% 50.00%, rgb(23 0 255 / 50%) 0%, rgb(27 0 255 / 0%) 88.58%)' }}>
        <h1 className="heading" style={{ marginTop: '12rem' }}>Advance AI Content Detector For <br/>Orginality Checks</h1>
        <h5 className="text">
          Unmatched AI Content Detector for Authentic Content Verification
        </h5>
        <input type="text" placeholder="Check Your Content" />
        <button className="nav__btn">START FREE TRIAL</button>
        <small>No credit card required</small>
      </div>
      <div className="blob"></div>
    </section >
  );
};

export default PasteContent;
