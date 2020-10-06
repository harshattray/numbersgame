import React from "react";
import { Divider, Button } from "antd";
import PropTypes from "prop-types";
import "./style.scss";

function MainScreen(props) {
  return (
    <div className="main-screen">
      <h1 className="game-name">Scoober Team</h1>
      <Divider className="main-screen-divider" />
      <Button onClick={() => props.history.push("/singleplayer")}>
        Play With Computer
      </Button>
      <Button onClick={() => props.history.push("/multiplayer")}>
        Play With a Player
      </Button>
    </div>
  );
}

MainScreen.propTypes = {
  history: PropTypes.object
};

export default MainScreen;
