import React from "react";
import { GiArchiveResearch } from "react-icons/gi";
import { FaBookOpen } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";

import "./ThirdHeroSection.css";

const ThirdHeroSection = ({ thirdHeroHeading, title, data }) => {
  return (
    <section className="thirdHero__bg">
      <div className="container-lg thirdHero__container">
        <div className="thirdHero__content">
          <h1 className="heading">The Gold Standard in AI <br/> Detection at 99.9% Accuracy</h1>

          {/* <p className="text">{title}</p> */}
        </div>

        <div className="thirdHero__card">
          {/* {data &&
            data?.map((curElem) => {
              const { id, imgPath, title, description } = curElem;
              return ( */}
                <div className="card card1">
                  <div className="card-item">
                  <img src="https://assets-global.website-files.com/60e5f2de011b86acebc30db7/6526c41d016c6bc6822af669_Company%20Intelligence%20Hub.svg" loading="lazy" alt="" className="icon---small slightly-bigger margin-bottom---5"/>
                    <h3 className="sub__heading">For Writers</h3>
                    <h4 className="text">Craft authentic content to avoid AI detection by Google.</h4>
                  </div>
                  <div className="colorful-card-gradient pointer-none"/>
                </div>
                <div className="card card2">
                  <div className="card-item">
                  <img src="https://assets-global.website-files.com/60e5f2de011b86acebc30db7/6526c41d146e5c463ed823bb_Content%20Acceleration.svg" loading="lazy" alt="" className="icon---small slightly-bigger margin-bottom---5"/>
                    <h3 className="sub__heading">For Educators</h3>
                    <h4 className="text">In the realm of academia, authenticity is non-negotiable. </h4>
                  </div>
                  <div className="colorful-card-gradient pointer-none"/>
                </div>
                <div className="card card3">
                  <div className="card-item">
                  <img src="https://assets-global.website-files.com/60e5f2de011b86acebc30db7/6526c41b4a632a7de9e5fddf_Analytics%20%26%20Insights.svg" loading="lazy" alt="" className="icon---small slightly-bigger margin-bottom---5"/>
                    <h3 className="sub__heading">Web Publishers</h3>
                    <h4 className="text">content authenticity is crucial for credibility.</h4>
                  </div>
                  <div className="colorful-card-gradient pointer-none"/>
                </div>
              {/* ); */}
            {/* })} */}
        </div>
      </div>
    </section>
  );
};

export default ThirdHeroSection;
