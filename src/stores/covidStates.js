import { defineStore } from 'pinia'
import { compileScript } from 'vue/compiler-sfc'

export const useCovidApi = defineStore('covidApi', {
    state: () => ({
        global: [],
        countries: [],
        countryNames: [],
        selectedCountry: "Global",
        newConfirmed: "",
        newDeaths: "",
        newRecovered: "",
        totalConfirmed: "",
        totalDeaths: "",
        totalRecovered: "",
        mapSelected: []
    }),
    actions: {    
        async getData() {
            try{
                // let response = await fetch('src/summary.json')
                let response = await fetch('https://api.covid19api.com/summary')
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
                
                let temp = []
               
                this.countries.forEach((obj) =>{
                    temp = Object.entries(obj);
                    temp = temp.filter(([key, value]) => key == 'CountryCode');
                    temp = Object.fromEntries(temp);
                    this.mapSelected.push(temp)
                })    

                
                this.mapSelected.forEach(v => {

                    v.id = v.CountryCode; 
                    delete v.CountryCode;
                })
                
                this.mapSelected = this.mapSelected.map(v => ({...v, "showAsSelected": false}))
                 
                
                this.countryNames.unshift("--Select Country--");

            }
            catch(err){
                console.log(err)
            }
        },
        async findCountryDetails(country){
            let response = await fetch('https://api.covid19api.com/summary')
            let data = await response.json()
            let result = await data.Countries.filter(obj => obj.Country === country)
            if(country === "--Select Country--"){

                this.newConfirmed = await this.global.NewConfirmed.toLocaleString("en-US")
                this.newDeaths = await this.global.NewDeaths.toLocaleString("en-US")
                this.newRecovered = await this.global.NewRecovered.toLocaleString("en-US")
                this.totalConfirmed = await this.global.TotalConfirmed.toLocaleString("en-US")
                this.totalDeaths = await this.global.TotalDeaths.toLocaleString("en-US")
                this.totalRecovered = await this.global.TotalRecovered.toLocaleString("en-US")

            }else if(this.countryNames.includes(country)){
                this.newConfirmed = await result[0].NewConfirmed.toLocaleString("en-US")
                this.newDeaths = await result[0].NewDeaths.toLocaleString("en-US")
                this.newRecovered = await result[0].NewRecovered.toLocaleString("en-US")
                this.totalConfirmed = await result[0].TotalConfirmed.toLocaleString("en-US")
                this.totalDeaths = await result[0].TotalDeaths.toLocaleString("en-US")
                this.totalRecovered = await result[0].TotalRecovered.toLocaleString("en-US")
                
            }else{
                console.log('country not found')
            }

        },
        changeShowSelect(countryName){
            let resultObj = []
            resultObj = this.countries.filter(obj => obj.Country === countryName)[0]

            this.mapSelected.forEach(obj =>{
                obj.showAsSelected = (obj.id === resultObj.CountryCode) ? true : false;
            })           
        }       
        
    },
    getters: {
        getMapSelection(){
            return this.mapSelected
        }


    }
})