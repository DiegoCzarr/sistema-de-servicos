<template>
  <body>
  
  <section class="Login">

      <div class="image">

          <img v-bind:src="LoginImage"/>

      </div>
   
  <div class="Login-box">
          <div class="Login-Title">
            
              <h1>
                  Login
              </h1>
            
          </div>

      <div class="Credentials">

      <label>
          <span> Email </span>
          <input type="email" name="email">
      </label>

      <label>
          <span> Senha </span>
          <input type="password" name="password">
      </label>
      <div class="submit">
      <a href="#">Esqueceu a senha?</a>

      <router-link to="/about">
        <button class="submit" type="button">Entrar</button>
      </router-link>
      
      </div>


      </div>
      
      
  </div>

  <div class="image2">

      <img v-bind:src="LoginImage2"/>

  </div>
  


</section>
  
  
  
</body>
</template>

<script>

export default {
  name: 'Login',
  data() {
    
      return {
          LoginImage: require("../images/Login.png"),
          LoginImage2: require("../images/image2.png")
      }
  }
 }
</script>

<style scoped>

  @import '../app.scss';

  * {
   margin: 0px;
   padding: 0px;
   font-family: "Mulish", sans-serif;
   font-optical-sizing: auto;
   font-weight: 800;
   font-style: normal;
   justify-content: center;
   box-sizing: border-box;
   margin-bottom: -3px;
   margin-block-end: -2px;

  }


  
  .image {
      background: linear-gradient(180deg, rgba(33, 150, 246, 0.8) 0%, 
      rgba(0, 229, 253, 0.8) 100%);
      margin-top: -10px;
      
  }
  
  .image img {
      width: 43rem;
      height: 39.7rem;
      opacity: 20%;
      display: flex;

  }
  h1 {
      font-size: 32px;
      padding-bottom: 30px;
      text-align: center;
      
      
  }
  .Login{
      display: flex;
  }

  .Login-box {

      margin: 150px;
  
  }

  .Credentials label {
      top: 0;
      left: 0;
      font-size: 12px;
      width: 150px;
      height: 100%;
      
           
  }

  .Credentials label input {
      width: 375px;
      height: 35px;
      border-radius: 4px;
      border: 1px solid rgba(233, 238, 242, 1);
      margin-bottom: 35px;
     
      
  }


  .image2 img{
      display: flex;
      position: absolute;
      display: column;
      width: 609px;
      height: 147px;
      top: 486px;
      left: 44.1rem;
      display: flex;
      opacity: none;
      
      
  }

  a{
      text-decoration: none;
      color: black;
      display: flex;
      justify-content: center;
      margin-top: 10px;

      

  }

  a:hover {
      opacity: 0.8;
      transition: 0.4s;
  }

  .submit button {
      width: 149px;
      height: 48px;
      padding: 15px;
      border-radius: 4px;
      opacity: 0px;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      border: none;
      justify-content: center;
      text-align: center;
      

  }

  button:hover {
      transition: 0.3s;
      opacity: 0.6;
      cursor: pointer;
  }

  .submit {
      display: flex;
      justify-content: space-between;
      justify-items: center;
      
  }
</style>