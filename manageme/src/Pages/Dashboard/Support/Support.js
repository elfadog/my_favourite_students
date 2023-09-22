import React from 'react';
import Icon from './Icon';

const Support = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', position: 'absolute', top: '50px', left: '30px' }}>
      <div>Frequently Asked Questions</div>
      <Icon />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>
          <strong>Q: How do I contact customer support?</strong>
          <p>A: You can contact our customer support team by emailing support@example.com or by calling +1-123-456-7890.</p>
        </li>
        <li>
          <strong>Q: What are your business hours?</strong>
          <p>A: Our business hours are from 9:00 AM to 5:00 PM, Monday through Friday.</p>
        </li>
        {/* Add more FAQs and answers as needed */}
      </ul>
    </div>
  );
};

export default Support;
