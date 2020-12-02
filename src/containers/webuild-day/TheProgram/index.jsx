import React from 'react';
import Container from 'components/Container';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

export const TheProgram = () => {
  return (
    <div className="bg-primary text-foreground">
      <Container className="flex flex-col md:flex-row">
        <LeftSide />
        <RightSide />
      </Container>
    </div>
  );
};

export default TheProgram;
