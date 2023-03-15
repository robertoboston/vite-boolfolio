<script>
import {store} from '../store';
import axios from 'axios';

export default {
    name: 'SinglePost',
    data(){
        return{
            store,
            post: null,

        }
    },
    mounted(){
        this.store.loading = true;
        axios.get(`${this.store.baseUrl}/api/posts/${this.$route.params.slug}`).then((response) => {
            console.log(response)
        })
    }
}
</script>

<template lang="">
    <div>
        <h1>Dettaglio post</h1>
    </div>
</template>

<style lang="">
    
</style>

