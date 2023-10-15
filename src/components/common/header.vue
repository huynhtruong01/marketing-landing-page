<template>
    <header class="fixed top-0 left-0 w-full z-40 bg-white/50 backdrop-blur-md">
        <Container>
            <div class="py-4 flex justify-between items-center">
                <div>
                    <a href="#" class="inline-flex justify-center items-center gap-2">
                        <img src="/images/logo.png" />
                        <span class="text-secondary font-bold">beyond.</span>
                    </a>
                </div>
                <nav>
                    <ul class="flex items-center gap-9">
                        <li v-for="navLink in navLinks" :key="navLink.name">
                            <a :href="navLink.link" class="py-2 font-medium">{{ navLink.name }}</a>
                        </li>
                    </ul>
                </nav>
                <div class="flex gap-3">
                    <button class="text-primary font-medium">Login</button>
                    <button class="border-primary bg-gradient-to-r from-primary to-primary-light text-white">Signup</button>
                </div>
            </div>
        </Container>
    </header>
</template>

<script setup lang="ts">
import { Container } from './index.ts'
import { navLinks } from '../../data'
</script>

