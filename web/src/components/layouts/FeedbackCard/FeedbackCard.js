import React from 'react';

import "./FeedbackCard.scss";
import UserIcon from '../UserIcon';
import StarIcon from '../../icons/StarIcon/StarIcon';

import _ from "lodash";

const FeedbackCard = ({ id, rate = 5, text }) => {



    return (
        <div className="feedback-card">
          <UserIcon className="feedback-card-user-icon" fullName="R o"/>
          <div className="feedback-card-rate">
              {
                  _.times(5, n => 
                    <StarIcon 
                        key={n}
                        className="feedback-card-rate-star-icon"
                        empty={n >= rate} 
                        semi={n < rate && n + 1 > rate} />
                    )
              }
          </div>
          <span className="feedback-card-text">{ text }</span>
        </div>
    )
};

export default FeedbackCard;