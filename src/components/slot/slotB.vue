<template>
    <div>
        <p>具名插槽</p>
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="sass" scoped>
    
</style>

