import React from 'react';

import './how-to-play.scss'

export default function HowToPlay() {
  return (
      <>
        <div className='how-to-play-container'>
            <h2>HOW TO PLAY PICK 2</h2>
            <div className='how-to-play'>
                <img alt="number one" src="https://www.palottery.state.pa.us/Custom/uploadedimages/games-assets/1.gif" />
                <p>Visit your PA Lottery retailer and pick up a PICK 2 playslip.</p>
            </div>
            <div className='how-to-play'>
                <img alt="number two" src="https://www.palottery.state.pa.us/Custom/uploadedimages/games-assets/2.gif" />
                <p>	Play up to five panels on your PICK 2 playslip. On each game panel, pick any two-digit number. Or, select the Quick Pick option to have your numbers randomly selected by the computer. <br/><a href='https://www.palottery.state.pa.us/Draw-Games/PICK-2/Sample-Playslip.aspx'>View Sample Playslip</a></p>
            </div>
            <div className='how-to-play'>
                <img alt="number three" src="https://www.palottery.state.pa.us/Custom/uploadedimages/games-assets/3.gif" />
                <p>	Pick your play type: Straight, Box, Straight/Box, Super Straight, Front Digit, Back Digit. (<a href='https://www.palottery.state.pa.us/Draw-Games/PICK-2/Prizes-Chances.aspx'>Learn more about PICK 2 play types here.</a>)</p>
            </div>
            <div className='how-to-play'>
                <img alt="number four" src="https://www.palottery.state.pa.us/Custom/uploadedimages/games-assets/4.gif" />
                <p>Choose the drawing(s) you wish to play. You can play day, evening, or both drawings.</p>
            </div>
            <div className='how-to-play'>
                <img alt="number five" src="https://www.palottery.state.pa.us/Custom/uploadedimages/games-assets/5.gif" />
                <p>	You may play PICK 2 for up to seven draws in advance.</p>
            </div>
            <div className='how-to-play'>
                <img alt="wild number" src="https://www.palottery.state.pa.us/PaLotteryWebSite/media/Misc/Logos/wildball_bullet.png" />
                <p>If desired, select the 'NEW' Wild Ball option. To learn more about how it works, click here.</p>
            </div>
            <div className='how-to-play'>
                <img alt="number six" src="https://www.palottery.state.pa.us/Custom/uploadedimages/games-assets/6.gif" />
                <p>Be sure to check your PICK 2 ticket to verify that the information is correct and legible. <br/><a href='https://www.palottery.state.pa.us/Draw-Games/PICK-2/Sample-Ticket.aspx'>View Sample Ticket</a></p>
            </div>
            <div className='how-to-play'>
                <img alt="number seven" src="https://www.palottery.state.pa.us/PaLotteryWebSite/media/Misc/Logos/7.gif" />
                <p>Look for PA Lottery results: You can check PICK 2 Lottery results by watching the <a href='https://www.palottery.state.pa.us/Draw-Games/Watch-Drawings.aspx#watch_daydrawing'>PICK 2 day drawing</a> the PA
                Lottery website daily after 1:35 p.m., watching the PICK 2 evening drawing nightly at 6:59
                p.m. on TV or <a href="https://www.palottery.state.pa.us/Draw-Games/Watch-Drawings.aspx#watch_eveningdrawing">streaming
                online</a>, checking our website and official mobile app, and subscribing to <a
                href="https://www.palottery.state.pa.us/About-PA-Lottery/Footer/Subscribe-to-RSS.aspx">Lottery RSS feeds</a>. You can
                also&nbsp;visit&nbsp;the <a href="https://www.palottery.state.pa.us/VIP-Players-Club.aspx">Lottery VIP Players Club</a> to sign
                up for emails and text messages to receive winning Lottery number alerts for PICK 2 and other
                <a href="https://www.palottery.state.pa.us/Draw-Games.aspx"> PA Lottery games</a>.</p>
            </div>
            <div className='how-to-play'>
                <p>
                    <strong>Note:</strong> Sales end for the Day drawing at 1:05 p.m. and for the Evening drawing at 6:57 p.m. daily.
                </p>
            </div>
            
        </div>
        <p className="how-to-claim-your-prize">
            <a href="/About-PA-Lottery/How-to-Claim-Your-Prize.aspx"> <br/>How to Claim Your Prize</a>
        </p>
    </>
  );
}