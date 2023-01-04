import React from 'react';
import PropTypes from 'prop-types';
import { SectionComponet } from './Section.styled';

const Section = ({ title, children }) => (
  <SectionComponet>
    <h2>{title}</h2>
    {children}
  </SectionComponet>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
