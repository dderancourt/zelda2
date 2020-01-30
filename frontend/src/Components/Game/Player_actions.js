// this method is a dependency of getMovement  that performs all the collision tests to determine whether to allow or to prevent movement of the player
function canMove(x, y) {
  const topBorder = 0;
  const leftBorder = 0;
  const bottomBorder = 14;
  const rightBorder = 19;
  if (
    rightBorder >= x &&
    leftBorder <= x &&
    bottomBorder >= y &&
    topBorder <= y &&
    !this.state.mapNumber[y][x].includes("Z") &&
    (x !== this.state.NPC.x ||
      y !== this.state.NPC.y ||
      !this.state.NPC.isAlive ||
      this.state.mapNumber === tilesMap2)
  ) {
    return true;
  } else {
    return false;
  }
}

function makeMove(event) {}

export default { canMove, makeMove };
