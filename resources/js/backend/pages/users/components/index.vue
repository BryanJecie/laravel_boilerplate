<template>
    <div>
        <h1>User List</h1>
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">{{ error }}</div>
        <ul v-else>
            <li v-for="user in users" :key="user.id">{{ user.name }}</li>
        </ul>
        <button @click.prevent="onClick">test</button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            users: [],
            loading: false,
            error: null
        }
    },
    methods: {
        onClick() {
            alert()
        }
    }
}

</script>


<style scoped>

</style>
