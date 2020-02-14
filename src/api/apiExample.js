import Vue from "vue";

export default class apiExample {
    static getLordOfTheRings() {
        return Vue.http.get("http://openlibrary.org/search.json?q=the+lord+of+the+rings", {
        });
    }

    static football() {
        return Vue.http.get("https://api-football-v1.p.rapidapi.com/v2/predictions/157462", {
            headers: {
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "x-rapidapi-key": "91f3e034afmshdb7e72cf600e9cbp17d92djsn6f00dedb5a56"
            }
        })
    }

    // Not working
    static postExample(file) {
        return Vue.http.post(
            url, // url à contacter
            file) // data
    }
}
