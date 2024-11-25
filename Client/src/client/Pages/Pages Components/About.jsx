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
      post: "Founder and CEO, Festify",
      description:
        " We believe people should go out, attend events, meet interesting people, and live a happening life. Wherever you are in the world, AllEvents helps you turn moments into lasting memories. It’s your personal guide to exploring the vibrant world of local events and experiences, where every day holds the promise of a new adventure.",
    },
    {
      image: JagJeevan2,
      name: "Jag Jeevan",
      post: "Co-Founder and CEO, Festify",
      description:
        "Festify is where innovation meets passion, and every line of code contributes to making the world’s largest event discovery platform come to life. We are passionate about developing a platform that makes it super simple to discover events for people, no matter where they are. We embody the spirit of #StayHappening and are working to impact others!",
    },
    {
      image: Hybrid,
      name: "Hujaifa Ahmed",
      post: "Director and Manager, Festify",
      description:
        "The Director of an Event Management Organization oversees the planning and execution of events, ensuring creativity and precision in every detail. They lead a team of professionals, manage client relationships, and coordinate logistics, all while maintaining a focus on delivering exceptional experiences that exceed client expectations and create lasting memories.",
    },
  ];

  return (
    <div className="h-full">
      <GridBackground para="Making The World #Happening" />
      <section className="px-8 md:px-80 py-16 space-y-8">
        <h1 className="text-4xl font-extrabold tracking-tighter md:text-5xl text-center">
          We reimagine how you discover events
        </h1>
        <p className="text-lg font-bold text-center">
          Events are our pulse, the rhythm that drives us.
        </p>
        <p className="text-lg">
          Founded in 2024, Festify is now one of the world’s largest Event
          Discovery Platforms. Our mission is to turn ordinary days into
          extraordinary memories. For you. For the memories you crave to create.
          For the communities you seek to engage.
        </p>
        <p className="text-lg">
          Whether you want to be thrilled, inspired, or connected, we bring
          local events to your fingertips. Whenever, wherever, we are here to
          make your moments #Happening.
        </p>
        <p className="text-lg">
          We are also the ticketing partner for millions of events across the
          globe, we are the perfect platform for event organizers, providing
          seamless ticketing and promotion that empowers organizers to bring
          their events to life and share them with the world.
        </p>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <Button variant="outline">
              <AccordionTrigger>Read our story</AccordionTrigger>
            </Button>

            <AccordionContent>
              <div className="bg-zinc-100 shadow-md rounded-3xl p-8 space-y-4">
                <p className="text-lg">
                  The idea of Festify came to life when Aditya Tiwari and Jag Jeevan found
                  it challenging to discover events around them, which caused
                  them to miss out on events they would have wanted to attend.
                </p>
                <p className="text-lg">
                  In 2024, Festify was founded to ensure that nobody would
                  miss out on an event they would have wanted to attend. Since
                  then, there has been no looking back - Festify grew to
                  become the world's largest event discovery platform and helps
                  more than 20 million people around the world discover events
                  every month.
                </p>
                <h1 className="text-3xl font-bold tracking-tighter pt-4">Our Mission</h1>
                <p className="text-lg">
                  We are on a mission to simplify event discovery, helping
                  people discover new events and experiences anywhere, anytime.
                  We motivate people to go out, suggest events they may like,
                  and enhance their ticketing booking experience.
                </p>
                <h1 className="text-3xl font-bold tracking-tighter pt-4">Our Vision</h1>
                <p className="text-lg">
                  We envision a world where people truly live, not just exist,
                  and #StayHappening is the norm. People go out, attend events,
                  meet people in real life, and create memories of a lifetime.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* How we make magic happen! */}
        <div className="pt-16">
          <h1 className="text-4xl font-extrabold tracking-tighter md:text-5xl text-center">
            How we make magic happen!
          </h1>
          <div className="flex flex-col md:flex-row gap-8 py-16">
            <div className="bg-zinc-200 ring-2 ring-zinc-400 rounded-md w-full p-4 flex flex-col justify-between">
              <div className="space-y-4">
                <h1 className="text-xl font-bold text-center">
                  Event Discovery
                </h1>
                <p>
                  We make it easy for event explorers to discover events
                  happening around them!
                </p>
                <p>
                  Whether it’s a concert, a food festival, or a yoga class - you
                  will never miss an event you would want to attend.
                </p>
              </div>
              <button className="btn-Text">Discover Events</button>
            </div>
            <div className="bg-zinc-200 ring-2 ring-zinc-400 rounded-md w-full p-4 flex flex-col justify-between">
              <div className="space-y-4">
                <h1 className="text-xl font-bold text-center">
                  Event Ticketing
                </h1>
                <p>
                  We provide a simple yet comprehensive event listing and
                  ticketing solution to event organizers!
                </p>
                <p>
                  List your event, sell tickets, manage attendees and promote
                  your event.
                </p>
              </div>
              <button className="btn-Text">Publish Events</button>
            </div>
          </div>
        </div>

        {/* Meet the Founders */}
        <div className="py-16">
          <h1 className="text-4xl font-extrabold flex justify-center tracking-tighter md:text-5xl">
            Meet the Founders
          </h1>
          <div className="flex flex-col gap-8 py-16">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="shadow-xl rounded-2xl p-8 flex max-sm:flex-col md:flex-row items-center md:items-start ring-2 ring-zinc-200"
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="rounded-2xl w-40 h-40 md:w-48 md:h-48 mb-4 lg:w-44 lg:h-44 md:mb-0 md:mr-8"
                />
                <div className="">
                  <h1 className="text-2xl font-bold tracking-tighter ">
                    {founder.name}
                  </h1>
                  <h3 className="text-zinc-400">{founder.post}</h3>
                  <p className="text-zinc-600 py-4">{founder.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="relative flex justify-center items-center">
        <GridBackground
          para="Join the Revolution"
          para2="We are always looking for people who are creative, dynamic and #happening!"
        />
        <Button className="absolute bottom-32 max-sm:bottom-12" variant="">
          Join Us
        </Button>
      </div>
    </div>
  );
};

export default About;
