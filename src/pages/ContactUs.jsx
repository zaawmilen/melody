import React from 'react';

function ContactUs() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Contact Us</h1>
      <p>
        Address: Melody English & Computer Training Center<br />
        Nsambiya, Kirombe Gogonya Rd<br />
        Phone: +256  751 219 634<br />
        Email: info@melodycenter.com<br />
      </p>
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          backgroundColor: '#25D366',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '5px',
          textDecoration: 'none',
          fontSize: '16px',
          marginTop: '10px',
        }}
      >
        Chat with us on WhatsApp
      </a>
    </div>
  );
}

export default ContactUs;
