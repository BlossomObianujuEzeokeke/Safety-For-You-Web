<template>
    <div>
        <Header />
  
        <!-- Body -->
        <section class="container mx-auto  px-8 lg:px-16 pb-32 pt-32 md:pt-36">
                <!-- Breadcrumb -->
                <div class="flex space-x-2 py-4 lg:py-10">
                    <NuxtLink to='/trainings' class="font-bold text-base">Back</NuxtLink>
                    <span class="text-darkGreen">|</span>
                    <p class="font-semibold text-base text-semiDarkGreen"> {{ training[0].title }} </p>
                </div>

                <div class="lg:px-16">
                    <h1 class="text-3xl font-bold text-black mb-8">
                        {{ training[0].title }}
                    </h1>

                    <div class="leading-8 font-medium text-[17px] text-darkGray mb-8">
                        <h2>Description</h2>
                        <PortableText :value="training[0].description" />
                    </div>

                    <div class="leading-8 font-medium text-darkGray text-[17px] mb-12">
                        <h2 class="font-bold text-base text-black">Practical Benefits</h2>
                        <PortableText :value="training[0].practicalBenefits" />
                    </div>

                    <div class="leading-8 font-medium text-darkGray text-[17px] mb-12">
                        <h2 class="font-bold text-base text-black">Training Objectives</h2>
                        <PortableText :value="training[0].trainingObjectives" />
                    </div>
                </div>
        </section>
  
        <Footer />
    </div>
  </template>
  
  <script setup lang="ts">

    import { PortableText } from '@portabletext/vue'

    // const route = useRoute()

    const query = groq`*[ _type == "emergencyResponseTraining" ]`
    const { data: training } = await useSanityQuery(query)

    console.log(training)
  
  </script>
  
  <style scoped>
  
  </style>