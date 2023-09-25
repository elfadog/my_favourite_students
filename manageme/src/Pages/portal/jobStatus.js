import React, { useState } from 'react';

function JobStatus({ job, onSendMessage }) {
  const [newMessage, setNewMessage] = useState('');
  
  return (
    <li>
      <h3>Job {job.id}</h3>
      <p>Status: {job.status}</p>
      <ul>
        {job.messages.map((message, index) => <li key={index}>{message}</li>)}
      </ul>
      {job.status === 'In Progress' && (
        <div>
          <input type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)} />
          <button onClick={() => onSendMessage(job.id, newMessage)}>Send Message</button>
        </div>
      )}
    </li>
  );
}

export default JobStatus;
