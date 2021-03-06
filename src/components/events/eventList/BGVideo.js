// Library Imports
import React from 'react';
import styled from 'styled-components';
// Video file imports
import videomp4 from '../../../data/img/videomp4.mp4';
import videowebm from '../../../data/img/videowebm.webm';
// Style video container
const BGVideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  opacity: 0.15;
  overflow: hidden;
`;
// Style video component
const videoStyle = {
  height: '100%',
  width: '100%',
  objectFit: 'cover'
};

export default () => {
  return (
    <BGVideoWrapper>
      <video autoPlay="true" loop="true" muted="true" style={videoStyle}>
        <source src={videomp4} type="video/mp4" />
        <source src={videowebm} type="video/webm" />
        {/* Only shows if browser can't play it. For example IE < 9 */}
        Your browser is not supported!
      </video>
    </BGVideoWrapper>
  );
};
