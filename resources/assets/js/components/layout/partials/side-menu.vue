<script>
    export default {
        props: ['authenticate']
    }
</script>
<template>
    <div class="menu_content">
        <ul v-if="authenticate">
            <li>
                <router-link :to="{name: 'dashboard'}">
                    <i class="material-icons">
                        dashboard
                    </i>
                    Dashboard
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'videos'}">
                    <i class="material-icons">movie</i>
                    Videos
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'add_video'}">
                    <i class="material-icons">video_call</i>
                    Add Video
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'users'}">
                    <i class="material-icons">people</i>
                    Users
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'roles'}">
                    <i class="material-icons">verified_user</i>
                    Roles
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'permission'}">
                    <i class="material-icons">verified_user</i>
                    Permission
                </router-link>
            </li>
        </ul>
    </div>
</template>