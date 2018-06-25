<template>
    <div>
        <bus-a></bus-a>
        <bus-b></bus-b>
    </div>
</template>

<script>
import busA from 'components/eventBus/busA'
import busB from 'components/eventBus/busB'
export default {
    components: {
        busA,
        busB
    }
}
</script>
