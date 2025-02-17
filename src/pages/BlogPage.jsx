import React from 'react';
import HeaderContent from '../Components/HeaderContent/HeaderContent';
import BodyContent from '../Components/BodyContent/BodyContent';
import FooterContent from '../Components/FooterContent/FooterContent';

export default function BlogPage() {
  return (
    <div id='wrapper'>
      <HeaderContent />
      <BodyContent>
        <h3>Blog Page</h3>
      </BodyContent>
      <FooterContent />
    </div>
  );
}


