<template>
    <div class="container">
<h2>search meal by name</h2> 
<div class="theInput">
    <input @keypress.enter="searchByName" type="text" v-model="searchName" placeholder="search for meals">
<button @click="searchByName" class="btn btn-warning">search</button>
<hr>
</div>  
    </div>

    <div v-if="searchName" >
    <div class="allboxes" v-for="meal in theMeal">
 <div class="box" v-for="theM in meal">
    <router-link :to="{name:'theMealbyid' , params:{id:theM.idMeal}}">
        <img :src="theM.strMealThumb" alt="">    
    </router-link>
    <div class="text">
    <h5>{{ theM.strMeal }}</h5>
      <p>{{ theM.strInstructions.substring(0,100) }}.....</p>
      <a :href="theM.strYoutube"  class="btn btn-warning" target="_blank">youtube</a>
    </div>
      
 </div>
 </div>
</div>
 <div v-else class="container data" >there's no data yet</div>  
 <div v-if="searchName">
    <div v-if="nofound" class="container data" >{{ nofound }}</div>      
 </div>   
</template>

<script>
import axios from 'axios';
import {ref , computed , onMounted} from 'vue';
export default {

    setup(){

        let searchName = ref(null);
        let theMeal = ref([]);
        
        let nofound = ref(null);

      
    const searchByName = async ()=>{
        let result = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName.value}`);
         console.log(theMeal.value);
         if(result.data.meals == null){
            nofound.value = `there's no data named ${searchName.value}`;
         } else{
            theMeal.value = result.data;
            nofound.value = '';
         }
    }
    // searchByName();
    return{searchName , searchByName , theMeal , nofound}
    }
}
</script>

<style lang="scss" scoped>
h2{
    color: var(--maincolor);
}
.theInput{
    input{
        width: 80%;
        padding: 10px;
        font-size: 20px;
        border: none;
        background-color: transparent;
        outline: none;
    }
}
.data{
    font-size: 30px;
    text-align: center;
    margin-top: 30px;
}

</style>