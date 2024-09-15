<template>
    <div>
        <Header></Header>
        <section class="container mx-auto p-6 px-8 lg:px-16 pb-32 pt-16 md:pt-8 lg:pt-40">
            <!-- Breadcrumb -->
            <div class="flex space-x-2 py-10">
                <NuxtLink to='/about' class="font-bold text-base">Back</NuxtLink>
                <span class="text-darkGreen">|</span>
                <p class="font-semibold text-base text-semiDarkGreen">{{ item[0].name }}</p>
            </div>
        
            <div class="flex flex-col md:flex-row gap-8 lg:px-16">
        
            <!-- Left Column: Image and Profile -->
            <!-- <div class="md:w-1/3 w-full flex justify-center">
                <img src="../../assets/images/princewill-ekeji.png" alt="Princewill Ekeji" class="rounded-lg shadow-lg w-64 h-64 object-cover">
            </div> -->
            <!-- Left Column: Image -->
            <div class="team-card flex justify-center md:w-2/5 w-full lg:h-auto h-[300px] sm:h-[290px] bg-white rounded-3xl border-[2px]  overflow-hidden border-mainGreen flex-col">
                <!-- Image Section -->
                <div class="flex-grow overflow-hidden">
                     <img class="object-cover w-full h-full " :src="$urlFor(item[0].image).width(1920).url()"  :alt="item[0].name">
                </div>
            </div>
        
            <!-- Right Column: Content -->
            <div class="md:w-3/5 w-full">
                <h1 class="text-3xl font-bold text-darkGreen pb-4 text-center lg:text-start">{{ item[0].name }}</h1>
        
                <!-- Professional Profile -->
                <div v-if="item[0].professionalProfile" class="leading-8 font-medium text-[17px] text-darkGray">
                    <h3 class="font-semibold text-lg text-black">Professional Profile:</h3>
                    <PortableText :value="item[0].professionalProfile" />
                </div>
        
                <!-- Career Milestones -->
                <div class="mt-6" v-if="item[0].careersMilestones">
                    <h2 class="text-xl font-semibold">Career Milestones:</h2>
                    <ul class="leading-8 font-medium text-[17px] text-darkGray list-disc pl-5 mt-2 space-y-1">
                        <li v-for="item in item[0].careersMilestones" :key="item.id">{{ item }}</li>
                    </ul>
                </div>
        
            </div>
            </div>
        
            <!-- HSE Leadership, Current Role, Education, Key Achievements -->
            <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-16">
        
            <!-- HSE Leadership -->
            <div v-if="item[0].hseLeadership">
                <h2 class="text-xl font-semibold">HSE Leadership:</h2>
                <ul v-for="(item) in item[0].hseLeadership" :key="item.id" class="leading-8 font-medium text-[17px] text-darkGray list-disc pl-5 mt-2 space-y-1">
                    <li>{{ item }}</li>
                </ul>
            </div>
        
            <!-- Current Role -->
            <div v-if="item[0].currentRole">
                <h2 class="text-xl font-semibold">Current Role:</h2>
                <ul v-for="(item) in item[0].currentRole" :key="item.id" class="leading-8 font-medium text-[17px] text-darkGray list-disc pl-5 mt-2 space-y-1">
                    <li>{{ item }}</li>
                </ul>
            </div>
        
            <!-- Educational Background -->
            <div v-if="item[0].educationalBackground">
                <h2 class="text-xl font-semibold">Educational Background:</h2>
                <ul v-for="(item) in item[0].educationalBackground" :key="item.id" class="leading-8 font-medium text-[17px] text-darkGray list-disc pl-5 mt-2 space-y-1">
                    <li>{{ item }}</li>
                </ul>
            </div>
        
            <!-- Key Achievements -->
            <div v-if="item[0].keyAchievements">
                <h2 class="text-xl font-semibold">Key Achievements:</h2>
                <ul v-for="(item) in item[0].keyAchievements" :key="item.id" class="leading-8 font-medium text-[17px] text-darkGray list-disc pl-5 mt-2 space-y-1">
                    <li>{{ item }}</li>
                </ul>
            </div>
        
            </div>
        </section>
        <Footer></Footer>
    </div>
      
</template>

<script setup lang="ts">
    import { type Post } from '~/types/Post'
     import { PortableText } from '@portabletext/vue'
 
     // const route = useRoute()
 
     const query = groq`*[ _type == "princewillTeamPage" ]`
     const { data: item } = await useSanityQuery(query)
 
     console.log(item)
</script>

<style scoped>
     
 .team-card {
    background-image: url('../../assets/images/team-card-bg.svg');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>