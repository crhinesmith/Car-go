import "../assets/admin.css";
import React from 'react'
import { Link } from "react-router-dom";
import { NEW_CAR } from "../utils/mutations";

const Admin = () => {
  return (
    <>
    <Link to="/Home">
      <button>
        Home
      </button>
    </Link>

      <div class="form-group">
        <center>
          <h1>
            <u className="thick">Adding a Car to your Account</u>
          </h1>
        </center>

        <div class="grid">
          <div class="col-1-3">
            <div class="controls"></div>
          </div>
        </div>
        <div class="grid">
          <div class="col-1-3">
            <div class="controls">
              <input
                type="text"
                id="carmake"
                class="floatLabel"
                name="carmake"
              ></input>
              <label for="carmake">Make</label>
            </div>
          </div>

          <div class="col-1-3">
            <div class="controls">
              <input
                type="text"
                id="model"
                class="floatLabel"
                name="carmodel"
              ></input>
              <label for="carmodel">Model</label>
            </div>
          </div>
        </div>

        <div class="grid">
          <div class="col-1-4 col-1-4-sm">
            <div class="controls">
              <input
                type="text"
                id="caryear"
                class="floatLabel"
                name="caryear"
              ></input>
              <label for="caryear" class="caryear">
               Year
              </label>
            </div>
          </div>
          <div class="col-1-4 col-1-4-sm">
            <div class="controls">
              <input
                type="text"
                id="carprice"
                class="floatLabel"
                name="carprice"
              ></input>
              <label for="carprice">Price</label>
            </div>
            <button type="submit" value="Submit" class="col-1-4">
              Submit Car
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Admin;
