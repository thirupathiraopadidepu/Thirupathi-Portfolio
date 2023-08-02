import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            ZPH High school, Peddaraveedu, Andhra Pradesh
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
             Matriculation
          </h4>

          <p>Matriculation</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Sreemitra junior college, Narasaraopeta, Andhra Pradesh
          </h3>
          <p>Intermediate</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Jntuk University, Kakinada, Andhra Pradesh
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p>Information Technology</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - 2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Design Trainee - WinWire Technologies
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
           Hightech city, Hyderabad.
          </h4>
          
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
