import HeroBanner from '@/components/home/component-home/HeroBanner';
import React from 'react';
import SessionDescription from '@/components/home/SessionDescription';
import SessionCourse from '@/components/home/SessionCourse';
import SessionChallenge from '@/components/home/SessionChallenge';
import SessionFeedback from '@/components/home/SessionFeedback';
import SessionAboutUs from '@/components/home/SessionAboutUs';
import SessionContact from '@/components/home/SessionContact';
import AnimatedSection from '@/components/common/AnimatedSection';

function HomePage() {
  return (
    <div className='bg-white pb-32'>
      <AnimatedSection id='hero' animation='fadeInUp'>
        <HeroBanner />
      </AnimatedSection>

      <AnimatedSection id='description' animation='fadeInUp' delay={100}>
        <SessionDescription />
      </AnimatedSection>

      <AnimatedSection id='courses' animation='fadeInUp' delay={200}>
        <SessionCourse />
      </AnimatedSection>

      <AnimatedSection id='challenges' animation='fadeInLeft' delay={100}>
        <SessionChallenge />
      </AnimatedSection>

      <AnimatedSection id='feedback' animation='fadeInRight' delay={100}>
        <SessionFeedback />
      </AnimatedSection>

      <AnimatedSection id='contact' animation='fadeInUp' delay={100}>
        <SessionContact />
      </AnimatedSection>

      <AnimatedSection id='about' animation='fadeInScale' delay={200}>
        <SessionAboutUs />
      </AnimatedSection>
    </div>
  );
}

export default HomePage;
