import React from "react";
import GridBackground from "../../components/ui/GridBG";
import { Skeleton } from "@/components/ui/skeleton";
import TimeLineComp from "../../components/ui/Timeline";
import FocusCards from "../../components/ui/FocusCards"

const Careers = () => {
  return (
    <div>
      <GridBackground para={"Join us in a Happening Journey"} para2={"Challenge your limits. Meet awesome people. Find your ikigai."}/>

      {/* First Element */}
      <div className="px-80 py-20 flex max-sm:px-8 max-sm:py-8 max-sm:flex-col-reverse gap-24 max-sm:gap-8">
        <div className="py-8">
          <h1 className="text-4xl font-bold">WE'RE ON A MISSION OF</h1>
          <h2 className="py-2">Making the world #Happening</h2>
          <p className="py-4">
            In 2024, Festify started when we realized that events create a
            positive impact. Since then, we try that people never miss out on
            good events they would love to attend.
          </p>
          <p className="py-8">“We grow when people working with us grow”</p>
        </div>
        <div className="flex justify-center items-center">
          <Skeleton className="w-[30rem] min-h-80 max-sm:w-80 rounded-lg" />
        </div>
      </div>

      {/* Second Element */}
      <div>
        <h1 className="text-4xl font-bold text-center">
          We are eventful people who like...
        </h1>
        <div>
          <TimeLineComp />
        </div>
      </div>

      {/* Third Element */}
      <div className="px-2">
        <h1 className="text-4xl font-bold text-center mb-4">We can't stay quiet for long</h1>
        <p className="text-lg font-bold text-center mb-2">We need fuel to work!</p>
        <p className="text-lg font-bold text-center mb-16">And our fuel is food, trips & parties.</p>
        <FocusCards />
      </div>
      <GridBackground
        para={"Looking for a Happening career?"}
        para2={
          "We are also looking for growth-oriented people! You are halfway into the team if you are the type who gives “x+y” when asked for “x”"
        }
      />
    </div>
  );
};

export default Careers;
