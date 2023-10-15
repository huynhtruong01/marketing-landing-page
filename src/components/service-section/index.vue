<template>
    <section class="pt-32 pb-24">
        <Container>
            <div class="flex flex-col items-center">
                <div class="text-primary font-medium uppercase">What to do</div>
                <h2 class="text-4xl font-bold mt-3 text-center">Grow Your Business <br /> With Ringo</h2>
                <p class="mt-8 text-description-third">tempus, lectus risus In' perdiel tellus, sed faucibus ipsum
                    ipsurn nun neque.</p>
            </div>
            <div class="grid grid-cols-3 gap-6 mt-16">
                <div v-for="service in serviceSectionData" :key="service.title"
                    class="rounded-md p-10 flex flex-col items-center border border-neutral-200">
                    <div class="w-16 h-16 flex justify-center items-center bg-icon rounded-full">
                        <v-icon name="io-mail" scale="1.5" class="text-secondary-light" />
                    </div>
                    <h3 class="font-semibold text-xl mt-3">{{ service.title }}</h3>
                    <p class="mt-5 text-sm text0-description-third text-center">{{ service.subDescription }}</p>
                </div>
            </div>
        </Container>
    </section>
</template>

<script setup lang="ts">
import { Container } from '../../components/common'
import { serviceSectionData } from '../../data'
</script>

<style scoped></style>