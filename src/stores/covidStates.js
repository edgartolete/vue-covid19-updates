import { defineStore } from 'pinia'


export const useCovidApi = defineStore('covidApi', {
    state: () => ({
        fullResponse: [],
        global: [],
        countries: [],
        countryNames: [],
        findCountry: "",
        newConfirmed: "",
        newDeaths: "",
        newRecovered: "",
        totalConfirmed: "",
        totalDeaths: "",
        totalRecovered: "",
    }),
    actions: {    
        async getData() {
            try{
                let response = await fetch('src/summary.json')
                let data = await response.json()
                this.global = await data.Global
                this.countries = await data.Countries;

                this.newConfirmed = await this.global.NewConfirmed.toLocaleString("en-US")
                this.newDeaths = await this.global.NewDeaths.toLocaleString("en-US")
                this.newRecovered = await this.global.NewRecovered.toLocaleString("en-US")
                this.totalConfirmed = await this.global.TotalConfirmed.toLocaleString("en-US")
                this.totalDeaths = await this.global.TotalDeaths.toLocaleString("en-US")
                this.totalRecovered = await this.global.TotalRecovered.toLocaleString("en-US")
                
                this.countryNames = this.countries.map((item) => {
                    return item["Country"];
                })
            }
            catch(err){
                console.log(err)
            }
        },
        async findCountryDetails(country){
            let response = await fetch('src/summary.json')
            let data = await response.json()
            let result = await data.Countries.filter(obj => obj.Country === country)
            if(this.countryNames.includes(country)){
                this.newConfirmed = await result[0].NewConfirmed.toLocaleString("en-US")
                this.newDeaths = await result[0].NewDeaths.toLocaleString("en-US")
                this.newRecovered = await result[0].NewRecovered.toLocaleString("en-US")
                this.totalConfirmed = await result[0].TotalConfirmed.toLocaleString("en-US")
                this.totalDeaths = await result[0].TotalDeaths.toLocaleString("en-US")
                this.totalRecovered = await result[0].TotalRecovered.toLocaleString("en-US")
            }else{
                console.log('country not found')
            }

        }        
        
    },
    getters: {


    }
})