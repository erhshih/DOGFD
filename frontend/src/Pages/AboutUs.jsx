import React from "react";
import "./CSS/AboutUs.scss";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const AboutUs = () => {
  return (
    <div className="wrap">
      <div className="about">
        <div className="about_top">
          <div className="text">About</div>
        </div>
      </div>
 
      <div className="concept">
        <div className="text">
          <p>
            The main concept of DOGFD is to
            <br />
            promote and celebrate dog culture.
          </p>

          <p>
            Helping more people understand
            <br />
            the adorable and charming nature of dogs.
          </p>

          <p>
            Anyone who sees a dog
            <br />
            can't help but want to hug them.
          </p>

          <p>
            We will host various events
            <br />
            and sell a variety of products.
          </p>
        </div>
        <div className="concept_img">
          <img src="image/concept.jpg" alt="" />
        </div>
      </div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='slider' src="image/bar.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='slider' src="image/bar2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='slider' src="image/bar3.jpg" alt="" /></SwiperSlide>
      </Swiper>
      
      <div className="head_goal">
        <div className="text">Purpose</div>
      </div>

      <div className="goal">
        <div className="goal01">
          <div className="img01">
            <img src="image/goal01.jpg" alt="" />
          </div>

          <div className="text01">
            <div className="topic">
            <h2>
              Discover
            </h2>
            </div>
            <div className="content">
              <p>
                The Expression King of the Dog World
                <br />
                Loyal, brave, and action-oriented
              </p>

              <p>
                Dogs have unique personalities and a wide range of expressions.
                They are independent, clean, and groom themselves and other
                dogs. This trait makes them easy to potty train. Dogs have a
                "never give up" attitude and protect their owners when in
                danger.
              </p>
            </div>
          </div>
        </div>

        <div className="goal02">
          <div className="text02">
            <div className="topic">
              <h2>
                Assistance
              </h2>
            </div>
            <div className="content">
              <p>Make your dog a social king</p>

              <p>
                We regularly host dog gatherings to help shy or friendless dogs
                become more outgoing. Many dog owners enjoy bringing their dogs
                to various social activities to meet new companions. Interacting
                with other dogs is very beneficial for your dog to develop good
                social skills and get along better with other dogs.
              </p>
            </div>
          </div>

          <div className="img02">
            <img src="image/goal02.jpg" alt="" />
          </div>
        </div>

        <div className="goal01 goal03">
          <div className="img01">
            <img src="image/goal03.jpg" alt="" />
          </div>

          <div className="text01">
            <div className="topic">
              <h2 className="find">
                Find
              </h2>
            </div>
            <div className="content">
              <p>You can customize your pet merchandise</p>

              <p>
                Our merchandise includes a variety of everyday items such as
                clothes, phone cases, dog bowls, masks, and mugs. Additionally,
                you can use a photo of your own dog to create personalized items
                just for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
