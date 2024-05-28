import React, { useRef } from 'react';
import { Carousel, Button } from 'antd';

const contentStyle = {
  margin: 0,
  margin: '0 auto',
  height: '500px',
  width: '500px',
  textAlign: 'center',
  background: '#364d79',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
};

const Profile = () => {
  const carouselRef = useRef(null);

  const next = () => {
    carouselRef.current.next();
  };

  const prev = () => {
    carouselRef.current.prev();
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div>
      <Carousel ref={carouselRef} afterChange={onChange}>
        <div>
          <h3 style={contentStyle}></h3>
        </div>
        <div>
          <h3 style={contentStyle}></h3>
        </div>
        <div>
          <h3 style={contentStyle}></h3>
        </div>
        <div>
          <h3 style={contentStyle}></h3>
        </div>
      </Carousel>
      <div style={{ marginTop: 16, textAlign: 'center' }}>
        <Button type="primary" onClick={prev} style={{ marginRight: 8 }}>
          Previous
        </Button>
        <Button type="primary" onClick={next}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Profile;