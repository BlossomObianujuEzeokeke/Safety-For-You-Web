<template>
    <div>
        <Header />

        <!-- Body -->
        <section class="container mx-auto  px-8 lg:px-16 pb-32 pt-32 md:pt-36">
                 <!-- Breadcrumb -->
                 <div class="flex space-x-2 py-10">
                    <NuxtLink to='/trainings' class="font-bold text-base">Back</NuxtLink>
                    <span class="text-darkGreen">|</span>
                    <p class="font-semibold text-base text-semiDarkGreen"> {{ training[0].title }} </p>
                </div>
        
                <div class="lg:px-16">

                              <!-- Main Heading -->
            <h1 class="text-3xl font-bold text-black pb-8">{{ training[0].title }}</h1>
        
            <!-- Description -->
            <div class="leading-8 text-justify font-medium text-darkGray text-[17px] mb-12">
     
              <PortableText :value="training[0].description" />
            </div>
       
            <!-- Course Syllabus Heading -->
            <h2 class="text-xl font-medium text-mainGreen mt-8">Course Syllabus</h2>
        
            <!-- Course Syllabus Grid -->
            <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        
              <!-- Column 1 -->
              <div>
                <h3 class="font-bold text-black text-base">1. Security Risk Management:</h3>
                <ul v-for="security in training[0].securityRiskManagement" :key="security.id" class="list-disc pl-5 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">
                  <li>{{ security }}</li>
                </ul>
        
                <h3 class="font-bold text-black text-base mt-4">2. First Aid:</h3>
                <ul v-for="item in training[0].firstAid " :key="item.id" class="list-disc pl-5 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">
                  <li>{{ item }}</li>
                </ul>
        
                <h3 class="font-bold text-black text-base mt-4">3. Building Security:</h3>
                <ul v-for="item in training[0].buildingSecurity" :key="item.id" class="list-disc pl-5 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">
                  <li>{{ item }}</li>
                </ul>
        
                <h3 class="font-bold text-black text-base mt-4">4. Safe Movement:</h3>
                <ul v-for="item in training[0].safeMovement" :key="item.id" class="list-disc pl-5 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">
                  <li>{{ item }}</li>
                </ul>
              </div>
        
              <!-- Column 2 -->
              <div>
                <h3 class="font-bold text-black text-base">5. Weapons and Explosives:</h3>
                <ul v-for="item in training[0].weaponsAndExplosives" :key="item.id" class="list-disc pl-5 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">
                  <li>{{ item }}</li>
                </ul>
        
                <h3 class="font-bold text-black text-base mt-4">6. Kidnap Awareness and Hostage Survival:</h3>
                <ul v-for="item in training[0].kidnapAwarenessandHostageSurvival" :key="item.id" class="list-disc pl-5 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">
                  <li>{{ item }}</li>
                </ul>
        
                <h3 class="font-bold text-black text-base mt-4">7. Communications:</h3>
                <ul v-for="item in training[0].communication" :key="item.id" class="list-disc pl-5 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">
                  <li>{{ item }}.</li>
                </ul>
        
                <h3 class="font-bold text-black text-base mt-4">8. Resilience:</h3>
                <ul v-for="item in training[0].resilience" :key="item.id" class="list-disc pl-5 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">   
                  <li>{{ item }}.</li>
                </ul>
              </div>
        
            </div>
        
            <!-- Key Benefits Section -->
            <div class="mt-8">
              <h2 class="font-bold text-black text-base">Key Benefits:</h2>
              <ul  v-for="item in training[0].keyBenefits" :key="item.id" class="list-disc pl-5 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">
                  <li>{{ item }}.</li>
              </ul>
            </div>

                </div>
        
        </section>

        <Footer />
    </div>
</template>

<script setup lang="ts">

import { PortableText } from '@portabletext/vue'

// const route = useRoute()

const query = groq`*[ _type == "securityTraining" ]`
const { data: training } = await useSanityQuery(query)

console.log(training)

</script>

<style scoped>

</style>