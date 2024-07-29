import React from 'react';
import men1 from './imges/image 46.png';
import men2 from './imges/image 47.png';
import men3 from './imges/image 51.png';
import instagram from './imges/icon-instagram.png';
import linkedin from './imges/linkin.png';
import girlsimg from './imges/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Contact.css';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import './About.css';
import { Pagination } from 'swiper/modules';
import tiwter from './imges/Icon-Twitter.png';
import dolar from './imges/Services (3).png';
import house from './imges/house.png';
import pars from './imges/Services (2).png';
import botal from './imges/Services (3).png';
import Footerandabove from './Footerandabove';
import Footerfile from './Footerfile';

function About() {
  const dollarcard = [
    {
      dolarimg: house,
      price: '10.5k',
      discrip: 'Sallers active our site',
    },
    {
      dolarimg: dolar,
      price: '33k',
      discrip: 'Mopnthly Produduct Sale',
    },
    {
      dolarimg: pars,
      price: '45.5k',
      discrip: 'Customer active in our site',
    },
    {
      dolarimg: botal,
      price: '25k',
      discrip: 'Anual gross sale in our site',
    },
  ];

  const cards_about = [
    {
      imgcard: men1,
      title: 'Tom Cruise',
      dis: 'Founder & Chairman',
      ic1: tiwter,
      ic2: instagram,
      ic3: linkedin,
    },
    {
      imgcard: men2,
      title: 'Emma Watson',
      dis: 'Managing Director',
      ic1: tiwter,
      ic2: instagram,
      ic3: linkedin,
    },
    {
      imgcard: men3,
      title: 'Will Smith',
      dis: 'Product Designer',
      ic1: tiwter,
      ic2: instagram,
      ic3: linkedin,
    },
    {
      imgcard: men1,
      title: 'Tom Cruise',
      dis: 'Founder & Chairman',
      ic1: tiwter,
      ic2: instagram,
      ic3: linkedin,
    },
    {
      imgcard: men1,
      title: 'Tom Cruise',
      dis: 'Founder & Chairman',
      ic1: tiwter,
      ic2: instagram,
      ic3: linkedin,
    },
  ];

  return (
    <div>
      <div className="home-cntact-link">
        <Link id="home" to="/home">
          Home /
        </Link>
        <Link to="/about"> About</Link>
      </div>
      <div className="main-story-div-and-img">
        <div className="story-text-div">
          <h2>Our Story</h2>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div>
          <img src={girlsimg} alt="" />
        </div>
      </div>

      <div className="main-dollar-div">
        {dollarcard.map((dollar) => (
          <div className="main-dollar-card-div" key={dollar.price}>
            <div>
              <img src={dollar.dolarimg} alt="" />
            </div>
            <div>
              <h2>{dollar.price}</h2>
            </div>
            <div>
              <p>{dollar.discrip}</p></div>
          </div>
        ))}
      </div>

      <div className="main-swiper-div">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {cards_about.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="main-div-card-one-card">
                <div className="main-img-larg">
                  <img src={card.imgcard} alt="" />
                </div>
                <h3>{card.title}</h3>
                <p>
                  {card.dis}
                  <div className="icone-img">
                    <img src={card.ic1} alt="" />
                    <img src={card.ic2} alt="" />
                    <img src={card.ic3} alt="" />
                  </div>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Footerandabove />
      <Footerfile />
    </div>
  );
}

export default About;
