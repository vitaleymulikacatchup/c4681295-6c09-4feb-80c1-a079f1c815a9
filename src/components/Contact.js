import React from 'react';

const Contact = () => {
  return (
    <section className="section-padding bg-black text-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Drop
          </h2>
          <h3 className="text-3xl md:text-4xl font-light mb-12">
            me a NOTE
          </h3>
          
          <p className="text-lg leading-relaxed mb-8">
            Got an idea? Want to share a moment? We'd love to
            hear from you. Drop us a line and let's start a conversation.
          </p>
          
          <button className="btn-secondary">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;