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

              <section class="container mx-auto py-8 lg:px-16">
            
                <!-- Page Title -->
                <h1 class="text-3xl font-bold text-gray-800 mb-8">
                  {{ training[0].title }}
                </h1>
            
                <!-- Introduction -->
                <div class="leading-8 font-medium text-[17px] text-darkGray mb-8">
                  <PortableText :value="training[0].description" />
                </div>
            
                <!-- Key Benefits Section -->
                <div class="mb-12">
                  <h2 class="font-semibold text-lg text-black">Key Benefits</h2>
                  <ul class="leading-8 font-medium text-[17px] text-darkGray list-disc pl-5 mt-2 space-y-1">
                    <li v-for="benefit in training[0].benefits" :key="benefit.id" class="">
                        {{ benefit }}
                    </li>
                    </ul>
                </div>
            
                <!-- Course Overview Section -->
                 <div>
                  <h2 class="text-lg font-bold text-mainGreen mb-4">Course Overview</h2>

                  <div class="grid grid-cols-1 lg:grid-cols-2 space-x-0 lg:space-x-24">

                    <!-- Safe Driving Course & Course Objectives -->
                    <div class="">
                      
                      <div class=" mb-8 md:mb-40">
                        <div v-if="training[0].safeDrivingCourse" class="leading-8 font-medium text-[17px] text-darkGray">
                          <h3 class="font-semibold text-lg text-black">Safe Driving Course:</h3>
                          <PortableText :value="training[0].safeDrivingCourse" />
                      </div>
                    </div>
              
                      <div>
                        <h4 class="text-base font-bold text-black mb-2">Course Objectives:</h4>
                        <ul class="leading-8 font-medium text-[17px] text-darkGray list-disc pl-0 lg:pl-5 mt-2 space-y-1">
                          <li v-for="objective in training[0].courseObjectives" :key="objective.id" class="">
                              {{ objective }}
                          </li>
                        </ul>
                      </div>
                    </div>
              
                    <!-- Program Components and Key Benefits -->
                    <div>
                        <div class="mb-8">
                          <h3 class="text-base font-bold text-black mb-4">Program Components</h3>
                          <ul class="leading-8 font-medium text-[17px] text-darkGray list-disc pl-0 lg:pl-5 mt-2 space-y-1">
                            <li v-for="component in training[0].programComponent" :key="component.id" class="">
                                {{ component }}
                            </li>
                            </ul>
                        </div>
              
                      <div>
                        <h4 class="text-base font-bold text-black mb-4">Key Benefits:</h4>
                        <ul class="leading-8 font-medium text-[17px] text-darkGray list-disc pl-0 lg:pl-5 mt-2 space-y-1">
                          <li v-for="keyBenefit in training[0].keyBenefits" :key="keyBenefit.id" class="">
                              {{ keyBenefit }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                 </div>
          
              </section>
   
      
      </section>

      <Footer />
  </div>
</template>

<script setup lang="ts">

import { PortableText } from '@portabletext/vue'

// const route = useRoute()

const query = groq`*[ _type == "journeyManagementTraining" ]`
const { data: training } = await useSanityQuery(query)

console.log(training)

</script>

<style scoped>

</style>