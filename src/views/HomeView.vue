

<template>
<div class="container">
  <h1>Covid-19 Update as of {{ dateToday }}</h1>
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
  <input v-model="covidApi.findCountry" type="text" />
  <button @click="covidApi.findCountryDetails(covidApi.findCountry)">Find</button>
  <p> {{ covidApi.result }}</p>

</div>

  <!-- <p>Countries: {{ covidApi.global }}</p> -->
</template>

<script setup>
import { useCovidApi } from "../stores/covidStates";
let covidApi = useCovidApi();
covidApi.getData();

let dateToday = new Date()
let currentMonth = dateToday.getMonth()
var months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

currentMonth = months[currentMonth];

dateToday = currentMonth + " " + dateToday.getFullYear()

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
