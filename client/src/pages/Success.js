import React from "react";

import Jumbotron from "../components/Jumbotron";


function Success() {

  return (
    <div>
      <Jumbotron>
        <h1>Purchase success!</h1>
        <h2>Thank you for your purchase with Car-Go!</h2>
        <h2>You will now be redirected to the home page</h2>
      </Jumbotron>
    </div>
  );
}

export default Success;
