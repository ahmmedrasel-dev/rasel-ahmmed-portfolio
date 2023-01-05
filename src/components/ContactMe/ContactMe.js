import React from 'react';
import ContactForm from './ContactForm';

const ContactMe = () => {
  return (
    <div className="bg-neutral">
      <h2 className='text-center uppercase text-5xl font-bold pt-16'>Contact</h2>
      <div className="grid grid-cols-1 lg:max-w-2xl w-full mx-auto gap-5 py-12">
        <div className="max-w-5xl rounded-lg drop-shadow-2xl border border-blue-900 p-8">
          <ContactForm></ContactForm>
        </div>
      </div>

    </div >
  );
};

export default ContactMe;