import React from "react";
import { MenItems, WomenItems, KidItems, Accessories } from "./component-export";

const Home: React.FC = () => (
  <>
    <div className="grid grid-cols-3">
      <div>
        <MenItems />
      </div>
      <div>
        <WomenItems />
      </div>
      <div>
        <KidItems />
      </div>
      <div>
        <Accessories/>
      </div>
    </div>
  </>
);

export default Home;
