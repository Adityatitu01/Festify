import React from "react";
import GridBackground from "../../components/ui/GridBG";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import JagJeevan2 from "../Assets/GOne2.jpg";
import Tiwari from "../Assets/Tiwari.jpg";
import Hybrid from "../Assets/Hujaifa.jpg";

const About = () => {
  const founders = [
    {
      image: Tiwari,
      name: "Aditya Tiwari",
      post: "Founder & CEO, Festify",
      description:
        "Aditya’s vision is to inspire people to go out, explore, and make memories through events. With a relentless pursuit of innovation, he has been instrumental in building Festify as a platform for meaningful connections and enriching experiences.",
    },
    {
      image: JagJeevan2,
      name: "Jag Jeevan",
      post: "Co-Founder & CTO, Festify",
      description:
        "Jag Jeevan spearheads technology and innovation at Festify, ensuring a seamless experience for users and organizers alike. His passion for creating solutions that empower event discovery drives the platform’s growth.",
    },
    {
      image: Hybrid,
      name: "Hujaifa Ahmed",
      post: "Director & Event Strategist, Festify",
      description:
        "Hujaifa brings a creative flair to event management. With a knack for curating unforgettable experiences, he ensures that every event resonates with audiences and exceeds expectations.",
    },
  ];

  return (
    <div className="h-full bg-[#121212] text-teal-400">
      <GridBackground para="Making The World #Happening" />
      <section className="px-8 md:px-40 py-16 space-y-12">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-yellow-400">
            About Us
          </h1>
          <p className="text-lg mt-4">
            Turning ordinary days into extraordinary memories.
          </p>
        </div>

        {/* Story Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-yellow-400">Our Story</h2>
          <p className="text-lg">
            Founded in 2024, Festify started as a solution to a simple problem:
            discovering events easily. What began as an idea has grown into one
            of the world’s largest event discovery platforms, helping millions
            explore events that inspire, connect, and thrill them. 
          </p>
          <p className="text-lg">
            Today, Festify empowers event organizers to share their creations
            and connect with attendees through effortless ticketing and
            promotions. With our mission of making every moment #Happening, we
            bridge the gap between curiosity and experience.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-yellow-400">Our Mission</h2>
          <p className="text-lg">
            To simplify event discovery and enhance the way people connect,
            explore, and experience. We believe in making every moment
            #Happening and turning fleeting opportunities into lasting memories.
          </p>
          <h2 className="text-3xl font-bold text-yellow-400">Our Vision</h2>
          <p className="text-lg">
            We envision a world where experiences define our lives. Where
            attending events is the norm, and each connection leaves an
            indelible mark. We are building a vibrant global community that
            thrives on engagement and shared moments.
          </p>
        </div>

        {/* Features Section */}
        <div className="space-y-12">
          <h2 className="text-4xl font-extrabold text-center text-yellow-400">
            How We Make Magic Happen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1C1C1C] p-6 rounded-lg shadow-lg text-teal-400">
              <h3 className="text-xl font-bold text-yellow-400">
                Event Discovery
              </h3>
              <p className="mt-4">
                Discover concerts, festivals, workshops, and more effortlessly.
                Our platform ensures you never miss an experience that matters.
              </p>
              <Button variant="outline" className="mt-4 text-zinc-800 bg-yellow-400">
                Discover Events
              </Button>
            </div>
            <div className="bg-[#1C1C1C] p-6 rounded-lg shadow-lg text-teal-400">
              <h3 className="text-xl  font-bold text-yellow-400">
                Event Ticketing
              </h3>
              <p className="mt-4">
                We provide seamless ticketing and promotion solutions to event
                organizers. List your event, sell tickets, and manage your
                attendees with ease.
              </p>
              <Button variant="outline" className="mt-4 text-zinc-800 bg-yellow-500">
                Publish Events
              </Button>
            </div>
          </div>
        </div>

        {/* Founders Section */}
        <div className="space-y-12">
          <h2 className="text-4xl font-extrabold text-center text-yellow-400">
            Meet the Founders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="bg-[#1C1C1C] p-6 rounded-lg shadow-lg text-teal-400"
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-yellow-400 text-center">
                  {founder.name}
                </h3>
                <p className="text-sm text-center text-zinc-400">
                  {founder.post}
                </p>
                <p className="mt-4 text-sm">{founder.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center pt-16">
          <h2 className="text-4xl font-bold text-yellow-400">
            Join the Revolution
          </h2>
          <p className="mt-4 text-lg">
            We are always on the lookout for dynamic, creative, and passionate
            individuals to join our team.
          </p>
          <Button className="mt-8" variant="solid">
            Join Us
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
