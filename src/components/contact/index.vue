<template>
    <section class="pt-32 pb-40">
        <Container>
            <div class="bg-section-light rounded-2xl py-20">
                <div class="max-w-[80%] m-auto grid grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 class="text-4xl font-bold mt-4">Sign up to Our Newsletter</h2>
                        <p class="mt-6 text-description-third">You need to get positive results when you
                            spend hard earned revenue and time.</p>
                    </div>
                    <div class="relative flex items-center h-12">
                        <input type="text" placeholder="Email..."
                            class="absolute top-0 left-0 h-full w-full rounded-full px-4" />
                        <div class="absolute right-0 top-1/2 -translate-y-1/2">
                            <button class="bg-gradient-to-r from-primary to-primary-light text-white">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
</template>

<script setup lang="ts">
import { Container } from '../../components/common'
</script>

<style scoped></style>