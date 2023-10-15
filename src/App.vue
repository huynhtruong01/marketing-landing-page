<script setup lang="ts">
import { HeroSection, Sponsors, ServiceSection, FeatureSection, TestmonialsSection, BlogsSection, ContactSection } from './components';
import { Header, Footer } from './components/common'
</script>

<template>
  <div>
    <Header />
    <main class="min-h-screen w-full pt-[78px]">
      <HeroSection />
      <Sponsors />
      <ServiceSection />
      <FeatureSection />
      <TestmonialsSection />
      <BlogsSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>

