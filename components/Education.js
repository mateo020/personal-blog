import * as React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from 'react-icons/fa';

export default function EducationTimeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#333', color: '#fff' }} // Dark background, light text
        contentArrowStyle={{ borderRight: '7px solid #333' }} // Dark arrow
        date="2021 - 2025"
        iconStyle={{ background: '#4a90e2', color: '#fff' }} // Darker icon background, white icon color
        icon={<FaGraduationCap />}
      >
        <h3 className="vertical-timeline-element-title">University of Toronto</h3>
        <h4 className="vertical-timeline-element-subtitle">HBSc Applied Statistics</h4>
        <p>2025</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
