import React from "react";
import "./CSS/Introduce.scss";
import { Link } from "react-router-dom";

const Introduce = () => {
  return (
    <>
      <div className="wrap">
        <div className="wrap_balck">
          <div className="font_img">
            <div className="font">
              <h3>柴犬</h3>
              <p>
                The irresistible charm of <br />
                &emsp;adorable Shiba Inus
              </p>
            </div>

            <div className="photo_frame">
              <div className="photo_all">
                <div className="photo_col">
                  <div className="photo">
                    <img src="image/wrap_black01.jpg" alt="" />
                  </div>
                  <div className="photo">
                    <img src="image/wrap_black02.jpg" alt="" />
                  </div>
                  <div className="photo">
                    <img src="image/wrap_black03.jpg" alt="" />
                  </div>         
                  <div className="photo">
                    <img src="image/wrap_black01.jpg" alt="" />
                  </div>
                  <div className="photo">
                    <img src="image/wrap_black02.jpg" alt="" />
                  </div>
                  <div className="photo">
                    <img src="image/wrap_black03.jpg" alt="" />
                  </div>             
                </div>

                <div className="photo_col">
                  <div className="photo">
                    <img src="image/wrap_black05.jpg" alt="" />
                  </div>
                  <div className="photo">
                    <img src="image/wrap_black04.jpg" alt="" />
                  </div>
                  <div className="photo">
                    <img src="image/wrap_black06.jpg" alt="" />
                  </div>
                  <div className="photo">
                    <img src="image/wrap_black05.jpg" alt="" />
                  </div>
                  <div className="photo">
                    <img src="image/wrap_black04.jpg" alt="" />
                  </div>
                  <div className="photo">
                    <img src="image/wrap_black06.jpg" alt="" />
                  </div>
                </div>

                <div className="photo_col">
                  <div className="photo">
                    <img src="image/wrap_black07.jpg" alt="" />
                  </div>
                  <div className="photo">
                    <img src="image/wrap_black08.jpg" alt="" />
                  </div>
                  <div className="photo">
                    <img src="image/wrap_black09.jpg" alt="" />
                  </div>
                  <div className="photo">
                    <img src="image/wrap_black07.jpg" alt="" />
                  </div>
                  <div className="photo">
                    <img src="image/wrap_black08.jpg" alt="" />
                  </div>
                  <div className="photo">
                    <img src="image/wrap_black09.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="font_bottom">
            <p>
              The Shiba Inu is simple yet elegant, one of the smallest Japanese
              breeds. Agile and sharp, their fur color resembles firewood. They
              were skilled hunters in dense forests, hence the name "Shiba Inu".
            </p>
            <p>
              Personality: Strongly alert and perceptive, intelligent,
              clean-loving, obedient, and loyal. They are not easily
              approachable by strangers and rarely bark unnecessarily.
            </p>
            <p>
              Care Tips: Daily physical activities like running and free play
              are essential. Regularly pet them to strengthen your bond. Though
              not high-maintenance, during shedding season, thorough brushing is
              necessary.
            </p>
          </div>
        </div>
        <div className="benefit_wrap">
          <div className="shsh">SHIBA</div>
          <div className="left">
            <h1>Advantages</h1>
            <p>
              Shiba Inus are playful and great with children. Their short hair
              is easy to groom, needing only occasional brushing and minimal
              bathing. Naturally clean, they avoid dirty areas, making them very
              lovable pets.
            </p>
          </div>
          <div className="photo">
            <img src="image/benefit1.jpg" alt="" />
          </div>
          <div className="right">
            <Link to="/help">
              <button>Q&A</button>
            </Link>
          </div>
        </div>
        <div className="color_wrap">
          <div className="left">
            <div className="back"></div>
            <div className="photo">
              <img src="image/row_photo01.jpg" alt="" />
            </div>
          </div>
          <div className="right">
            <h3>Red Shiba</h3>
            <p>
              The Red Shiba, with its earthy yellow color, is the most common
              type. Its mischievous smile in memes is captivating. One look, and
              you'll be hooked.
            </p>
          </div>
        </div>

        <div className="color_wrap2">
          <div className="left">
            <div className="back"></div>
            <div className="photo">
              <img src="image/row_photo02.jpg" alt="" />
            </div>
          </div>
          <div className="right">
            <h3>Black Shiba</h3>
            <p>
              The Black Shiba has a unique, "boss-like" presence online.
              Remember the tongue-wagging Shiba that annoyed its brother? It
              immediately backs down when facing a Black Shiba. Its "tongue
              skills" are useless.
            </p>
          </div>
        </div>

        <div className="color_wrap3">
          <div className="left">
            <div className="back"></div>
            <div className="photo">
              <img src="image/row_photo03.jpg" alt="" />
            </div>
          </div>
          <div className="right">
            <h3>White Shiba</h3>
            <p>
              White Shibas are often mistaken for other breeds. They are
              relatively rare but considered "disqualified" in official dog
              shows, so they can't compete.
            </p>
          </div>
        </div>

        <div className="color_wrap4">
          <div className="left">
            <div className="back"></div>
            <div className="photo">
              <img src="image/row_photo04.jpg" alt="" />
            </div>
          </div>
          <div className="right">
            <h3>Sesame Shiba</h3>
            <p>
              Sesame Shibas blend colors uniquely: Red, White, and Black,
              creating the distinctive Sesame Shiba. Variations include "Red
              Sesame" with more yellow and "Black Sesame" with more black.
            </p>
          </div>
        </div>

        <div className="shiba_wrap">
          <div className="shiba_fixed"></div>

          <div className="shiba_topic">Shiba Inu Breed Standard</div>
          <div className="shiba_01">
            <div className="text">
              <h2>Ears / Eyebrows</h2>
              <p>
                Shiba Inus have upright ears and very prominent eyebrows, which
                are oval-shaped and incredibly cute.
              </p>

              <img src="image/icon01.png" alt="" />
            </div>
            <div className="photo">
              <img src="image/shiawrap1.jpg" alt="" />
            </div>
          </div>
          <div className="shiba_02">
            <div className="text">
              <h2>Coat</h2>
              <p>
                Shiba Inus have a double coat. The undercoat is light and soft,
                helping to regulate their body temperature, while the longer
                outer coat protects them from direct sunlight exposure.
              </p>
              <img src="image/icon02.png" alt="" />
            </div>
            <div className="photo">
              <img src="image/shiawrap2.jpg" alt="" />
            </div>
          </div>

          <div className="shiba_03">
            <div className="text">
              <h2>Tail Shape</h2>
              <p>
                The tail is an important part of a Shiba Inu's balance. As a
                hunting dog, the ideal tail is thick and powerful, either curled
                or held in a sickle shape, with the tip pointing towards the
                neck or upwards.
              </p>

              <img src="image/icon03.png" alt="" />
            </div>
            <div className="photo">
              <img src="image/shiawrap3.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduce;
