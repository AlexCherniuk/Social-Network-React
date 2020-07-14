import React from 'react';
import pa from './Music.module.css';

const Music = (props) => {
    return (
        <div className='.palm'>

            <ul> <a target="_blank"  href='https://onlineradiobox.com/es/Tenerife?cs=es.megalatina&played=1'>Music</a>
                  <li><a  target="_blank" href='http://onlineradiobox.com/es/rumberos/player/?cs=es.rumberos&played=1'>Rumberos FM 97.1 </a>
                </li>
                <li>
                    <a target="_blank"  href='https://onlineradiobox.com/es/megalatina/?cs=es.megalatina&played=1'>Échale Salsita </a>
                </li>
                <li>
                    <a target="_blank"  href='http://onlineradiobox.com/es/radio6/player/?cs=es.radio6&played=1'>Radio 6 Tenerife </a>
                </li>
            </ul>
        </div>
    )
}

export default Music; 