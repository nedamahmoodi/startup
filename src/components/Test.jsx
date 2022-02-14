import React from "react";
import "./test.css";
import a from "../assets/image/pictop.jpg";
import b from "../assets/image/imgteam.png";
import c from "../assets/image/Startup.jpg";
import d from "../assets/image/make-teamwork.jpg";
import { Strings } from "../assets/strings/strings";
import StartupConsulting from "./StartupConsulting";
import Startupsneedadvice from "./Startupsneedadvice";
import Problematic from "./Problematic";
import Consultingservices from "./Consultingservices";
import Beststartupconsulting from "./Beststartupconsulting";
import Startupadvice from "./Startupadvice";
import NamiraStartupServices from "./NamiraStartupServices";
import Startupsession from "./Startupsession";
import Postacoment from "./Postacoment";
import PicStartup from "./PicStartup";

import { components } from "../data/land";

function Test(props) {
  const type = "number";
  return (
    <div class="container fluid" id="site">
      <div className="row">
        <div dir="rtl">
          <button className="btn1">تماس با ما</button>
        </div>
        <div className="logo"></div>
      </div>
      <div>
        {components.map((component) => {
          if (component.name === "image") {
            return <PicStartup image={component.image} />;
          }
          if (component.name === "section") {
            return (
              <StartupConsulting
                heading={component.heading}
                btn={component.btn}
                lorem={component.lorem}
              />
            );
          }
          if (component.name === "startupneed") {
            return (
              <Startupsneedadvice
                image={component.image}
                heading={component.heading}
                paragraph={component.paragraphneed}
                dir={component.dir}
              />
            );
          }
          if (component.name === "problemstartup") {
            return (
              <Problematic
              key={component.name}
                list={component.list}
                heading={component.heading}
                paragraph={component.paragraph}
                wrap={component.wrap}
              />
            );
          }
           if (component.name === "namiraconsul") {
             return (
               <NamiraStartupServices
                 list={component.list}
                 heading={component.heading}
               />
             );
           }
           if (component.name === "reservstartup") {
             return (
               <Startupsession
                 heading={component.heading}
                 image={component.image}
                 btn={component.btn}
               />
             );
           }
           if (component.name === "comentsend") {
             return (
               <Postacoment
                 heading={component.heading}
                 btn={component.btn}
               />
             );
           }  
        })}
      </div>
    </div>
  );
}

export default Test;
