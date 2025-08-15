import React from 'react';
import { CampaignContext } from './Providers';

const Header: React.FC = () => {
    const {data:{img_url}} = React.useContext(CampaignContext);
    return (
        <header >
           <section className={`jumbotron text-center header__image`} style={{backgroundImage: `url(${img_url})` }}/>
        </header>
    );
};

export default Header;