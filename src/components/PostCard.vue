<script>
import {store} from '../store.js'
export default {
    name: 'PostCard',
    props:{
        post: Object,
    },
    data(){
        return{
            store
        }
    }
    
}
</script>
<template lang="">
    <div>
        <div class="card my-3">
             <div class="card-body">
                <div class="card-img-top">
                    <img class="img-card" :src="post.cover_image !=null ? `${store.baseUrl}/storage/${post.cover_image}` : 'https://picsum.photos/300/200' " alt="">
                </div>
                <div class="card-title py-1">
                    <h3>{{ post.title }}</h3>
                    <p v-if="(post.category != null)">
                    <em>Categoria : {{ post.category.name }}</em>
                    </p>
                    <p v-else>
                        Categoria : Senza categoria
                    </p>
                </div>
                <div>
                    <p>{{ post.content }}</p>
                </div>
                <div class="card-text py-1">
                    <!-- EXCEPTS -->
                </div>
                <div>
                        <!-- <a href="#" class="btn btn-sm btn-success">
                    Leggi L'articolo
                </a> -->
                <router-link :to="{name: 'single-post', params: {slug: post.slug } }" class="btn btn-sm btn-success">
                    Leggi l'Articolo
                </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.img-card{
    width: 380px;
    height: 300px;
}
    
</style>