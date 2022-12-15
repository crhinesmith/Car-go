const Admin = () => {
    return (
    <>
<div class="form-group">
    <center><h1><u class="thick">Adding a Car to your Account</u></h1></center>
    <br />
    <br />
    <br />
    <h2 class="heading">Owner Details</h2>
    <div class="controls">
      <input type="text" id="name" class="floatLabel" name="name"></input>
      <label for="name">Name</label>
    </div>
    <div class="controls">
      <input type="text" id="email" class="floatLabel" name="email"></input>
      <label for="email">Email</label>
    </div>       
    <div class="controls">
      <input type="tel" id="phone" class="floatLabel" name="phone"></input>
      <label for="phone">Phone</label>
    </div>
      <div class="grid">
        <div class="col-2-3">
          <div class="controls">
           <input type="text" id="street" class="floatLabel" name="street"></input>
           <label for="street">Street</label>
          </div>          
        </div>
        <div class="col-1-3">
          <div class="controls">
            <input type="number" id="street-number" class="floatLabel" name="street-number"></input>
            <label for="street-number">House No.</label>
          </div>         
        </div>
      </div>
      <div class="grid">
        <div class="col-2-3">
          <div class="controls">
            <input type="text" id="city" class="floatLabel" name="city"></input>
            <label for="city">City</label>
          </div>         
        </div>
        <div class="col-1-3">
          <div class="controls">
            <input type="text" id="post-code" class="floatLabel" name="post-code"></input>
            <label for="post-code">Post Code</label>
          </div>         
        </div>
      </div>
      <div class="controls">
        <input type="text" id="country" class="floatLabel" name="country"></input>
        <label for="country">Country</label>
      </div>
  </div>
  
  <div class="form-group">
    <h2 class="heading">Car Details</h2>
    
     <div class="grid"> 
       <div class="col-1-3">
   <div class="controls">
        <input type="text" id="regno" class="floatLabel" name="regno"></input>
        <label for="regno">Reg. Number</label>
   </div>
</div>
       <button type="submit" value="Search" class="col-1-4" id="btnReg">Search for Reg. No.</button>
    </div> 
    <div class="grid"> 
       <div class="col-1-3">
   <div class="controls">
        <input type="text" id="carmodel" class="floatLabel" name="carmodel"/>
        <label for="carmodel">Car Model</label>
   </div>
</div>       
       
       <div class="col-1-3">
   <div class="controls">
        <input type="number" id="something" class="floatLabel" name="something"/>
        <label for="something">Something</label>
   </div>
</div>
    </div>
    
    {/* <div class="grid">
    <div class="col-1-4 col-1-4-sm">
      <div class="controls">
        <input type="date" id="regyear" class="floatLabel" name="regyear" value=""/>
        <label for="regyear" class="label-date"><i class="fa fa-calendar"></i>  Reg. Year</label>
      </div>      
    </div>
    <div class="col-1-4 col-1-4-sm">
      <div class="controls">
        <input type="date" id="modelyear" class="floatLabel" name="modelyear"/>
        <label for="modelyear" class="label-date"><i class="fa fa-calendar"></i>  Model Year</label>
      </div>      
    </div> 
    </div> */}
     
     </div>

      <div class="grid">
        <p class="info-text">Any other information we should know about? Let us know below:</p>
        <br/>
        <div class="controls">
          <textarea name="comments" class="floatLabel" id="comments"></textarea>
          <label for="comments">Comments</label>
          </div>
            <button type="submit" value="Submit" class="col-1-4">Submit</button>
      </div>  
</>
	)
}
export default Admin;