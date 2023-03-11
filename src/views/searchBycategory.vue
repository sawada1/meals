<template>
    <div class="">
    <h2>ingredients</h2>
        <input type="text" placeholder="search for ingreadints">
        <div class="categoris" >
   
                <div class="cate" v-for="meal in theMeal.categories">
            <router-link :to="{name:'theMealbyCategory', params:{name: meal.strCategory}}">
        <h3>{{ meal.strCategory }}</h3>        
            </router-link>
          <!-- <p>{{ meal.idCategory }}</p> -->
          </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import {ref , computed , onMounted} from 'vue';
export default {
    setup(){
        let theMeal = ref([]);
         let searchword = ref(null);

        //  onMounted(async ()=>{
        //     let result = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        //     theMeal.value = result.data;
        //     console.log(result.data);
        //     console.log(theMeal.value);
        //  });

         const searchBycate = async ()=>{
          let result = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);
          theMeal.value = result.data;
            console.log(result.data);
            console.log(theMeal.value.categories);
         }
         searchBycate();

        return{theMeal}
    }

}

</script>

<style lang="scss" scoped>

h2{
    color: var(--maincolor);
}
input{
        width: 90%;
        padding: 10px;
        font-size: 18px;
        border: none;
    }
    .categoris{
        margin-top: 30px;
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(2 , 1fr);
         width: 90%;
         margin-left: 5%;
         margin-right: 5%;
        .cate{
            background-color: #fff;
            padding: 10px;
            border-radius: 10px;
            box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.467);
            cursor: pointer;
            a{
                color: #333;
            }
        }
    }


    @media(max-width:440px){
        .categoris{
            grid-template-columns: repeat(1 ,1fr);
        }
    }

</style>