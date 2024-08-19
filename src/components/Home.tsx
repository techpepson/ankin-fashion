import React from "react";
import {
  MenItems,
  WomenItems,
  KidItems,
  Accessories,
} from "./component-export";

const Home: React.FC = () => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      <MenItems />
      <WomenItems />
      <KidItems />
      <Accessories />
    </div>
  </>
);

export default Home;
