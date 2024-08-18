import React from "react";
import { MenItems, WomenItems, KidItems } from "./component-export";
import Navbar from "./Navbar/navbar";
import Footer from "./Footer/footer";

const Home: React.FC = () => (
  <>
    <div className="flex flex-wrap gap-1 p-1">
      <Navbar />
      <MenItems />
      <WomenItems />
      <KidItems />
      <Footer />
    </div>
  </>
);

export default Home;
