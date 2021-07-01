import React from "react";
import Sketch from "react-p5";
import Peddle from "../Components/Peddle/Peddle";
import Ball from "../Components/Ball/Ball";
import { setup } from "../Utils/Setup";

export default function Pong() {
  let yLeft = 200;
  let yRight = 200;
  // let vyRight = 1;
  let BallPosX = 50;
  let BallPosY = 275;
  let BallMovementY = 0;
  let BallMovementX = 0;
  let scoreLeft = 0;
  let serve = false;
  let scoreRight = 0;
  let winner = "None";

  const keyPressed = (e) => {
    if (e.key === "ArrowUp") {
      if (yRight === 0) {
        yRight -= 0;
      } else {
        yRight -= 50;
      }
    } else if (e.key === "ArrowDown") {
      if (yRight >= 350) {
        yRight += 0;
      } else {
        yRight += 50;
      }
    } else if (e.key === "w") {
      if (yLeft === 0) {
        yLeft -= 0;
      } else {
        yLeft -= 50;
      }
    } else if (e.key === "s") {
      if (yLeft >= 350) {
        yLeft -= 0;
      } else {
        yLeft += 50;
      }
    } else if (e.key === "Enter") {
      serve = true;
      // if (BallPosX === 760) {
      //   BallMovementX = -1;
      //   BallMovementY = -1;
      // } else if (BallPosX === 50) {
      //   BallMovementX = 1;
      //   BallMovementY = 1;
      // }
      // collision();
      BallPosY += BallMovementY * 3;
      BallPosX += BallMovementX * 3;
    }
  };

  // const cpuMove = () => {
  //   if (yRight <= 0) {
  //     vyRight = 1;
  //   } else if (yRight >= 350) {
  //     vyRight = -1;
  //   }
  //   yRight += vyRight * 10;
  // };

  const ballMove = () => {
    if (BallPosY <= 0) {
      BallMovementY = 1;
    } else if (BallPosY >= 500) {
      BallMovementY = -1;
    } else if (BallPosX <= 0) {
      BallMovementX = 1;
    }
    // else if (BallPosX >= 760) {
    //   BallMovementX = -1;
    // }
    BallPosY += BallMovementY * 3;
    BallPosX += BallMovementX * 3;
  };

  const collision = () => {
    if (serve === true) {
      if (BallPosX >= 750 && BallPosY <= yRight + 150 && BallPosY >= yRight - 150) {
        BallMovementX = -1;
        if (BallMovementY === 0) {
          BallMovementY = 1;
        } else {
          BallMovementY = BallMovementY;
        }
      } else if (BallPosX <= 50 && BallPosY <= yLeft + 150 && BallPosY >= yLeft - 150) {
        BallMovementX = 1;
        if (BallMovementY === 0) {
          BallMovementY = 1;
        } else {
          BallMovementY = BallMovementY;
        }
      }
    }
  };
  const checkScore = () => {
    if (scoreLeft === 5 && winner === "None") {
      winner = "Player 1";
      alert(`Winner: ${winner}`);
      scoreLeft = 0;
      scoreRight = 0;
      winner = "None";
    } else if (scoreRight === 5 && winner === "None") {
      winner = "Player 2";
      alert(`Winner: ${winner}`);
      scoreLeft = 0;
      scoreRight = 0;
      winner = "None";
    }
  };
  const ballRePosition = () => {
    if (BallPosX > 760) {
      serve = false;
      BallPosX = 50;
      BallPosY = 275;
      BallMovementX = 0;
      BallMovementY = 0;
      yLeft = 200;
      yRight = 200;
      scoreLeft++;
    } else if (BallPosX <= 0) {
      serve = false;
      BallPosX = 750;
      BallPosY = 275;
      BallMovementX = 0;
      BallMovementY = 0;
      yLeft = 200;
      yRight = 200;
      scoreRight++;
    }
  };
  const draw = (p5) => {
    const LeftPeddle = new Peddle(20, yLeft);
    const RightPeddle = new Peddle(760, yRight);
    const MainBall = new Ball(BallPosX, BallPosY);

    p5.background(0);
    LeftPeddle.show(p5);
    RightPeddle.show(p5);
    MainBall.show(p5);

    collision();
    ballMove();
    // cpuMove();
    ballRePosition();

    //score
    p5.textFont("Visitor", 36);
    p5.fill(255, 255, 255);
    p5.textSize(40);
    p5.text(scoreRight, 700, 50);
    p5.text(scoreLeft, 50, 50);

    //check winner
    checkScore();

    //winner
  };

  return <Sketch keyPressed={keyPressed} setup={setup} draw={draw} />;
}
