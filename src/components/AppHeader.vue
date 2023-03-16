<script>
export default {
    name: 'AppHeader',
    data(){
        return{
            menuItems: [
                {
                    label: 'Homepage',
                    routeName: 'homepage',
                    // link: '/'
                },
                {
                    label: 'Blog',
                    routeName:'post_list'
                },
                {
                    label: 'Contacts',
                    routeName : 'contacts'
                }
            ]

        }
    }
    
}
</script>

<template lang="">
    <div>
        <nav class="navbar navbar-expand-md background-nav">
            <div class="container">
                <div class="navbar-brand">
                    <img src="/img/logo.png" class="logo">
                </div>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item" v-for="(item,index) in menuItems" :key="index">
                            <!-- <a :href="item.link" class="nav-link text-white">
                                {{item.label}}
                            </a> -->
                            <router-link :to="{name: item.routeName }" class="nav-link text-white">
                                {{item.label}}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
.background-nav{
    background-color: green;
}

.logo{
    width: 200px;
}
    
</style>