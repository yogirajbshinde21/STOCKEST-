import React from 'react';

function Leaderboard () {
    return ( 
            <div className="container p-3">
              <div className="row p-5">
                <div className="col-6 p-5">
                  <h1 style={{color:"blue"}}> LEADERBOARD </h1>
                  <h2> AND</h2>
                  <h1 style={{color:"red"}}>COMPETITIONS  </h1>
                  <br></br>
                <h5>
                Gamified leaderboards that rank users based on points earned through successful trading strategies, encouraging healthy competition.
                </h5>
                <p>
                The app features gamified leaderboards that rank users based on the points they earn through successful trading strategies. This fosters a sense of healthy competition among users, encouraging them to refine their trading techniques and strive for higher rankings. By comparing their performance with others, users can gauge their success and learn from top traders on the platform.
                </p>
                </div>
                <div className="col-6 p-5">
                  <img src="./media/leaderboard.png" style={{ width: "100%" }} />
                  
                </div>
              </div>
            </div>
          );
        }
        

export default Leaderboard ;