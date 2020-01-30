function canMove(x, y, mapArray) {
  const topBorder = 0;
  const leftBorder = 0;
  const bottomBorder = 14;
  const rightBorder = 19;
  if (
    rightBorder >= x &&
    leftBorder <= x &&
    bottomBorder >= y &&
    topBorder <= y &&
    !mapArray[y][x].includes("Z") //&&
    // (x !== this.state.NPC.x ||
    //   y !== this.state.NPC.y ||
    //   !this.state.NPC.isAlive ||
    //   this.state.mapNumber === tilesMap2)
  ) {
    return true;
  } else {
    return false;
  }
}

function makeMove(event, x, y) {
  let newPositionX = x;
  let newPositionY = y;
  let ActualX = x;
  let ActualY = y;
  let newDirection;
  let newKey = event.key;
  switch (newKey) {
    case "RIGHT":
      return "RIGHT";
    default:
      return;
  }
}

export { canMove, makeMove };
