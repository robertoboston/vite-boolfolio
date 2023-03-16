<script>
import axios from 'axios';
import {store} from '../store.js';

export default {
    name: 'SinglePost',
    data(){
        return{
            store,
            post: null,
            loading: true

        }
    },
    mounted(){
        this.loading = true;
        axios.get(`${this.store.baseUrl}/api/posts/${this.$route.params.slug}`).then((response) => {
            this.post = response.data.post
            console.log(this.post.title)
            console.log(this.post.cover_image)
            this.loading = false
        })
    }
}
</script>

<template lang="">
<div class="container">
    <div class="row">
        <div class="col-12 d-flex justify-content-center" v-if="loading">
            <div class="loader"></div>
        </div>
        <div v-else class="col-12">
            <div>
                <h3>Dettaglio Post:</h3>
                <h2>{{post.title}}</h2>
            </div>
            <div class="img-card">
                <img :src="`${this.store.baseUrl}/storage/${post.cover_image}`" class="img-fluid" alt="#">
                <div class="content mt-4">
                {{post.content}}
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>

.loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .img-card{
    width: 600px;
    height: 300px;
}


    
</style>

