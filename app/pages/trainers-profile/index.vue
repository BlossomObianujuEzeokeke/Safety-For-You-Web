<template>
    <section>
        <Header />

        <!--- Body ---->
        <div class="pt-16 md:pt-16 lg:pt-28 bg-silver ">
            <div class="trainers-landing-page px-4 md:px-8 lg:px-16 py-8 pb-24 lg:pb-48 bg-lightGrayBg" id="">
                <h1 class="uppercase font-bold sm:text-base md:text-[28px]  text-black text-center py-4 md:py-12">
                    Profile of Key Personnel Trainers
                </h1>
            
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <!-- Card 1 -->
                    <NuxtLink :to="`/trainers-profile/${trainersData[1].slug.current}`" class="px-8 py-12 mb-[14px] shadow-lg rounded-3xl border hover:cursor-pointer border-mainGreen bg-white">
                        <h3 class=" text-semiDarkGreen font-bold text-lg md:text-xl pb-4">{{ trainersData[1].name }}</h3>
                        <div class="pt-4">
                            <p class="font-semibold text-base text-black ">Profile Summary:</p>
                            <p class="font-medium text-[17px] text-darkGray leading-8">
                                <!-- <PortableText :value="trainersData[1].profileSummary" /> -->
                                {{ trainersData[1].profileSummary[0].children[0].text }}...
                                <span class=" text-linkBlue underline font-medium hover:text-linkBlue/45">See More</span>
                            </p>
                        </div>
                    </NuxtLink>

                    <!--Card 2 -->
                    <NuxtLink :to="`/trainers-profile/${trainersData[0].slug.current}`"  class="px-8 py-12 mb-[14px] shadow-lg rounded-3xl border hover:cursor-pointer border-mainGreen bg-white">
                        <h3 class=" text-semiDarkGreen font-bold text-lg md:text-xl pb-4">{{ trainersData[0].name }}</h3>
                        <div class="pt-4">
                            <p class="font-semibold text-base text-black">Profile Summary:</p>
                            <p class="font-medium text-[17px] text-darkGray leading-8">
                                <!-- <PortableText :value="trainersData[0].profileSummary" /> -->
                                {{ trainersData[0].profileSummary[0].children[0].text }}...
                                <span class=" text-linkBlue underline font-medium hover:text-linkBlue/45">See More</span>
                            </p>
                        </div>
                    </NuxtLink>

                    <!-- Card 3 -->
                    <NuxtLink :to="`/trainers-profile/${trainersData[4].slug.current}`" class="px-8 py-12 mb-[14px] shadow-lg rounded-3xl border hover:cursor-pointer border-mainGreen bg-white">
                        <h3 class=" text-semiDarkGreen font-bold text-lg md:text-xl pb-4">{{ trainersData[4].name }}</h3>
                        <div class="pt-4">
                            <p class="font-semibold text-base text-black">Profile Summary:</p>
                            <p class="font-medium text-[17px] text-darkGray leading-8">
                                <!-- <PortableText :value="trainersData[4].profileSummary" /> -->
                                {{ trainersData[4].profileSummary[0].children[0].text }}...
                                <span class=" text-linkBlue underline font-medium hover:text-linkBlue/45">See More</span>
                            </p>
                        </div>
                    </NuxtLink>

                    <!-- Card 4 -->
                    <NuxtLink :to="`/trainers-profile/${trainersData[2].slug.current}`" class="px-8 py-12 mb-[14px] shadow-lg rounded-3xl border hover:cursor-pointer border-mainGreen bg-white">
                        <h3 class=" text-semiDarkGreen font-bold text-lg md:text-xl pb-4">{{ trainersData[2].name }}</h3>
                        <div class="pt-4">
                            <p class="font-semibold text-base text-black">Profile Summary:</p>
                            <p class="font-medium text-[17px] text-darkGray leading-8">
                                {{ truncatedProfileSummary }}...
                                <span class="text-linkBlue underline font-medium hover:text-linkBlue/45">See More</span>
                              </p>
                        </div>
                    </NuxtLink>

                    <!-- Card 5 -->
                    <NuxtLink :to="`/trainers-profile/${trainersData[3].slug.current}`" class="px-8 py-12 mb-[14px] shadow-lg rounded-3xl border hover:cursor-pointer border-mainGreen bg-white">
                        <h3 class="text-semiDarkGreen font-bold text-lg md:text-xl pb-4">{{ trainersData[3].name }}</h3>
                        <div class="pt-4">
                            <p class="font-bold text-base text-black">Profile Summary:</p>
                            <p class="font-medium text-[17px] text-darkGray leading-8">
                                <!-- <PortableText :value="trainersData[3].profileSummary" /> -->
                                {{ trainersData[1].profileSummary[0].children[0].text }}...
                                <span class=" text-linkBlue underline font-medium hover:text-linkBlue/45">See More</span>
                            </p>
                        </div>
                    </NuxtLink>

                </div>
            </div>
        </div>
        <Footer />
    </section>
</template>

<script setup lang="ts">

import {ref, computed} from 'vue'
import { PortableText } from '@portabletext/vue'

const queryTrainers = groq`*[_type in 
        [
            "alexObioraTrainerPage", 
            "kamsyMaduekeTrainerPage",  
            "nwaobiAnthonyTrainerPage", 
            "princewillEkejiTrainerPage", 
            "nnodiReginaldTrainerPage", 
        ]
    ]
    { name, slug, profileSummary}
    `
  const { data: trainers} = await useSanityQuery(queryTrainers) 

  // If it's a ref, access its value directly
const trainersData = ref(trainers.value);

// Find Kamsy Madueke's data (replace 'kamsy-madueke' with the actual slug if needed)
const trainer = computed(() => {
  return trainersData.value.find(t => t.slug.current === 'kamsy-madueke');
});



// Truncate function for block content (profileSummary)
const truncateText = (text: string, length: number): string => {
  return text.length > length ? text.slice(0, length) + '...' : text;
};

// Truncate the profileSummary for Kamsy Madueke
const truncatedProfileSummary = computed(() => {
  if (trainer.value?.profileSummary[0]?.children[0]?.text) {
    const fullText = trainer.value.profileSummary[0].children[0].text;
    console.log(fullText.length)
    return truncateText(fullText, 220); // Truncate to 100 characters
  } else {
    return '';
  }
  
});

console.log(trainersData)
  
</script>

<style scoped>


/* For small screens */
@media (max-width: 767px) {
    #privacy-policy {
        background-size: 150px;
    }
}

</style>