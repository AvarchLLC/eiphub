import React from 'react';
import AboutEventDetails from '../components/AboutEventDetails.jsx';
import Community from '../components/Community.jsx';
import SummitArchive from '../components/SummitArchive.jsx';

export default function AboutPage() {
  return (
    <div className="page-about" style={{ paddingTop: '80px' }}>
      <AboutEventDetails />
      <Community />
      <SummitArchive />
    </div>
  );
}
