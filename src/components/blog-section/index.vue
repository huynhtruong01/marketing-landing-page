<template>
    <section class="pt-32 pb-24">
        <Container>
            <div class="flex flex-col items-center">
                <h2 class="text-4xl font-bold text-center">Our Regular Updated <br> Blog Posts</h2>
                <p class="mt-4">tempus, lectus risus In' perdiel tellus, sed faucibus ipsum ipsurn nun neque. </p>
            </div>
            <div class="grid grid-cols-3 gap-6 mt-20">
                <div v-for="blog of blogs" :key="blog.thumbnailUrl">
                    <div>
                        <img :src="blog.thumbnailUrl" :alt="blog.title">
                    </div>
                    <div class="p-4 mt-4">
                        <h3 class="text-lg text-primary font-semibold">{{ blog.title }}</h3>
                        <p class="text-sm text-description-third mt-2.5">{{ blog.subDescription }}</p>
                    </div>
                </div>
            </div>
        </Container>
    </section>
</template>

<script setup lang="ts">
import { Container } from '../../components/common'
import { blogs } from '../../data'
</script>

<style scoped></style>