import React from "react";
import useBreakpoints from "../../Styles/useBreakpoints";
import { WithTransLate } from "../helpers/translating/index";
import nl from "../../images/RECOMMENDATIONS/Northernlights.webp";
import bl from "../../images/RECOMMENDATIONS/Blue-lagoon.webp";
import gc from "../../images/RECOMMENDATIONS/Glacier-Caves.webp";
import nld from "../../images/RECOMMENDATIONS/Northernlights01.webp";
import bld from "../../images/RECOMMENDATIONS/Blue-lagoon01.webp";
import gcd from "../../images/RECOMMENDATIONS/Glacier-Caves01.webp";
import restd from "../../images/RECOMMENDATIONS/Geysers01.webp";
import rest from "../../images/RECOMMENDATIONS/Geysers.webp";
import blogImg from "../../images/Blog/island.webp"
import s from "./Recommendations.module.scss";
import Button from "../Shared/Button/Button";

const Recommendations = () => {
  const { isMobile, isTablet, isDesktop } = useBreakpoints();
  const prevSlide = ()=>{
    
    const section = document.getElementById('imagesSection')
    
    section.scrollBy(-window.screen.width,0)
  }
  const nextSlide = (e)=>{
    const section = document.getElementById('imagesSection')
    section.scrollBy(window.screen.width,0)
  }
  const recommendationsData = [
    {
      name: "Northern Lights",
      link: "https://blog.bluehouse.is/?s=northen+lights",
      image: nl,
      imageD: nld,
    },
    {
      name: "Blue Lagoon",
      link: "https://blog.bluehouse.is/?s=blue+lagoon",
      image: bl,
      imageD: bld,
    },
    {
      name: "Glacier Caves",
      link: "https://blog.bluehouse.is/?s=glacier+caves",
      image: gc,
      imageD: gcd,
    },
    {
      name: "Valley of Geysers",
      link: "https://blog.bluehouse.is/?s=Valley+of+Geysers",
      image: rest,
      imageD: restd,
    },
  ];

  let displayedCards = [];
  if (isTablet) {
    displayedCards = recommendationsData.slice(0, 4);
  } else {
    displayedCards = recommendationsData.slice(0, 3);
  }

  return (
    <div id="RECOMMENDATIONS" className={s.recommendations}>
      <div className={s.sectionWrapper}>
        <div className={s.titleWrapper}>
          <h2 className={s.title}>
            <WithTransLate text="RECOMMENDATIONS" />
          </h2>
          
        </div>
        <div id="imagesSection" className={s.sectionContent}>
          {displayedCards.map(({ image, imageD, name, link }) => (
            <div key={name} className={s.recommendationItem}>
              <a
                href={link}
                rel="noreferrer"
                target="_blank"
                style={{ width: "100%" }}
              >
                <img
                  alt={name}
                  src={isDesktop ? imageD : image}
                  className={s.image}
                />
              </a>
              <span className={s.text} style={{marginLeft:"-80%"}}>
                <WithTransLate text={name}/>
              </span>
            </div>
          ))}
        </div>
        <div className={s.sliderBtnWrapper}>
        <div className={s.navigation}>
          <button
            onClick={prevSlide}
            className={`${s.arrow} ${s.buttonPrev}`}
            title="Previous review"
          ></button>
          <button
            onClick={nextSlide}
            className={`${s.arrow} ${s.buttonNext}`}
            title="Next review"
          ></button>
        </div>
      </div>
      </div>
      <div style={{display:"flex",justifyContent:"center", width:"100%", marginTop:"20px"}} >
        <Button
            text="DISCOVER MORE"
            btnClass={isMobile?"btnLight":"btnLightWithOut"}
            handleClick={() =>
              window.open("https://www.instagram.com/bluehousebb/", "_blank")
            }
        />
      </div>
      {isMobile && 
        <div className={s.mobileSection}>
          <div className={s.elem}>
            <h4>Don't know which one to choose?</h4>
            <p style={{textAlign:"center"}}>Leave the request and we will get<br/> back to you</p>
            <Button
            text="I need Help"
            btnClass="btnLight"
            handleClick={() =>
              window.open("https://www.instagram.com/bluehousebb/", "_blank")
            } 
            />
          </div>
          <div className={s.elem}>
            <img src={blogImg} style={{width:"80%"}}/>
          <h4 style={{marginTop:"6%"}}>Need recommendations?</h4>
            <p style={{textAlign:"center"}}>For recommendations & adventures <br/>read amazing stories in our blog</p>
            <Button
            text="Read blog"
            btnClass="btnLight"
            handleClick={() =>
              window.open("https://www.instagram.com/bluehousebb/", "_blank")
            } 
            />
          </div>
        </div>
        
      }
    </div>
  );
};

export default Recommendations;
