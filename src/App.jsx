import React from "react";
import GsapTo from "./components/GsapTo";
import GsapFrom from "./components/GsapFrom";
import GsapFromTo from "./components/GsapFromTo";
import GsapTimeLine from "./components/GsapTimeLine";
import GsapStagger from "./components/GsapStagger";
import GsapScrollTrigger from "./components/GsapScrollTrigger";
import GsapText from "./components/GsapText";

const App = () => {
  return (
    <div className="font-roboto">
      {/* <GsapTo /> */}
      {/* <GsapFrom></GsapFrom> */}
      <GsapText />
    </div>
  );
};

export default App;
