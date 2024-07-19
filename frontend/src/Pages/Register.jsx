import React from "react";
import "./CSS/Register.scss";
import { Link } from "react-router-dom";

const register = () => {
  return (
    <>
      <div className="wrap">
        <div className="main_wrap">
          <div className="background_image"></div>
          <div className="right_bg"></div>
          <div className="right">
            <div className="right_content">
              <div className="top">
                <p>shiba.</p>
                <p>flying</p>
              </div>
              <div className="bottom">
                <div className="photo">
                  <img src="image/rig_small.jpg" alt="" />
                </div>
                <div className="text">
                  <p>May 24, 2020</p>
                  <p>Dog Captain for a Day</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="register_wrap">
          <div className="register_top">
            <div className="text">
              <div className="text_top">Dog Flying Lessons</div>
              <div className="text_bottom">
                <p>June 26</p>
                <p>Location: Riverside Park</p>
              </div>
            </div>
            <div className="photo">
              <img src="image/register_photo.jpg" alt="" />
                <div className="circle">
                  <i className="fas fa-long-arrow-alt-down"></i>
                </div>
            </div>
          </div>

          <div className="register_bottom">
            <div className="left">
              This gathering offers top-tier training to help your dog obtain
              six certifications: PPL, IR, CPL, SEC, CFI, and CFII, enhancing
              their competitiveness for airline positions. Additionally, this
              program provides internship opportunities, allowing your dog to
              choose and complete training to obtain a pilot's license, enabling
              them to become a professional civil aviation pilot in a more
              professional manner.
            </div>
            <div id="right" className="right">
              <button>Register</button>
            </div>
          </div>
        </div>

        <div className="friend_wrap">
          <div className="left">
            <div className="photo">
              <img src="image/jump.jpg" alt="" />
              <span className="small_text">More Healthy</span>
            </div>
            <div className="text">
              <h3>Health</h3>
              <p>Activity for Shiba Inu's body</p>
            </div>
          </div>
          <div className="right">
            <div className="photo">
              <img src="image/health.jpg" alt="" />
              <span className="small_text">Make Friend</span>
            </div>
            <div className="text">
              <h3>Socializing</h3>
              <p>Don't let your dog become a loner Shiba.</p>
            </div>
          </div>
        </div>

        <div className="otheractivity_wrap">
          <div className="top">
            Other Activities
            <span className="line"></span>
          </div>
          <div className="bottom">
            <div className="box">
              <div className="photo">
                <Link to="/register">
                  <img src="image/other_img1.jpg" alt="" />
                </Link>
              </div>
              <div className="text">
                <p>May 24, 2020</p>
                <p>Dog Park Gathering</p>
              </div>
            </div>

            <div className="box">
              <div className="photo">
                <Link to="/register">
                  <img src="image/other_img2.jpg" alt="" />
                </Link>
              </div>
              <div className="text">
                <p>May 25, 2020</p>
                <p>Christmas</p>
              </div>
            </div>

            <div className="box">
              <div className="photo">
                <Link to="/register">
                  <img src="image/other_img3.jpg" alt="" />
                </Link>
              </div>
              <div className="text">
                <p>May 26, 2020</p>
                <p>Flying ClassName</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="which_wrap">
        <div className="hover">
          <div className="back_image">
            <div className="content">
              <img src="image/concept.jpg" alt="" />
            </div>
            <div className="content">
              <img src="image/which_shop.jpg" alt="" />
            </div>
          </div>
          <div className="front">
            <Link to="/about">
              <div className="content">About Us</div>
            </Link>

            <Link to="/">
              <div className="content">Store</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default register;
