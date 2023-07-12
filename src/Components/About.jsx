import React from 'react';
// import svg from "../Assets/who-we-are-img.gif"
import about from '../Assets/Blue_White_Illustration_About_Us_Instagram_Post-removebg.png';
import { FaPlusCircle } from 'react-icons/fa';

const About = () => {
  return (
    <div className='flex-col'>
      <div className='flex-col container m-auto'>
        <h1 className='font-bold text-7xl'>About Us</h1>
        <img src={about} alt='Infographics' className='hover:scale-110 duration-200' />
      </div>
      <div className='flex justify-evenly p-2 my-auto md:mt-64'>
        <div className='md:w-[600px] w-[370px] text-start mt-20 md:mt-8 p-1'>
          <h3 className='font-bold md:text-5xl text-center text-4xl mt-3 text-blue-900'>
            WHO WE ARE
          </h3>
          <span className='flex md:text-5xl text-3xl text-center font-bold mt-10 text-gray-900'>
            Intelligent & Creative • Tested & Trusted
          </span>
          <p className='text-justify mt-14'>
            We, Maker's Digital Pro is a new generation, innovative, dynamic and result oriented Web
            Development Company based in the US. Equipped with in depth knowledge of the latest and
            evolving technologies in design and development and combined with innovative, out of the
            box and unorthodox thinking, which brings out the optimal solution for the hardest of
            complexities.
            <br />
            With over 10 years of experience in the digital marketing industry, Maker's Digital Pro
            has established itself as a leading name in the field. Our extensive expertise and
            collaborative approach have allowed us to work with renowned brands such as Drupal,
            Magento, MySQL, jQuery, WordPress, Joomla, Photodune, and Java.
            <br />
            We take pride in delivering exceptional marketing services to our clients, ensuring
            their success in the digital realm.
          </p>
          <br />
          <p className='text-justify'>
            <span className='text-5xl'>Our Vision</span>
            To maintain our position at the forefront of the digital marketing industry. We
            constantly adapt to the ever-evolving landscape, staying up to date with the latest
            trends, strategies, and technologies. By doing so, we can provide our clients with
            cutting-edge solutions that drive growth and deliver outstanding results
          </p>
          <br />
          <p className='text-justify'>
            <span className='text-5xl'>Our Mission</span>
            To offer our clients the best possible marketing services. We believe in going beyond
            expectations, striving for excellence in everything we do. We understand that each
            client is unique, and we tailor our strategies and campaigns to their specific goals and
            requirements. By leveraging our extensive knowledge and experience, we help our clients
            achieve their business objectives and unlock their true potential.
          </p>

          {/* <div className='mt-16'>
            <ul className='flex'>
              <FaPlusCircle size={20} />
              <li className='font-bold ml-6'>
                Analytics Tracking Code Installation & Dealing with Duplicate Issues
              </li>
            </ul>
            <ul className='flex mt-5'>
              <FaPlusCircle size={20} />
              <li className='font-bold ml-6'>
                Website Modification Consulting & Structure Data Implementation
              </li>
            </ul>
            <ul className='flex mt-5'>
              <FaPlusCircle size={20} />
              <li className='font-bold ml-6'>
                Structure Data Implementation & Monthly SEO Reports
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
