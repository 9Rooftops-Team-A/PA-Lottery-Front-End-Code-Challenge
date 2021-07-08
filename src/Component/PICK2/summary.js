import React from 'react';
import './summary.scss';

export default function Summary() {
  return (
    <div className='summary-container'>

      <img src="https://www.palottery.state.pa.us/PaLotteryWebSite/media/Games-Section/Banners/Sunny-Money_SCD_800x110-ActiveGames.jpg?ext=.jpg" alt="Sunny money"/>

      <div>
        <div className='summary-section-one'>
          <img src="https://www.palottery.state.pa.us/getattachment/Games/PICK-2/pick-2.png.aspx" alt="pick two logo"/>
          
          <div>
            <p className='pick-two-intro'>
              Have fun every day with PICK 2, one of the PA Lottery games with great prizes and chances of winning! You can try to match the winning Lottery numbers twice a day by playing PICK 2 day and PICK 2 evening, and it’s really easy. Now, play PICK 2 with <a href='https://www.palottery.state.pa.us/Draw-Games/Wild-Ball.aspx' rel="noreferrer">Wild Ball</a>.
            </p>
            
            <p>
              <a className='prizes-chances' href='https://www.palottery.state.pa.us/Draw-Games/PICK-4/Prizes-Chances.aspx' rel="noreferrer">
                Prizes & Chances
              </a> 
              <a className='watch-draws' href='https://www.palottery.state.pa.us/Draw-Games/Watch-Drawings.aspx' rel="noreferrer">
                Watch Drawings
              </a> 
              <a className='winnings' href='https://www.palottery.state.pa.us/Draw-Games/Winning-Numbers-History.aspx' rel="noreferrer">
                Winning Numbers History
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
