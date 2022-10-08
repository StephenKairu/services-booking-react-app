import React from 'react';

const Calendly = () => {
  return (
    <div className='calendly' style={{ height: "500px" }}>
      <iframe
        src="https://calendly.com/stevekairu/30min?hide_gdpr_banner=1"
        width="80%"
        height="90%"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default Calendly;