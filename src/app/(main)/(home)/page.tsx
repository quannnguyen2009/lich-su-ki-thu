import React from 'react';
import ScrollytellingHero from '@/components/home/ScrollytellingHero';
import SessionCourse from '@/components/home/SessionCourse';
import SessionChallenge from '@/components/home/SessionChallenge';
import SessionFeedback from '@/components/home/SessionFeedback';
import AnimatedSection from '@/components/common/AnimatedSection';

function HomePage() {
  return (
    <div className='bg-white'>
      {/* ── Scrollytelling Hero ── */}
      <ScrollytellingHero />

      {/* ── Traditional sections below ── */}
      <div className='pb-16'>
        <AnimatedSection id='courses' animation='fadeInUp' delay={200}>
          <SessionCourse />
        </AnimatedSection>

        <AnimatedSection id='challenges' animation='fadeInLeft' delay={100}>
          <SessionChallenge />
        </AnimatedSection>

        <AnimatedSection id='feedback' animation='fadeInRight' delay={100}>
          <SessionFeedback />
        </AnimatedSection>
      </div>
    </div>
  );
}

export default HomePage;
