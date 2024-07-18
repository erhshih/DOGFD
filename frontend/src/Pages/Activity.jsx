import React from "react";
import "./CSS/Activity.scss";
import { Link } from 'react-router-dom'

const Activity = () => {
  return (
    <div className="wrap">
      <div className="invite_wrap">
        <div className="left">
          <div className="top">Dog Gathering</div>
          <div className="bottom">
            <img src="image/invite.jpg" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="big_font">
            WE <br />
            INVITE <br />
            YOU. <br />
          </div>
          <div className="small_font">
            <p>
              All equipment and dog food for the gathering are provided by us.
              Just bring your happy mood and join us.
            </p>
          </div>
        </div>
      </div>

      <div className="fixed_wrapouter">
        <div className="text_left">Monthly Gathering</div>
        <div className="fixed_wrap">
          <p>No hanky-panky!</p>
        </div>

        <div className="text_right">Meeting Beneficial Dogs</div>
      </div>

      <div className="actvity_wrap">
        <div className="left">
          <img src="image/parkbig.jpg" alt="" />
        </div>
        <div className="right">
          <div className="box">
            <div className="top">
              <img src="image/parksmall.jpg" alt="" />
            </div>
            <div className="bottom">
              <h3>Dog Park Gathering</h3>
              <div className="activity_text">Activity One</div>
              <p>
                The dog park gathering is a lot of fun! Bring your Shiba Inu to
                the Windy Dog Park to play with other Shibas, fetch balls, and
                enjoy free treats for your dog to their heart's content.
              </p>
    
              <Link to='/register'>
                <button>Learn More</button>
              </Link>
              
            </div>
          </div>
        </div>
      </div>

      <div className="actvity_wrap2">
        <div className="left2">
          <img src="image/christimasbig.jpg" alt="" />
        </div>
        <div className="right2">
          <div className="box2">
            <div className="top2">
              <img src="image/activity_christimassmall.jpg" alt="" />
            </div>
            <div className="bottom2">
              <h3>Christmas</h3>
              <div className="activity_text2">Activity Two</div>
              <p>
                During Christmas, we host a Shiba Inu gift exchange event. You
                can bring your Shiba Inu to play in the snow, decorate their own
                doghouse, and of course, take cute Christmas dog photos.
              </p>
            
                <Link to='/register'>
                  <button>Learn More</button>
                </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="actvity_wrap3">
        <div className="left3">
          <img src="image/activity_fliybig.jpg" alt="" />
        </div>
        <div className="right3">
          <div className="box3">
            <div className="top3">
              <img src="image/activity_fliysmall.jpg" alt="" />
            </div>
            <div className="bottom3">
              <h3>Flying Class</h3>
              <div className="activity_text3">Activity Three</div>
              <p>
                We have exclusive dog flight instructors who teach your Shiba
                Inu to become a certified flying Shiba captain, allowing your
                dog to experience the sensation of flight in their lifetime.
              </p>
                <Link to='/register'>
                  <button>Learn More</button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
