<template>
    <div>
        <Header />
            <section class="trainers-landing-page container mx-auto px-8 lg:px-16 pb-32 pt-16 md:pt-8 lg:pt-28">
                <!-- Breadcrumb -->
                <div class="flex space-x-2 py-14">
                    <NuxtLink to='/trainers-profile' class="font-bold text-base text-darkGreen">Back</NuxtLink>
                    <span class="text-darkGreen">|</span>
                    <p class="font-semibold text-base text-mainGreen">{{ trainer[0].name }}</p>
                </div>
              
                <div class="lg:px-16">
                    <!-- Title Section -->
                    <div class="mb-6">
                        <h1 class="text-3xl font-bold text-semiDarkGreen pb-5 md:pb-8 md:pt-2 uppercase">{{ trainer[0].name }}</h1>

                        <div class="lg:pr-96">
                            <div v-if="trainer[0].profileSummary" class="leading-8 font-medium text-[17px] text-darkGray">
                                <h3 class="text-[17px] font-semibold text-black">Profile Summary:</h3>
                                <PortableText :value="trainer[0].profileSummary" />
                            </div>
                    
                            <div>
                                <h2 class="text-[17px] font-semibold mb-4">Career Milestones:</h2>
                                <ul class=" list-disc pl-5 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">
                                    <li v-for="career in trainer[0].careersMilestones" :key="career.id" class="">
                                        {{ career }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                
                    <!-- Main content area: Two columns on larger screens, stack on mobile -->
                    <div class="grid grid-cols-1 md:grid-cols-2 md:space-x-16">
                    <!-- Left Column: Career details -->
                    <div>
                        <div class="mb-8">
                            <h2 class="text-[17px] font-semibold mb-2">HSE Leadership:</h2>
                            <ul class=" list-disc pl-5 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">
                                <li v-for="leadership in trainer[0].hseLeadership" :key="leadership.id" class="">
                                    {{ leadership }}
                                </li>
                            </ul>
                        </div>
                        
                        <div class="mb-8">
                            <h2 class="text-[17px] font-semibold mb-2">Current Role:</h2>
                            <ul class=" list-disc pl-5 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">
                                <li v-for="item in trainer[0].currentRole" :key="item.id" class="">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                    </div>
                
                    <!-- Right Column: Educational Background and Achievements -->
                    <div>

                        <div class="mb-8">
                            <h2 class="text-[17px] font-semibold mb-2">Educational Background:</h2>
                            <ul class=" list-disc pl-5 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">
                                <li v-for="item in trainer[0].educationalBackground" :key="item.id" class="">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                 
                        <div class="mb-8">
                            <h2 class="text-[17px] font-semibold mb-2">Key Achievements:</h2>
                            <ul class=" list-disc pl-5 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">
                                <li v-for="item in trainer[0].keyAchievements" :key="item.id" class="">
                                    {{ item }}
                                </li>
                            </ul>
                        </div>
                   
                    </div>
                    </div>
                </div>
            </section>
              
        <Footer />
    </div>
</template>

<script setup lang="ts">
     import { type Post } from '~/types/Post'
     import { PortableText } from '@portabletext/vue'
 
     // const route = useRoute()
 
     const query = groq`*[ _type == "princewillEkejiTrainerPage" ]`
     const { data: trainer } = await useSanityQuery(query)
 
     console.log(trainer)
</script>

<style scoped>

</style>