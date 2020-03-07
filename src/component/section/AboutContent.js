import React from "react";
import H1 from "./H1";
import H2 from "./H2";
import Paragraf from "./Paragraf";
import "./about.scss";

function AboutContent(props) {
  return (
    <div className="about-text media">
      <div className="about-text__header media">
        <H1 title="ABOUT JADE" />
      </div>
      <div className="about-text__paragraf media">
        <Paragraf title="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page." />
        <Paragraf title="​&#8203;" />
        <Paragraf title="This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company." />
      </div>
      <div className="about-text__header2 media">
        <H2 title="Education:" />
      </div>
      <div className="about-text__paragraf2 media">
        <Paragraf title="I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font." />
      </div>
      <div className="about-text__header3 media">
        <H2 title="Awards & Nominations:" />
      </div>
      <div className="about-text__paragraf2 media">
        <Paragraf title="I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you." />
      </div>
    </div>
  );
}

export default AboutContent;
