<script>
import axios from 'axios';
import {store} from '../store';
import PostCard from '../components/PostCard.vue';


export default{
    name: "PostList",
    data(){
        return{
            store,
            posts:[],
            currentPage:1,
            lastPage:null
        }
    },
    components:{
        PostCard

    },
    methods:{
        getPosts(post_page){
            this.store.loading = true
            axios.get(`${this.store.baseUrl}/api/posts`,{params:{page: post_page}}).then((response)=>{
                if(response.data.success){
                    console.log(response.data)

                    //se nel backend faccio Post::all()
                    // this.posts = response.data.posts

                    //con paginate diventa:
                    this.posts = response.data.posts.data;
                    this.currentPage = response.data.posts.current_page
                    this.lastPage = response.data.posts.last_page
                    this.store.loading = false;
                }
                else{
                    //compare messaggio di errore
                }
                
            })
        }
    },
    mounted(){
        this.getPosts(this.currentPage);
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
                <div v-if="store.loading" class="col-12 d-flex justify-content-center">
                    <div class="loader"></div>
                </div>
                <div v-else class="col-12 d-flex justify-content-center flex-wrap">
                    <div class="row">
                        <div class="col-12 col-md-4" v-for="post in posts" :key="post.id">
                           <PostCard :post="post"></PostCard>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <nav>
                                <ul class="pagination">
                                    <li :class="currentPage == 1 ? 'disabled' : 'page-item' ">
                                        <button class="page-link" @click="getPosts(currentPage - 1)">Prev</button>
                                    </li>
                                    <li :class="currentPage == lastPage ? 'disabled' : 'page-item' ">
                                        <button class="page-link" @click="getPosts(currentPage + 1)">Next</button>
                                    </li>
                                </ul>
                            </nav>
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
