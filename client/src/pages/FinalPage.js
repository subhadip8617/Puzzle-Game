import React from "react";
import { Link } from "react-router-dom";

export const FinalPage = (props) => {
  return (
    <>
      <div className="outer-box" id="finalpage">
        {props.curUserEmail == "admin123@gmail.com" && (
          <div>Hello Admin, Go to the final leaderboard to inspect the users</div>
        )}
        {props.curUserEmail != "admin123@gmail.com" && (
          <div id="finalpagecongo">Congratulations!!!!</div>
        )}
        <Link id="leaderboardbtn" to="/leaderboard">
          GoToLeaderBoard
        </Link>
      </div>
    </>
  );
};
