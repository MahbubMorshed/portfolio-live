import React from "react";
import { IoCodeWorking } from "react-icons/io5";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const Experience = [
  {
    id: 1,
    date: "2022 - present",
    iconSrc: <IoCodeWorking />,
    title: "Freelance Frontend developer",
    // location: "Bangladesh",
    description: "Frontend with javaScript library React",
  },
  {
    id: 2,
    date: "2019 - present",
    iconSrc: <IoCodeWorking />,
    title: "Freelance Backend developer",
    // location: "Bangladesh",
    description: "Backend with Python frameworks Django",
  },
  {
    id: 3,
    date: "2017 - present",
    iconSrc: <IoCodeWorking />,
    title: "Freelance Game Asset creator",
    // location: "Bangladesh",
    description: "Lowpoly 3D game assets Design for Unity",
  },
  {
    id: 4,
    date: "2015 - present",
    iconSrc: <IoCodeWorking />,
    title: "Freelance 3D Artist",
    // location: "Bangladesh",
    description: "3d model for Animation and game environment in Blender.",
  },
];

const VT = () => {
  return (
    <section className="">
      <VerticalTimeline>
        {Experience &&
          Experience.map((n) => (
            <VerticalTimelineElement
              key={n.id}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgb(21, 24, 31)",
                color: "#888",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(21, 24, 31)",
                // borderRight: "7px solid  #0000FF",
              }}
              date={n.date}
              iconStyle={{ background: "rgb(21, 24, 31)", color: "#888" }}
              icon={n.iconSrc}
            >
              <h3 className="vertical-timeline-element-title">{n.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {n.location}
              </h4>
              <p>{n.description}</p>
            </VerticalTimelineElement>
          ))}
      </VerticalTimeline>
    </section>
  );
};

export default VT;
