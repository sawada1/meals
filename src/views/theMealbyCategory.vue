<template>
    <div>
    <div class="allboxes" v-for="meal in theMeal">
 <div class="box" v-for="theM in meal">
 <router-link :to="{name:'theMealbyid' , params:{id:theM.idMeal}}">
    <img :src="theM.strMealThumb" alt=""> 
 </router-link>
      <h5>{{ theM.strMeal }}</h5>
 </div>
 </div>  
 <!-- <h1>{{$route.params.name}}</h1> -->
    </div>
</template>

<script>
import axios from 'axios';
import {ref , computed ,  onMounted} from 'vue';
import {useRoute} from 'vue-router'
export default {
    props:['name'],
    data(){
        return{
            thename: this.$route.params.name,
            theMeal: [],

        }
    },
    methods:{
      check: async ()=>{
    //    let result = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.thename}`);
    //    console.log('dsds');
      },
    },
  async mounted() {
       let result = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.thename}`);        
        console.log(result.data);
        this.theMeal = result.data;
      },

}
</script>

<style lang="scss">


</style>