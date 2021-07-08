import React from 'react';
import { Icon, Label } from "semantic-ui-react";

import './winning-numbers.scss'


export default function WinningNumbers() {
  return (
    <>
        <div className='winning-numbers-container'>
            <div className='winning-numbers-inner-container'>
                <h2>DAY</h2>
                <div className='winning-numbers-day'>
                    <p>June 28th, 2021</p>
                    <p>PAYOUT <Icon name='angle double right' class='payout-icon'/></p>
                </div>

                <div className='winning-number-labels'>
                    <span>
                        <Label circular color='white' size='huge'>
                            8
                        </Label>
                        <Label circular color='white' size='huge'>
                            7
                        </Label>
                    </span>
                    <img className='wild-number' src='https://www.palottery.state.pa.us/App_Themes/PALotteryAll/images/wild-ball-indicator-small.png' alt='wild number' />
                    <Label circular color='blue' size='huge'>
                        2
                    </Label>
                </div>
            </div>

            <div className='winning-numbers-inner-container'>
                <h2>EVENING</h2>
                <div className='winning-numbers-day'>
                    <p>June 28th, 2021</p>
                    <p>PAYOUT <Icon name='angle double right' class='payout-icon'/></p>
                </div>

                <div className='winning-number-labels'>
                    <Label circular color='white' size='huge'>
                        3
                    </Label>
                    <Label circular color='white' size='huge'>
                        9
                    </Label>
                    <img className='wild-number' src='https://www.palottery.state.pa.us/App_Themes/PALotteryAll/images/wild-ball-indicator-small.png' alt='wild number' />
                    <Label className='last-winning-number' circular color='blue' size='huge'>
                        6
                    </Label>
                </div>
            </div>
        </div>

        <div className='winning-numbers-information'>
            <div className='where-to-watch'>
                <h2>Where to Watch</h2>
                <p>
                    PICK 2 day drawing can be <a href='https://www.palottery.state.pa.us/Draw-Games/Watch-Drawings.aspx#watch_daydrawing'>viewed on the PA Lottery website</a> daily after 1:35 p.m.
                </p>

                <p>
                    PICK 2 evening is drawn during the nightly drawing show at 6:59 p.m. Watch for the evening drawing on TV, streaming online or check PA Lottery drawing results on your local TV station:
                </p>

                <ul>
                    <li>Erie: <a href='http://yourerie.com/'>WJET Ch. 24</a></li>
                    <li>Harrisburg/Lancaster/York: <a href='http://www.wgal.com/'>WGAL Ch. 8</a></li>
                    <li>Johnstown/Altoona/State College: <a href='http://wearecentralpa.com/'>WTAJ Ch. 10</a></li>
                    <li>Philadelphia: <a href='http://www.myfoxphilly.com/'>WTXF Ch. 29</a></li>
                    <li>Pittsburgh: <a href='http://www.wpxi.com/'>WPXI Ch. 11</a></li>
                    <li>Wilkes-Barre/Scranton: <a href='http://wnep.com/'>WNEP Ch. 16</a></li>
                </ul>
                <p>   
                    View drawing times for all games: <a href='https://www.palottery.state.pa.us/Draw-Games/Drawing-Chart-Desktop.aspx'>PA Lottery Drawing Schedule</a>
                </p>
            </div>
            <div className='how-to-claim'>
                <h2>How to Claim</h2>
                <p>
                    After winning the lottery the first step is completing the back of your ticket, including your name, address, phone number and signature. Remember, each lottery ticket is a bearer document, meaning it is legally owned by whomever possesses it, at least until it is signed.
                </p>

                <a href='https://www.palottery.state.pa.us/About-PA-Lottery/How-to-Claim-Your-Prize.aspx'>
                    Read More
                </a>
            </div>
        </div>
    </>
  );
}
