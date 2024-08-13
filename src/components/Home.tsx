import React from "react";
import { MenItems, WomenItems, KidItems } from "./component-export";

const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap gap-1 p-1">
        <MenItems />
        <WomenItems />
        <KidItems />
      </div>
    </>
  );
};

export default Home;
