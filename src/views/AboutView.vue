<template>
  <div class="about">
    <h1> Covid Data</h1>
    <!-- <div id="mapdiv" style="width: 1000px; height: 450px;"></div> -->
    <p>New Confirmed: {{ covidApi.global.NewConfirmed }}</p>
    <p>New Deaths: {{ covidApi.global.NewDeaths }}</p>
    <p>New Recovered: {{ covidApi.global.NewRecovered }}</p>
    <p>Total Confirmed: {{ covidApi.global.TotalConfirmed }}</p>
    <p>Total Deaths: {{ covidApi.global.TotalDeaths }}</p>
    <p>Total Recovered: {{ covidApi.global.TotalRecovered }}</p>

    <p>Countries: {{ covidApi.countries }}</p>
    <!-- <button @click="covidApi.getCountry('Italy')">Test</button> -->
    <!-- <p>{{ covidApi.filteredObject }}</p> -->
  </div>
</template>

<script setup>
import { useCovidApi } from '../stores/generalStates'
let covidApi = useCovidApi();
covidApi.getData();


// let map = AmCharts.makeChart("mapdiv", {
//   type: "map",
//   theme: "dark",
//   projection: "mercator",
//   panEventsEnabled: true,
//   backgroundColor: "#535364",
//   backgroundAlpha: 1,
//   enable: true,
//   zoomControl: {
//     zoomControlEnabled: true
//   },
//   dataProvider: {
//     map: "worldHigh",
//     getAreasFromMap: true,
//     areas: covidApi.filteredObject
//   },
//   areasSettings: {
//     autoZoom: false,
//     color: "#B4B4B7",
//     colorSolid: "#84ADE9",
//     selectedColor: "#84ADE9",
//     outlineColor: "#666666",
//     rollOverColor: "#9EC2F7",
//     rollOverOutlineColor: "#000000"
//   }
// });
</script>
<style>

</style>
