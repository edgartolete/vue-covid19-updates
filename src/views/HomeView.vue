<script setup>
import { useCovidApi } from '../stores/covidStates'
let covidApi = useCovidApi();
covidApi.getData();

</script>

<template>
  <h1> Covid Data</h1>
  <div class="stats">
    <div class="stat">
      <p> Confirmed:</p> 
      <span>{{ covidApi.global.NewConfirmed }}</span>
    </div>
    <div class="stat">
      <p>New Deaths:</p>
      <span>{{ covidApi.global.NewDeaths }}</span>
    </div>
    <div class="stat">
      <p>New Recovered:</p>
      <span>{{ covidApi.global.NewRecovered }}</span>
    </div>
    <div class="stat">
      <p>Total Confirmed: </p>
      <span>{{ covidApi.global.TotalConfirmed }}</span>
    </div>
    <div class="stat">
      <p>Total Deaths:</p>
      <span>{{ covidApi.global.TotalDeaths }}</span>
    </div>
    <div class="stat">
      <p>Total Recovered:</p>
      <span>{{ covidApi.global.TotalRecovered }}</span>  
    </div>
  </div>
<p>{{ covidApi.findCountryDetails("Philippines") }}</p>

<!-- <p>Countries: {{ covidApi.global }}</p> -->
</template>

<style>
.stats{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  max-width: 800px;
  margin: auto;
  text-align: right;
}
.stats .stat{
  border: 1px solid black;
  padding: 10px;
}

.stats .stat p{
  padding: 0; margin: 0;
}
.stats .stat span {
    font-size: 2rem;
}
</style>


