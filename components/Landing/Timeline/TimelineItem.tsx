"use client"
import React from 'react';


interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  position: 'start' | 'end';
  svg?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, position, svg }) => {
  return (
    <li className="timeline-item">
      <div className="timeline-middle m-4">
        {svg ? (
          <img src={svg} className="h-16 w-16" alt="" />
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
          </svg>
        )}
      </div>

      <div className={`w-3/5 timeline-${position} ${position === 'start' ? 'text-right' : 'text-left'} mb-10`}>
        <time className="font-mono italic text-black text-sm">{year}</time>
        <div className="text-md font-semibold ">{title}</div>
        <div className="text-black text-sm">{description}</div>
      </div>
      <hr />
    </li>
  );
};

export default TimelineItem;