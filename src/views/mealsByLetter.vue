<template>
    <div class="">
        <h2>meals by letter</h2>
        <div class="theletters">
          <span  @click="getmealByLetter(a)">A</span>
          <span @click="getmealByLetter(b)">B</span>
          <span @click="getmealByLetter(c)">C</span>
          <span @click="getmealByLetter(d)">D</span>
          <span @click="getmealByLetter(e)">E</span>
          <span @click="getmealByLetter(f)">F</span>
          <span @click="getmealByLetter(g)">G</span>
          <span @click="getmealByLetter(h)">H</span>
          <span @click="getmealByLetter(i)">I</span>
          <span @click="getmealByLetter(j)">J</span>
          <span @click="getmealByLetter(k)">K</span>
          <span @click="getmealByLetter(l)">L</span>
          <span @click="getmealByLetter(m)">M</span>
          <span @click="getmealByLetter(n)">N</span>
          <span @click="getmealByLetter(o)">O</span>
          <span @click="getmealByLetter(p)">P</span>
          <span @click="getmealByLetter(q)">Q</span>
          <span @click="getmealByLetter(r)">R</span>
          <span @click="getmealByLetter(s)">S</span>
          <span @click="getmealByLetter(t)">T</span>
          <span @click="getmealByLetter(u)">U</span>
          <span @click="getmealByLetter(v)">V</span>
          <span @click="getmealByLetter(w)">W</span>
          <span @click="getmealByLetter(x)">X</span>
          <span @click="getmealByLetter(y)">Y</span>
          <span @click="getmealByLetter(z)">Z</span>
        </div>
    </div>
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
</template>

<script>
import axios from 'axios';
import {ref , computed} from 'vue'
export default {
    setup(){
        const a = ref('A');
        const b = ref('B');
        const c = ref('C');
        const d = ref('D');
        const e = ref('E');
        const f = ref('F');
        const g = ref('G');
        const h = ref('H');
        const i = ref('I');
        const j = ref('J');
        const k = ref('K');
        const l = ref('L');
        const m = ref('M');
        const n = ref('N');
        const o = ref('O');
        const p = ref('P');
        const q = ref('Q');
        const r = ref('R');
        const s = ref('S');
        const t = ref('T');
        const u = ref('U');
        const v = ref('V');
        const w = ref('W');
        const x = ref('X');
        const y = ref('Y');
        const z = ref('Z');
        const theMeal = ref([])
        const getmealByLetter = async (letter) =>{
            let result = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
            console.log(result.data);
            theMeal.value = result.data;
        }

        return{
            getmealByLetter, theMeal 
            , a , b , c , d , f , g , h , i , j , k , e , l , m , n , o , p , q ,r,s,t,u,v,w,x,y,z
        }
    }
}

</script>

<style lang="scss">
.theletters{
    width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
gap: 10px;
span{
    font-size: 20px;
    cursor: pointer;
    transition: 0.5s;
}
span:hover{
    color: var(--maincolor);
}
}




</style>