<script>
import axios from 'axios';


export default{
    name: "PostMain",
    data(){
        return{
            posts:[],
            loading: true,
            baseUrl: 'http://127.0.0.1:8000'
        }
    },
    methods:{
        getPosts(){
            this.loading = true
            axios.get(`${this.baseUrl}/api/posts`).then((response)=>{
                if(response.data.success){
                    this.posts = response.data.posts
                    this.loading = false;
                }
                else{
                    //compare messaggio di errore
                }
                
            })
        }
    },
    mounted(){
        this.getPosts()
    }
}
</script>

<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="text-center">Boolpress</h2>
                </div>
                <div v-if="loading" class="col-12 d-flex justify-content-center">
                    <div class="loader"></div>
                </div>
                <div v-else class="col-12 d-flex justify-content-center flex-wrap">
                    <div class="row">
                        <div class="col-12 col-md-4" v-for="post in posts" :key="post.id">
                            <div class="card my-3">
                                <div class="card-body">
                                    <div class="card-img-top">
                                        <img class="img-fluid" :src="post.cover_image !=null ? `${baseUrl}/storage/${post.cover_image}` : 'https://picsum.photos/300/200' " alt="">
                                    </div>
                                    <div class="card-title">
                                        <h5>{{ post.title }}</h5>
                                    </div>
                                    <div class="card-text">
                                        <!-- EXCEPTS -->
                                    </div>
                                    <a href="#" class="btn btn-sm btn-success">
                                        Leggi L'articolo
                                    </a>
                                </div>
                            </div>
                        </div>
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

</style>
