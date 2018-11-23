<template>
    <div>
        <swiper :option="swiperOption">
            <swiper-slide v-for="item in swiperSlides" :key="item.id">{{item}}</swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <swiper :option="swiperOption">
            <swiper-slide v-for="item in swiperSlides" :key="item.id">{{item}}</swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    components: {
        swiper,
        swiperSlide
    },
    data() {
        return {
            list: {
                tip: [{id: 1, name: 'TOM'}],
                info: [{id: 2, age: 20}, {id: 3, age: 21},{id: 4, age: 22},]
            },
            swiperSlides: [1, 2, 3, 4, 5],
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                }
            },
        }
    }
}
</script>
