import Image from "next/image";
import { Hero } from "./component/hero";
import Hero2 from "./component/her02";
import { Services } from "./component/services";
import { Promotion } from "./component/promotion";
import Category from "./component/category";

export default function Home() {
  return (
   <div className="bg-black">
    <section className="bg-black"> 
      <Hero2/>
      <Promotion/>
      <Category/>
      <Services/>
      </section>
   </div>
  );
}
