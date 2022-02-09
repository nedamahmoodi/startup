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

      <div className="pictop">
        <img src={a} />
      </div>
      <StartupConsulting />
      <Startupsneedadvice
        heading={Strings.heading1}
        text={Strings.lorem}
        image={b}
        dir="rtl"
      />

      <Problematic />

      <div className="picdown">
        <img src={a} />
      </div>

      <Consultingservices />
      <Beststartupconsulting />

      <Startupsneedadvice
        heading={Strings.heading2}
        text={Strings.lorem}
        image={c}
        dir="ltr"
      />

      <NamiraStartupServices />

      <Startupsession />
      <Postacoment />
    </div>
  );
}

export default Test;
