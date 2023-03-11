<template>
    <div class="container themeal ">
        <h1>{{ theMeal.strMeal }}</h1>
        <img class="container" :src="theMeal.strMealThumb" alt="">
        <div class="container cate">
        <h5>category: <span>{{ theMeal.strCategory }}</span></h5>
        <h5>area: <span>{{ theMeal.strArea }}</span></h5>
        <h5>tags: <span>{{ theMeal.strTags }}</span></h5>
        </div>
        <p>{{  theMeal.strInstructions }}</p>
        <a :href="theMeal.strYoutube" class="btn btn-warning" target="_blank">youtube</a>
    </div>
</template>

<script>
import {ref , onMounted} from 'vue'
import axios from 'axios'
export default {
    props:['id'],
    setup(props){
        let theMeal = ref([]);

        const getTheMeal = async () =>{
            let result = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.id}`);
            console.log(result.data);
            theMeal.value = result.data.meals[0];
        }
        getTheMeal();
        return{theMeal}
    }
}

</script>

<style lang="scss" scoped>

.themeal{
    margin-top: 50px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    .cate{
        display: flex;
        // align-items: center;
        // gap: 50px;
        width: 100%;
        justify-content: space-between;
        padding: 30px;
    }
    p{
        line-height: 35px;
        font-size: 20px;
    }
}

</style>