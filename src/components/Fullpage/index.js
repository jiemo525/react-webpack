/**
 * 首页全屏滚动
 */
import React from 'react';
import SectionsContainer from './SectionsContainer.js';
import Section from './Section.js';

class FullPage extends React.Component {
  render() {
    let options = {
      sectionClassName: 'section',
      anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour', 'sectionFive'],
      scrollBar: false,
      navigation: true,
      verticalAlign: false,
      sectionPaddingTop: '0',
      sectionPaddingBottom: '0',
      arrowNavigation: true,
      // continuousVertical: true,
     
    };

    return (
      <div >
        <SectionsContainer className="container" {...options} id='fullpage'>
          <Section color="#ddefee"></Section>
          <Section ></Section>
          <Section color="#324567"></Section>
          <Section ></Section>
          <Section >
            <div style={{height: 500, backgroundColor: '#324567'}}></div>
          </Section>
        </SectionsContainer>
      </div>
    );
  }
}

export default FullPage;
