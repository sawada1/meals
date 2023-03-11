<template>
  <div>

    <h2>random meals</h2>
    <div class="allboxes">
     <div class="box"  v-for="meal in theMeal">
     <router-link :to="{name:'theMealbyid' , params:{id: meal.meals[0].idMeal}}">
      <img :src="meal.meals[0].strMealThumb" alt="">     
     </router-link>
      <h5>{{ meal.meals[0].strMeal }}</h5>
      <p>{{ meal.meals[0].strInstructions.substring(0,100)}}....</p>
      <a :href="meal.meals[0].strYoutube"  class="btn btn-warning" target="_blank">youtube</a>
     </div>
    </div>
    <span class="error" >{{ errorMessage }}</span>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import navbar from '@/components/navbar.vue'
import axios from 'axios'
import {ref , computed , onMounted} from 'vue'
import {useStore} from 'vuex'

export default {
  name: 'HomeView',
  components:{
    navbar,
  },
 setup(){
  let theMeal = ref([]);
  // let searchName = ref(null);

    let errorMessage = ref(null);
  onMounted( async()=>{
    console.log('mounted');

    for(let i = 0; i<10; i++){
      let result = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
      console.log(result);
      if (result.status == 200) {
        theMeal.value.push(result.data);
        errorMessage.value = ` `
        
      } else{
        console.log(result);
        errorMessage.value = `error there's somthing wrong in api`;
        break;
      }
    }
    console.log(theMeal.value);
  })





  return{theMeal , errorMessage}
 }
}
</script>



<style lang="scss">
body{
  overflow-x: hidden;
}
  .allboxes{
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(3 , 1fr);
      width: 95%;
      margin: 10px 2%;
    .box{
      transition: 0.5s;
      background-color: #fff;
      margin: 20px;
      cursor: pointer;
      padding: 20px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      box-shadow: var(--main-shadow);
      &:hover{
        transform: translateY(-20px);
      }
      img{
        width: 100%;
        object-fit: contain;
      }
    }
  }

  @media (max-width:950px){
  .allboxes{
    grid-template-columns: repeat(2 , 1fr);
  }
  }
  @media (max-width:750px){
  .allboxes{
    grid-template-columns: repeat(1 , 1fr);
  }
  }
  h2{
    margin-top: 20px;
    color: var(--maincolor);
    font-size: 35px;
  }
</style>
