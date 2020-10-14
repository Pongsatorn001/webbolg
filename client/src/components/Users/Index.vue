<template>
    <div>
        <h1>Get All Users</h1>
        <div v-if="users.length">
            <div v-for="user in users" v-bind:key="user.id">
                <p> จำนวนผู้ใช้งาน {{user.length}}</p>
                <p> รหัส {{user.id}}</p>
                <p> ชื่อ-นามสกุล {{user.name}} {{user.lastname}}</p>
                <p> Email {{user.email}}</p>
                <p> Password {{user.password}}</p>
                <p><button v-on:click="navigateTo('/user/'+user.id)">ดูข้อมูลผู้ใช้</button></p>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>
    import UsersService from '@/services/UsersService'

    export default{
        data(){
            return{
                users: []
            }
        },
        async created(){
            this.users  = (await UsersService.index()).data
        },
        methods:{
            navigateTo (route) {
                this.$router.push(route)
            },
        }
    }
</script>

<style scoped>

</style>