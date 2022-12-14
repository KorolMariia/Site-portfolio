import React from 'react';
import Header from '../../components/Header/Header';
import SectionSkills from '../../components/SectionSkills/SectionSkills';
import Footer from '../../components/Footer/Footer';

export default function Skills() {
  return (
    <>
      <Header />
      <section className="container">
        <SectionSkills />
      </section>
      <Footer />
    </>
  );
}
