import React from 'react';
import './profile.scss';

const Profile = ({prof_img, ...props}) => {
    return (
        <div className='profile'>
            <div className='profile__img'>
                <img src={prof_img} alt='' />
            </div>
            <div className='profile__info'>
                <p className='profile__info_name'>{props.prof_name}</p>
                <ul className='profile__info__item'>
                    <li>
                        <p className='profile__info_other'>
                            Gender: 
                        </p>
                        {props.prof_gen}
                    </li>
                    <li>
                        <p className='profile__info_other'>
                            Location: 
                        </p>
                        {props.prof_loc}
                    </li>
                    <li>
                        <p className='profile__info_other'>
                            Status:
                        </p>
                        {props.prof_stat}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Profile;