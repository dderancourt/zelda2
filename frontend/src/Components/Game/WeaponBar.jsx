import React from "react";

export default function WeaponBar() {
  return (
    <div id="weaponSlot">
      <div>
        <p>E</p>
        <p>W</p>
        <p>C</p>
      </div>
      <div>
        <div
          style={{
            backgroundImage: this.props.haveSword
              ? 'url("/items/normalSword.png")'
              : ""
          }}
        ></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
