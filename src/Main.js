import React from 'react';
import ProfilPhoto from "./profile/ProfilPhoto";
import FullName from "./profile/FullName";
import Adress from "./profile/Adress";
import './style.css';
import './App.css';

function Main() {
    return (
        <React.Fragment>

        <div id='photo'>
        <ProfilPhoto/>
        </div>


        <div id="information">

        <FullName/>
        <Adress/>
        
        </div>

        </React.Fragment>
    

    );
}

export default Main;

