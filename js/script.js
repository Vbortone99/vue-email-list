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
        axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((resp)=>{
            console.log(resp.data.response);
            
        })
    }
}).mount('#app')