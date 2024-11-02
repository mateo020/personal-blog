import * as React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';

export default function ExperienceTimeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#444', color: '#fff' }} // Dark background for content
        contentArrowStyle={{ borderRight: '7px solid #444' }} // Dark arrow color
        date="May 2024 - Present"
        iconStyle={{ background: '#f9a825', color: '#000' }} // Bright icon for contrast
        icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">Finance Data Analytics Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">Ontario Municipal Employees Retirement System (OMERS)</h4>
        <p>
          Finance Risk team
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#333', color: '#fff' }} // Another dark shade
        contentArrowStyle={{ borderRight: '7px solid #333' }}
        date="August 2024 - Present"
        iconStyle={{ background: '#f9a825', color: '#000' }}
       
        icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">Vice President of Finance</h3>
        <h4 className="vertical-timeline-element-subtitle">University of Toronto Mississauga Society for Algorithmic Modeling</h4>
        <p>
          Managed budget reports, secured sponsorships, and oversaw financial operations for the society, ensuring smooth
          execution of financial strategies and budgeting.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
