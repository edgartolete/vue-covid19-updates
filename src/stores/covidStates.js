import { defineStore } from 'pinia'


export const useCovidApi = defineStore('covidApi', {
    state: () => ({
        fullResponse: [],
        global: [],
        countries: [],
        countryNames: [],
        newConfirmed: "",
        newDeaths: "",
        newRecovered: "",
        totalConfirmed: "",
        totalDeaths: "",
        totalRecovered: ""
    }),
    actions: {    
        async getData() {
            await fetch('src/summary.json')
                .then(res => res.json())
                .then(data => this.fullResponse = data)
                .then(data => this.global = data.Global)
                .then(data => this.countries = data.Countries)
                .then(data => this.countryNames = data.map((item)=>{
                    return item["Country"];
                }))
                .catch(err => console.log(err.message))
                .then(data => findCountryDetails("Philippines"){
                    this.result = this.countries.filter(obj => obj.Country === country)
                })
            },        
        
    },
    getters: {


    }
})