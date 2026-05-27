import { ArrowUpRight } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="container mx-auto py-10 my-5 space-y-5">
     
       <p>Freedom on your wheels</p>
      <div className="space-y-10">
        <div className="text-4xl md:text-6xl font-semibold">
          <h1>Drive your Way.</h1>
          <h1>Anytime.</h1>
          <h1>Anywhere.</h1>
        </div>

        <p className="">
          Are you looking for the most cost-effective way to travel in style and
          comfort? Look no further! Our private transfer services offer the best
          prices in town without compromising on quality or convenience.
        </p>

        <Link href="/explore-cars">
          <Button ClassName="">
            Explore Cars <ArrowUpRight></ArrowUpRight>
          </Button>
        </Link>
      </div>
     </div>
  
  );
};

export default Banner;
