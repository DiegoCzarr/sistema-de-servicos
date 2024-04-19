<template>
  <body>
    
      <div class="container">
      <div class="menu">
        <img v-bind:src="menu"/>
      </div>
      
      <div class="banner">
          <div class="ult">
          <h1>Ultilitários</h1>
        
        </div>

        <div class="usu">
            <h1> /Usuários</h1>
          </div>
        
        <div class="man">
          <h1>Manager</h1>
          </div>
      </div>
    </div>


    <div class="buscar">
        <img v-bind:src="buscar"/>
        <input type="text" id="txtBusca" placeholder="Nome e CPF"/>
    </div>
                 
    <div class="add">
      <router-link to="/usuarios-modal">
        <img v-b-modal.meu-modal v-bind:src="add"/>
      </router-link>
    
    </div>
  

    <div class="container2">
      <div class="block">
        <img v-bind:src="block"/>
      </div>
      <div class="people">
        <img v-bind:src="people"/>
      </div>
      <div class="paper">
        <img v-bind:src="paper"/>
      </div>
      <div class="costumer">
        <img v-bind:src="costumer"/>
      </div>
      <div class="clipboard">
        <img v-bind:src="clipboard"/>
      </div>
      <div class="settings">
        <img v-bind:src="settings"/>
      </div>
      <div class="logo">
        <img v-bind:src="logo"/>
      </div>
    </div>
    
    
  </body>
  </template>
  
  <script>

  export default {
    
    data() {
  
    return {
      menu: require("../images/menu.png"),
      block: require("../images/block.png"),
      people: require("../images/people.png"),
      paper: require("../images/paper.png"),
      costumer: require("../images/costumer.png"),
      clipboard: require("../images/clipboard.png"),
      settings: require("../images/settings.png"),
      logo: require("../images/Logo.png"),
      add: require("../images/add.png"),
      ghost: require("../images/ghost.png"),
      buscar: require("../images/buscar.png")
      
    }
  }
  }
  </script>
  
  
  <style scoped>
  
    @import '../app.scss';
  
    html body {
      margin: 0;
      padding: 0;
      font-family: "Mulish", sans-serif;
      font-optical-sizing: auto;
      font-weight: 800;
      font-style: normal;
      position: absolute;
     
    }
  
    .container {
      display: flex;
      background: rgba(0, 122, 214, 1);
      margin-top: -31px;
      margin-left: -10px;
      padding: 7px;
      height: 60px;
      width: 1337px;
  
      
  
    }
    
    .menu{
        
        align-content: center;
    }
    .container2 {
      display: flex;
      flex-direction: column;
      background: rgba(0, 145, 255, 1);
      width: 35px;
      height: 562px;
      margin-left: -10px;
      padding: 10px;
      margin-top: -85px ;
      position: absolute;
    }
  
    .container2 img {
      width: 18px;
      height: 18px;
      padding: 10px;
      cursor: pointer;
    
  
  
    }
    .menu img {
      width: 20px;
      height: 20px;
      margin-top: 20px;
      margin-left: 12px;
      cursor: pointer;
  
    }
  
    .banner {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 4px;
      font-size: 10px;
      margin-top: 5px;
      
    }
  
    .banner h1 {
      color: white;
      padding-left: 30px;
      margin-top: 20px;
      
      
       
    }
    
    .usu {
        margin-left: -25px;
        
    }
    .man {
      margin-left: 950px;
      cursor: pointer;
    }
  
    .usuarios {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px;
        width: 10px;
        height: 10px;
        
        
    }
    
    .buscar {
        font-size: 15px;
        margin-left: 370px;
        margin-top: 40px;
        color: rgba(51, 51, 51, 1);
        margin-left: 65px;

    }
    #txtBusca{
        float:left;
        background-color:transparent;
        padding-left:5px;
        font-size:17px;
        border:none;
        height:20px;
        width:400px;
}

    .buscar input {
        width: 375px;
        height: 20px;
        padding: 10px;
        gap: 5px;
        border-radius: 9px;
        color: rgba(161, 161, 161, 1);
        font-family: "Mulish", sans-serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;
        position: absolute;
        margin-top: 10px;


    }
    .buscar img{
        width: 30px;
        height: 30px;
        float:left;
        padding: 5px;
        margin-top: 10px;


    }
    
    
    .add {
        background: rgba(0, 119, 255, 1);
        margin-left: 530px;
        margin-top: 27px;
        border-radius: 3px;
        height: 35px;
        width: 35px;
        margin-top: 50px;

    }

    .add img {
        width: 14px;
        height: 14px;
        padding: 9px;
        margin-top: -1px;
        cursor: pointer;
    }
    .logo {
      margin-top: 260px;
      
    }
  
    .logo img{
      width: 40px;
      height: 40px;
      margin-left: -12px;
      
    }
      
    .add-user {
        justify-content: center;
        display: flex;
        margin-top: 150px;
        width: 100px;
    }

    .add-user img {
        cursor: pointer;
    }
    
    
  </style>
  
  