<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid mainn">
  <router-link to="/">
    <a class="navbar-brand">meals</a>  
  </router-link>
  <div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse m-2" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <router-link to="/searchByName">
            <a class="nav-link" >search meal by name</a>        
        </router-link>
        </li>
        <li class="nav-item">
        <router-link to="/searchByLetter">
            <a class="nav-link" >search meal by letter</a>        
        </router-link>
        </li>
        <li class="nav-item">
        <router-link to="/searchBycategory">
            <a class="nav-link" >search meal by category</a>        
        </router-link>
        </li>

      </ul>
    </div>
  </div>
   
   
  </div>
</nav>
    </div>
</template>

<script >
import axios from 'axios';
import {ref , computed , onMounted} from 'vue'

export default {
   
      
    }
</script>

<style lang="scss">
// *{
//   text-align: center;
// }
.navbar{
    background-color: var(--maincolor);
    .navbar-brand{
        color: #ffffff;
        font-size: 35px;
    }
  .mainn{
    display: flex;
    align-items: center;
   text-align: center;
  }
}

</style>