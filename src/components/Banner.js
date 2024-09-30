import React from "react";
import { FormattedMessage } from "react-intl";

const Banner = () => {

    return (
        <div>
            <h1>
                <FormattedMessage id="BannerTitle" />
            </h1>
            <img src="./public/banner.png" alt="Robot Lovers" />
            
        </div>
    )
}

export default Banner;