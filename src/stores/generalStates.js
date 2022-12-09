import { defineStore } from 'pinia'


export const useCovidApi = defineStore('covidApi', {
    state: () => ({
        countries: [],
        countryNames: [],
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
                    let temp = []
                    this.countries.forEach((obj) =>{
                         temp = Object.entries(obj);
                         temp = temp.filter(([key, value]) => key == 'CountryCode');
                         temp = Object.fromEntries(temp);
                         this.filteredObject.push(temp)
                    })

                    this.filteredObject.forEach(v => {
                        v.id = v.CountryCode; //add new object property and set value using old property
                        delete v.CountryCode;
                        
                    this.filteredObject = this.filteredObject.map(v => ({...v, "showAsSelected": true}))
                    console.log( this.filteredObject)
                    // const filtered = asArray.filter(([key, value]) => key == 'ID');
                    // console.log(filtered)
                    // this.result = Object.fromEntries(filtered);
                    // this.filteredObject = this.countries
                    this.countryNames = this.countries.map((item)=>{
                        return item["Country"];
                    })
                    

                    })
                    // this.result = this.countries.map( obj =>{
                    //     return  obj["Country"]
                    //     });
                    // let validKeys = "Country"
                    // this.result = {Name: "Edgar"}
                    // this.countries.forEach(obj =>{
                    //     this.result.push(obj.ID)
                    // })
                    // this.filteredObject.push(this.result)
                    // this.countries.filter(v => Object.keys(v) == "Country")
                    // this.filteredObject.push()
                    // this.countries.forEach(obj =>{
                    //     this.filteredObject.push( obj.filter(obj.ID, Object.keys(obj) == "Country")
                        // this.filteredObject.push(obj.ID);    
                        // if(obj){
                            //     console.log("Test")
                            // }
                        // })

                    // this.filteredObject.forEach(v => {
                    //     delete v.ID;

                
                    //     v.id = v.CountryCode;
                    //     delete v.CountryCode;
                    // })
                    // 
                }, 2000);
        },
        getOnlyCode(){

        },
        getCountry(){

//             function pluck(array, key) {
//   return array.map(function(item) { return item[key]; });
// }
            // 
            // this.country = this.result
            // this.mapArea = this.country
            // this.mapArea = this.mapArea.map(v => ({...v, "showAsSelected": true}))

            // this.mapArea.reduce()
        }
    },
    getters: {

    }
})