import { defineStore } from 'pinia'


export const useCovidApi = defineStore('covidApi', {
    state: () => ({
        countries: [],
        summary: {},
        global: {},
        result: [],
        country: "",
        filteredObject: [],
        mapArea: []
    }),
    actions: {    
        getData() {
            fetch('src/summary.json',{
                method: 'GET',
                 headers: {
                    'Content-Type': 'application/json'
                    },
                // body: JSON.stringify(data)
        }       )
                .then(res => res.json())
                .then(data => this.summary = data)
                .catch(err => console.log(err.message))
                setTimeout(() => {
                    this.global = this.summary.Global
                    this.countries = this.summary.Countries
                    this.filteredObject = this.countries

                    this.filteredObject.forEach(v => {
                        delete v.ID;
                        delete v.Slug;
                        delete v.Country;
                        delete v.NewConfirmed;
                        delete v.TotalConfirmed;
                        delete v.NewDeaths;
                        delete v.TotalDeaths;
                        delete v.NewRecovered;
                        delete v.TotalRecovered;
                        delete v.Date;
                        delete v.Premium;
                        v.id = v.CountryCode;
                        delete v.CountryCode;
                    })
                    this.filteredObject = this.filteredObject.map(v => ({...v, "showAsSelected": true}))
                }, 2000);
        },
        getCountry(){

//             function pluck(array, key) {
//   return array.map(function(item) { return item[key]; });
// }
            // this.result = this.countries.filter(data => data.Country === country)
            this.country = this.result
            this.mapArea = this.country
            this.mapArea = this.mapArea.map(v => ({...v, "showAsSelected": true}))
            // this.mapArea.reduce()
        }
    },
    getters: {

    }
})