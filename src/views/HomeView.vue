

<template>
<div class="container pt-6">
  <h1>Covid-19 Update as of {{ getDateToday() }}</h1>
  <div class="flex justify-end">
  <select @change="selectionChange($event)">
    <option
    :key="x"
    v-for="x in covidApi.countryNames"
    :value="x"
> {{ x }}</option>
  </select>
  </div>

  <h2>{{ showCountryAsTitle }}</h2>
  <div class="stats">
    <div class="stat">
      <p>New Confirmed:</p>
      <span>{{ covidApi.newConfirmed }}</span>
    </div>
    <div class="stat">
      <p>New Deaths:</p>
      <span>{{ covidApi.newDeaths }}</span>
    </div>
    <div class="stat">
      <p>New Recovered:</p>
      <span>{{ covidApi.newRecovered }}</span>
    </div>
    <div class="stat">
      <p>Total Confirmed:</p>
      <span>{{ covidApi.totalConfirmed }}</span>
    </div>
    <div class="stat">
      <p>Total Deaths:</p>
      <span>{{ covidApi.totalDeaths }}</span>
    </div>
    <div class="stat">
      <p>Total Recovered:</p>
      <span>{{ covidApi.totalRecovered }}</span>
    </div>
  </div>
</div>

</template>

<script setup>
import { useCovidApi } from "../stores/covidStates"
import MapViewVue from "./MapView.vue";
import { ref } from "vue";
import { computed } from "vue";
let covidApi = useCovidApi();
covidApi.getData()


function selectionChange(event){
  let selected = event.target.options[event.target.options.selectedIndex].text
  covidApi.findCountryDetails(selected)
  covidApi.selectedCountry = selected
  covidApi.changeShowSelect(selected)
}


const showCountryAsTitle = computed(() => {
  return (covidApi.selectedCountry === "--Select Country--") ? "Global" : covidApi.selectedCountry
})


//Get Current Month and Year
function getDateToday(){
  let dateToday = new Date()
  let currentMonth = dateToday.getMonth()
  let months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  currentMonth = months[currentMonth];
  return dateToday = currentMonth + " " + dateToday.getFullYear()
}

</script>


<style>

.container{
  max-width: 800px;
  margin: auto
}
  .stats {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    margin: auto;
    text-align: right;
  }
  @media(max-width: 467px){
    .stats{
      grid-template-columns: 1fr 1fr;
    }
  }
  .stats .stat {
    border: 1px solid black;
    padding: 10px;
  }

  .stats .stat p {
    padding: 0;
    margin: 0;
  }
  .stats .stat span {
    font-size: 2rem;
  }
</style>
