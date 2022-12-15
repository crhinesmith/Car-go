import React from "react";

export function Search() {
  function handleClick() {
    try {
      // Do something that could throw
      console.log("search clicked");
    } catch (error) {
      this.setState({ error });
    }
  }

  return (
    <div className="search">
      {/* <input placeholder="Enter name" />
      <button>Log value</button> */}
    </div>
  );
}
