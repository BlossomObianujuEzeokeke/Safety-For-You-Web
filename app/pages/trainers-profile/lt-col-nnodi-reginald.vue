<template>
    <div>
        <Header />
        <div class="trainers-landing-page container mx-auto px-8 lg:px-16 pb-32 pt-16 md:pt-8 lg:pt-28">
            <!-- Breadcrumb -->
            <div class="flex space-x-2 py-14">
                <NuxtLink to='/trainers-profile' class="font-bold text-base text-darkGreen">Back</NuxtLink>
                <span class="text-darkGreen">|</span>
                <p class="font-semibold text-base text-mainGreen">{{ trainer[0].name }}</p>
            </div>
          
            <div class="lg:px-16">
                  <!-- Title Section -->
                <div class="mb-6">
                    <h1 class="text-3xl font-bold text-semiDarkGreen pb-5 md:pb-8 md:pt-2 uppercase">{{ trainer[0].name }} (RETIRED)</h1>
                </div>
                
                <!-- Main content area: Two columns on larger screens, stack on mobile -->
                <div class="grid grid-cols-1 md:grid-cols-2 md:space-x-16">
                    <!-- Left Column: Profile, Education, and Professional Experience -->
                    <div>
                      
                        <div v-if="trainer[0].profileSummary" class="leading-8 font-medium text-[17px] text-darkGray mb-8">
                            <h3 class="text-[17px] font-semibold text-black">Profile Summary:</h3>
                            <PortableText :value="trainer[0].profileSummary" />
                        </div>
                    
                        <div v-if="trainer[0].education" class="mb-8">
                            <h2 class="text-[17px] font-semibold text-black">Education:</h2>
                            <ul class=" list-disc pl-5 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">
                                <li v-for="item in trainer[0].education" :key="item.id" class="">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                    
                        <div class="mb-8">
                            <h2 class="text-[17px] font-semibold text-black">Professional Maritime Courses:</h2>
                            <ul class=" list-disc pl-5 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">
                                <li v-for="item in trainer[0].professionalMaritimeCourses" :key="item.id" class="">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                    
                        <div class="mb-8">
                            <h2 class="text-[17px] font-semibold text-black">Military Training:</h2>
                            <ul class=" list-disc pl-5 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">
                                <li v-for="item in trainer[0].militaryTraining" :key="item.id" class="">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                    
                        <div class="mb-8">
                            <h2 class="text-[17px] font-semibold text-black">Militart Units Served:</h2>
                            <ul class=" list-disc pl-5 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">
                                <li v-for="item in trainer[0].militaryUnitsServed" :key="item.id" class="">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                    </div>
                
                    <!-- Right Column: Weapons, Military Operations, and Other Experience -->
                    <div>
                        <div class="mb-8">
                            <h2 class="text-[17px] font-semibold text-black">Weapons and Explosives:</h2>
                            <ul class=" list-disc pl-5 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">
                                <li v-for="item in trainer[0].weaponsAndExplosives" :key="item.id" class="">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                
                        <div class="mb-8">
                            <h2 class="text-[17px] font-semibold text-black">Military Operations:</h2>
                            <ul class=" list-disc pl-5 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">
                                <li v-for="item in trainer[0].militaryOperations" :key="item.id" class="">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                
                        <div class="mb-8">
                            <h2 class="text-[17px] font-semibold text-black">Post-Military Service Experience:</h2>
                            <ul class=" list-disc pl-5 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">
                                <li v-for="item in trainer[0].postMilitaryServiceExperience" :key="item.id" class="">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                
                        <div class="mb-8">
                            <h2 class="text-[17px] font-semibold text-black">Hobbies:</h2>
                            <ul class=" list-disc pl-5 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">
                                <li v-for="item in trainer[0].hobbies" :key="item.id" class="">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                
                        <div>
                            <h2 class="text-[17px] font-semibold text-black">Referees:</h2>
                            
                            <!-- Referee 1 -->
                            <div>
                                <p  class="leading-8 font-medium text-[17px] text-black">{{ trainer[0].referees[0].name }}</p>
                                <ul class=" list-disc pl-7 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">
                                    <li  class="">
                                        {{ trainer[0].referees[0].position }}
                                    </li>
                                    <li  class="">
                                        Contact: {{ trainer[0].referees[0].phone }}
                                    </li>
                                </ul>
                            </div>

                            <!-- Referee 2 -->
                            <div>
                                <p class="leading-8 font-medium text-[17px] text-black">{{ trainer[0].referees[1].name }}</p>
                                <ul class=" list-disc pl-7 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">
                                    <li  class="">
                                        Location: {{ trainer[0].referees[1].address }}
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
          </div>
          
        <Footer />
    </div>
</template>

<script setup lang="ts">
     import { type Post } from '~/types/Post'
     import { PortableText } from '@portabletext/vue'
 
     // const route = useRoute()
 
     const query = groq`*[ _type == "nnodiReginaldTrainerPage" ]`
     const { data: trainer } = await useSanityQuery(query)
 
     console.log(trainer)
</script>

<style scoped>

</style>