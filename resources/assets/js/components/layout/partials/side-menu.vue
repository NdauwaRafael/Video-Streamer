<script>
    export default {

    }
</script>
<template>
    <div class="menu_content">
        <ul>
            <li>
                <router-link :to="{name: 'dashboard'}">Dashboard</router-link>
            </li>
            <li>
                <router-link :to="{name: 'videos'}">Videos</router-link>
            </li>
            <li>
                <router-link :to="{name: 'add_video'}">Add Video</router-link>
            </li>
            <li>
                <router-link :to="{name: 'users'}">Users</router-link>
            </li>
            <li>
                <router-link :to="{name: 'roles'}">Roles</router-link>
            </li>
        </ul>
    </div>
</template>