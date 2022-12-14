<template>

<div id="mapdiv" style="width: 1000px; height: 450px;"></div>
<div
    style="width: 1000px; font-size: 70%; padding: 5px 0; text-align: center; background-color: #535364; margin-top: 1px; color: #B4B4B7;">
    <a href="https://www.amcharts.com/visited_countries/" style="color: #B4B4B7;">Create your own visited countries
        map</a> or check out the <a href="https://www.amcharts.com/" style="color: #B4B4B7;">JavaScript Charts</a>.
</div>

</template>

<script setup>

var map = AmCharts.makeChart("mapdiv", {
    type: "map",
    theme: "dark",
    projection: "mercator",
    panEventsEnabled: true,
    backgroundColor: "#535364",
    backgroundAlpha: 1,
    zoomControl: {
        zoomControlEnabled: true
    },
    dataProvider: {
        map: "worldHigh",
        getAreasFromMap: true,
        areas:
            [
                {
                    "id": "PH",
                    "showAsSelected": true
                },
                {
                    "id": "AL",
                    "showAsSelected": true
                }, {
                    "id": "CN",
                    "showAsSelected": true
                }
            ]
    },
    areasSettings: {
        autoZoom: true,
        color: "#B4B4B7",
        colorSolid: "#84ADE9",
        selectedColor: "#84ADE9",
        outlineColor: "#666666",
        rollOverColor: "#9EC2F7",
        rollOverOutlineColor: "#000000"
    }
});

</script>

<style>

</style>
