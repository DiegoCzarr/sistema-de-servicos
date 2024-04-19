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
      
      <div class="man">
        <h1>Manager</h1>
        </div>
    </div>
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
  <div class="ultilitarios">
    
    <div class="Config">
      
      <img v-bind:src="config"/>
      <p>Configuração</p>

    </div>
  
    <div class="user">
     <router-link to="/usuarios">
        <img v-bind:src="user"/>
     </router-link>
        <p>Usuários</p>
    
      </div>
    

    <div class="permitions">
      
      <img v-bind:src="permitions"/>
      <p>Permissões</p>

    </div>

    <div class="cancel">
      
      <img v-bind:src="cancel"/>
      <p>Motivo de cancelamento</p>


    </div>

    <div class="logs">
      
      <img v-bind:src="logs"/>
      <p>Logs</p>


    </div>

    <div class="segments">
      
      <img v-bind:src="segments"/>
      <p>Segmentos</p>

    </div>

    <div class="versions">
      
      <img v-bind:src="versions"/>
      <p>Versões</p>


    </div>

    <div class="calendar">
      
      <img v-bind:src="calendar"/>
      <p>Feriados</p>


    </div>
    <div class="last">
        <div class="report">
      
      <img v-bind:src="report"/>
      <p>Laudos</p>


    </div>
      
    

    <div class="message">
      
      <img v-bind:src="message"/>
      <p>Mensagens pré-definidas</p>


    </div>
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
    config: require("../images/config.png"),
    user: require("../images/user.png"),
    permitions: require("../images/permitions.png"),
    cancel: require("../images/cancel.png"),
    logs: require("../images/logs.png"),
    segments: require("../images/segments.png"),
    versions: require("../images/versions.png"),
    calendar: require("../images/calendar.png"),
    report: require("../images/report.png"),
    message: require("../images/message.png")
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

  .man {
    margin-left: 1050px;
    cursor: pointer;
  }

  .settings {
    background: rgba(0, 122, 214, 1);
    border-radius: 300px;
    height: 40px;
    width: 40px;
  }

  .settings img {
    width: 20px;
    height: 20px;
  }

  .logo {
    margin-top: 260px;
    
  }

  .logo img{
    width: 40px;
    height: 40px;
    margin-left: -12px;
    
  }
    

  .ultilitarios {
    font-family: "Mulish", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin-top: -620px;
    padding: 100px;
    font-size: 13px;
    text-align: center;
    
    
 
  }

  .ultilitarios div {
    background: rgba(0, 119, 255, 1);
    width: 105px;
    height: 95px;
    padding: 8px 12px 8px 12px;
    border-radius: 6px;
    margin: 5px;
    cursor: pointer;
    

  }

  .ultilitarios p {
      margin-top: 5px;
          
  }
  
  .config img {
    width: 50.53px;
    height: 53.37px;


  }
  

  .clipboard img {
    width: 25px;
    height: 25px;
    margin-left: -4px;
  }

 .last {
    display: flex;
    justify-content: center;
    align-items: center;
    
 }


 div .last {
  width: 0px;
  height: 0px;
  padding: 0px;
 }
 .last div {
  margin-top: 240px;
  
 }

 .last .report {
  
  margin-left: -1950px
 
 }
 
 
 
</style>

