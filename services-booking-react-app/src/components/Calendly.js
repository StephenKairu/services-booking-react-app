// import React from 'react';
// import { InlineWidget } from 'react-calendly';

// const Calendly = () => {
//     <div>
//         return <InlineWidget url="https://calendly.com/stevekairu/30min?hide_gdpr_banner=1" />
//     </div>
// }

// export default Calendly;

import React from 'react';

const Calendly = () => {
  return (
    <div style={{ height: "800px" }}>
      <iframe
        src="https://calendly.com/stevekairu/30min?hide_gdpr_banner=1"
        width="80%"
        height="75%"
        frameborder="0"
      ></iframe>
    </div>
  );
};

export default Calendly;