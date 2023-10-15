<template>
    <footer class="bg-footer pt-28 pb-8">
        <Container>
            <nav class="grid grid-cols-[2fr_1fr_1fr_1fr] gap-x-10 pb-14 border-b border-footer-light">
                <div>
                    <h2>
                        <a href="#" class="inline-flex gap-3 items-center">
                            <img src="/images/logo.png" />
                            <span class="text-white font-medium">Lopama</span>
                        </a>
                    </h2>
                    <p class="text-description text-sm mt-[22px] max-w-[70%]">Nulla non otllo venicula, ultricles lorem a,
                        allquarn
                        nes!. Etlam et
                        lorem
                        lobortls, cony allis nunc.
                    </p>
                </div>
                <div v-for="data in footerData" :key="data.title">
                    <h3 class="text-white font-medium text-lg">{{ data.title }}</h3>
                    <ul class="mt-[22px]">
                        <li v-for="item in data.items" class="mb-3 last:mb-0" :key="item">
                            <a href="#" class="text-description text-sm">{{ item }}</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="pt-8">
                <p class="text-center text-description-second text-sm">All Right Reserved by Us! Copyright 2023</p>
            </div>
        </Container>
    </footer>
</template>

<script setup lang="ts">
import { Container } from './index.ts'
import { footerData } from '../../data'
</script>
