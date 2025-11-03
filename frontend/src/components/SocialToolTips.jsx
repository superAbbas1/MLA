import React from "react";
import './SocialToolTips.css';
import logo from '../pages/header/images/logo-black.png';
import SocialToolTip from './SocialToolTip';

const SocialToolTips = () => {
    const socialMediaData = [
        {
            platform: 'facebook',
            profileUrl: 'https://www.facebook.com/profile.php?id=61562389370965',
            tagline: 'Expert Insights'
        },
        {
            platform: 'linkedin',
            profileUrl: 'https://www.linkedin.com/company/mansoor-law-associates-4387792',
            tagline: 'Reliable Support'
        },
        {
            platform: 'instagram',
            profileUrl: 'https://www.instagram.com/mansoorlawassociates/',
            tagline: 'Proven Success'
        }
    ];

    return (
        <section className="social-tooltips-container">
            {socialMediaData.map((social, index) => (
                <SocialToolTip
                    key={index}
                    platform={social.platform}
                    profileUrl={social.profileUrl}
                    tagline={social.tagline}
                    logo={logo}
                />
            ))}
        </section>
    );
}

export default SocialToolTips;