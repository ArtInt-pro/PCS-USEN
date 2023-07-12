import React from 'react';
import bg from '../Assets/conts.jpg';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { FaSitemap } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import contact from '../Assets/organizational_contact_us_methods_slide_for_business_outreach_infographic_template_slide01-PhotoRoom.png-PhotoRoom.png';

const Contact = () => {
  return (
    <div className='mt-20 p-10 mb-20 '>
      <div className='mt-20'>
        <h1 className='font-bold text-center text-blue-900 text-7xl'>Contact Us</h1>
      </div>
      <img src={contact} alt='contact' />
      <div className='mt-20 w-[700px]'>
        <p className='text-center'>
          We would love to hear from you! Whether you have a question, need more information about
          our services, or want to discuss a potential project, feel free to reach out to us.
          <br />
          Our team at Maker's Digital Pro is here to assist you every step of the way.
        </p>
        <br />
        <h2 className='text-4xl mb-3'>Contact Information</h2>
        <p>
          Email:{' '}
          <a href='mailto:mozzentagroup@gmail.com' className='hover:text-blue-900 duration-200'>
            mozzentagroup@gmail.com
          </a>
        </p>
        <p>
          Phone:{' '}
          <a href='tel:+1-240-770-1632' className='hover:text-blue-900 duration-200'>
            +1-240-770-1632
          </a>
        </p>
        <p>Address: 123 Main Street, City, State, Zip Code</p>
        <br />
        <h2 className='text-4xl mb-3'>Business Hours</h2>
        <p>Monday to Friday: 9:00 AM to 6:00 PM (Local Time)</p>
        <p>
          We value your time, and we strive to respond to all inquiries promptly. Our dedicated team
          is ready to provide you with the assistance and guidance you need to achieve your digital
          marketing goals.
        </p>
        <br />
        <h2 className='text-4xl mb-3'>General Inquiries</h2>
        <p>
          For general inquiries or more information about our services, please email us at{' '}
          <a href='mailto:info@makersdigitalpro.com'>info@makersdigitalpro.com</a> or fill out the
          contact form below. We will get back to you as soon as possible.{' '}
        </p>
        <br />
        <h2 className='text-4xl mb-3'>Speak with Us</h2>
        <p>
          If you prefer to speak with someone directly, please give us a call at{' '}
          <a href='tel:+1-240-770-1632'>+1-240-770-1632</a> during our business hours. Our friendly
          team will be happy to assist you and answer any questions you may have.
        </p>
        <br />
        <h2 className='text-4xl mb-3'>Visit Our Office</h2>
        <p>
          Additionally, you can visit our office at the provided address during our business hours.
          We recommend scheduling an appointment in advance to ensure that we can allocate dedicated
          time to discuss your specific requirements.
        </p>
        <p>123 Main Street, City, State, Zip Code</p>
        <br />
        <p>
          Thank you for considering Maker's Digital Pro as your digital marketing partner. We look
          forward to the opportunity to work with you and help your business thrive in the digital
          landscape.
        </p>
        {/* bg-[url("https://firebasestorage.googleapis.com/v0/b/jobs-hunt-5c088.appspot.com/o/careerform1.jpg?alt=media&token=10b9459d-0992-433f-afdf-32cfc219349f")] */}
        {/* <img src={bg} alt="" className='lg:w-[400px] hidden lg:inline lg:h-[300px] xl:mb-0 mb-24 -mt-28 shadow-2xl drop-shadow-xl ml-32'/> */}
        {/* <div className='border-[1px] ml-0 border-blue-900 p-0'>
          <button className='bg-green-600 w-[96%] text-3xl rounded-md ml-10 text-white m-20 h-24'>
            Whatsapp
          </button>
          <button className='bg-blue-950 w-[96%] text-3xl rounded-md ml-10 text-white m-20 h-24'>
            Instagram
          </button>
          <button className='bg-blue-950 w-[96%] text-3xl rounded-md ml-10 text-white m-20 h-24'>
            Email
          </button>
          <button className='bg-blue-500 w-[96%] text-3xl rounded-md ml-10 text-white m-20 h-24'>
            LinkedIn
          </button>
          <button className='bg-blue-500 w-[96%] text-3xl rounded-md ml-10 text-white m-20 h-24'>
            Twitter
          </button>
          <button className='bg-yellow-500 w-[96%] text-3xl rounded-md ml-10 text-white m-20 h-24'>
            Snapchat
          </button>
          <button className='bg-blue-500 w-[96%] text-3xl rounded-md ml-10 text-white m-20 h-24'>
            Facebook
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
