import React from 'react';
import DaysProgram from '../components/DaysProgram.jsx';

export default function AgendaPage() {
  return (
    <div className="page-agenda" style={{ paddingTop: '80px' }}>
      <DaysProgram showMatrix={true} />
    </div>
  );
}
