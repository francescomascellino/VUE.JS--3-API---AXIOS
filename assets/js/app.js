const { createApp } = Vue

createApp({
    data() {
        return {
            randomNumber: '',
            rndNumError: false,
            intArray: "",
            rndListError: false,
        }
    },

    mounted() {

        /* GET A RANDOM NUMBER */

        // axios.get() RESTITUISCE UNA PROMISE
        axios.get("https://flynn.boolean.careers/exercises/api/random/int")
            // SE C'E' LA RICHIESTA E' ANDATA A BUON FINE CE' UNA RESPONSE LA LOGGHIAMO
            .then((response => {
                //L'INTERA RESPONSE
                console.log(response);
                //L'INTERO DATA
                console.log(response.data);
                //LA PROPRIETA' CHE CERCAVAMO
                console.log(response.data.response);

                //ASSEGNO IL DATO ALLA VARRIABILE randomNumber
                this.randomNumber = response.data.response;

            }))
            //catcch INTERCETTA IN QUESTO CASO LA PRESENZA DI UN ERRORE
            .catch(error => {
                //CONTROLLIAMO COSA CONTIENE error
                console.log(error);
                //IL MESSAGGIO CHE CI INTERESSA E' IL VALORE DELLA PROP message
                console.log(error.message);
                //QUINDI POSSIAMO ASSEGNARLO ALLA VARIABILE this.error
                this.rndNumError = error.message
            });


        /* GET A LIST OF RANDOM NUMBERS */

        // axios.get() RESTITUISCE UNA PROMISE
        axios.get("https://flynn.boolean.careers/exercises/api/array/integers?min=10&max=100&items=10")
            // SE C'E' LA RICHIESTA E' ANDATA A BUON FINE CE' UNA RESPONSE LA LOGGHIAMO
            .then((response => {
                //L'INTERA RESPONSE
                console.log(response);
                //L'INTERO DATA
                console.log(response.data);
                //LA PROPRIETA' CHE CERCAVAMO
                console.log(response.data.response);

                //ASSEGNO IL DATO ALLA VARRIABILE randomNumber
                this.intArray = response.data.response.toString().split(",").join(", ");

            }))
            //catcch INTERCETTA IN QUESTO CASO LA PRESENZA DI UN ERRORE
            .catch(error => {
                //CONTROLLIAMO COSA CONTIENE error
                console.log(error);
                //IL MESSAGGIO CHE CI INTERESSA E' IL VALORE DELLA PROP message
                console.log(error.message);
                //QUINDI POSSIAMO ASSEGNARLO ALLA VARIABILE this.error
                this.rndListError = error.message
            });

    },

    methods: {

    }

}).mount('#app')