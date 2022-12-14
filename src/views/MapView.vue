<template>

<div id="mapdiv" style="width: 1000px; height: 450px;"></div>
<div
    style="width: 1000px; font-size: 70%; padding: 5px 0; text-align: center; background-color: #535364; margin-top: 1px; color: #B4B4B7;">
    <a href="https://www.amcharts.com/visited_countries/" style="color: #B4B4B7;">Create your own visited countries
        map</a> or check out the <a href="https://www.amcharts.com/" style="color: #B4B4B7;">JavaScript Charts</a>.
</div>
{{ showMap() }}
</template>

<script setup>

import { useCovidApi } from '../stores/covidStates';
let covidApi = useCovidApi();

let initialMap = []
console.log(initialMap)
setTimeout(() =>{
    initialMap = [{ "id": "PH", "showAsSelected": true }]
    console.log(initialMap)
}, 5000)


function showMap(){
        var map = AmCharts.makeChart("mapdiv", {
            type: "map",
            theme: "dark",
            projection: "mercator",
            panEventsEnabled: true,
            backgroundColor: "#535364",
            backgroundAlpha: 1,
            zoomControl: {
                zoomControlEnabled: false
            },
            dataProvider: {
                map: "worldHigh",
                getAreasFromMap: true,
                areas: this.initialMap
            },
            areasSettings: {
                autoZoom: false,
                color: "#B4B4B7",
                colorSolid: "#84ADE9",
                selectedColor: "#84ADE9",
                outlineColor: "#666666",
                rollOverColor: "#9EC2F7",
                rollOverOutlineColor: "#000000"
            }
        });
    }


</script>

<style>

</style>
