const {createApp} = Vue;
createApp({
    data(){
        return {
            emails:[],

        }
    },
    methods:{

    },
    mounted(){
        for(let x = 0; x < 10; x++){
            axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((resp)=>{
                // console.log(resp.data.response);
                this.emails.push(resp.data.response);
            });
        }
    }
}).mount('#app')