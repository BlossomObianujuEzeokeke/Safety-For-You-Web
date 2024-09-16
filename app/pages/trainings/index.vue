<template>
    <section>
        <Header />
        <!--- Body --->
         <div class="pt-16 md:pt-8 lg:pt-28 overflow-hidden">
             <!-------- Hero ------->
            <section class="lg:flex w-full h-[300px] md:h-[420px] ">
                <div class="hidden lg:block w-full lg:w-1/2" id="trainings-left-hero">
                    <!-- Left hero section content -->
                </div>
                <div class=" flex flex-col items-center justify-end sm:justify-center h-full w-full lg:w-1/2 pb-8 sm:pb-10 pt-16 md:pb-0 space-y-4 sm:space-y-5 md:space-y-8" id="trainings-right-hero">
                    <h1 class="uppercase font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white z-10">train with us</h1>
                    
                    <!-- Image with circular gradient overlay -->
                    <!-- <div class="relative w-28 sm:w-36 md:w-48">
                        <img class="w-full h-full rounded-full" src="../assets/images/S4U.png" alt="Safety For You Logo">
                        <div class="absolute top-1 left-2 w-44 h-44 rounded-full bg-gradient-to-b from-[rgba(0,82,38,0.8)] to-[rgba(0,82,38,0.8)] z-10"></div>
                    </div> -->

                    <div class="relative w-16 h-16 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36">
                        <!-- Image -->
                        <img class="w-full h-full relative z-10 rounded-full object-cover" src="../../assets/images/safety_for_you_logo.png" alt="Safety For You Logo">
                        
                        <!-- Background overlay (same size as the image) -->
                        <div class="absolute inset-0 w-full h-full rounded-full bg-gradient-to-b from-[rgba(0,82,38,0.1)] to-[rgba(0,82,38,0.1)] lg:from-[rgba(0,82,38,0.5)] lg:to-[rgba(0,82,38,0.5)] z-20"></div>
                    </div>
                    
                </div>
                
            </section>

            <div class="px-4 md:px-8 lg:px-16 py-8 pb-24 lg:pb-48 bg-lightGrayBg" id="trainers-landing-page">
                <h2 class="uppercase font-bold text-2xl sm:text-3xl lg:text-[28px] xl:text-4xl text-darkGreen py-4 md:py-6 lg:py-8">
                    our trainings
                </h2>


                <p class="text-darkGray text-base lg:text-[17px] leading-8 font-medium">
                    We are Safety For You Services Ltd, your trusted partner in Health, Safety, Security, and Environmental (HSE) training. Our expert trainers provide tailored programs to ensure your team is prepared for any challenge, especially in high-risk areas.
                </p>
            
                <div class="py-2 text-base lg:text-[17px]">
                    <h6 class="capitalize font-bold py-4">Key Training Programs</h6>
                    <div class=" font-medium space-y-1 divide-y-2 divide-darkGray/15 lg:divide-y-0 text-linkBlue leading-8 flex flex-col lg:text-darkGray">
                        <!-- <span class="">- Certified Trainers: </span> -->
                        <NuxtLink :to="`/trainings/${trainingsData[4].slug.current}`" class="py-3 hover:underline hover:text-linkBlue hover:cursor-pointer decoration-linkBlue">- {{ trainingsData[4].title }}</NuxtLink>
                        <NuxtLink :to="`/trainings/${trainingsData[5].slug.current}`" class="py-3 hover:underline hover:text-linkBlue hover:cursor-pointer decoration-linkBlue">- {{ trainingsData[5].title }}</NuxtLink>
                        <NuxtLink :to="`/trainings/${trainingsData[3].slug.current}`" class="py-3 hover:underline hover:text-linkBlue hover:cursor-pointer decoration-linkBlue">- {{ trainingsData[3].title }}</NuxtLink>
                        <NuxtLink :to="`/trainings/${trainingsData[0].slug.current}`" class="py-3 hover:underline hover:text-linkBlue hover:cursor-pointer decoration-linkBlue">- {{ trainingsData[0].title }}</NuxtLink>
                        <NuxtLink :to="`/trainings/${trainingsData[1].slug.current}`" class="py-3 hover:underline hover:text-linkBlue hover:cursor-pointer decoration-linkBlue">- {{ trainingsData[1].title }}</NuxtLink>
                        <NuxtLink :to="`/trainings/${trainingsData[6].slug.current}`" class="py-3 hover:underline hover:text-linkBlue hover:cursor-pointer decoration-linkBlue">- {{ trainingsData[6].title }}</NuxtLink>
                        <NuxtLink :to="`/trainings/${trainingsData[2].slug.current}`" class="py-3 hover:underline hover:text-linkBlue hover:cursor-pointer decoration-linkBlue">- {{ trainingsData[2].title }}</NuxtLink>
                    </div>
                </div>

                <div class="py-2 text-base lg:text-[17px]">
                    <h6 class="capitalize  font-bold py-4">Why Choose Us?</h6>
                    <div class=" text-darkGray font-medium space-y-1 leading-8">
                        <!-- <span class="">- Certified Trainers: </span> -->
                        <p>
                            Investing in HSE training with Safety For You Services Ltd enhances productivity, reduces risks, and ensures compliance with industry standards. Our programs promote a culture of safety, support operational sustainability, and protect your workforce.
                             Contact us today to learn more about our training programs and achieve your HSE objectives.
                        </p>

                    </div>
                </div>

                <div class="mt-8">
                    <h2 class="capitalize font-bold text-center md:text-start text-3xl lg:text-4xl text-semiDarkGreen py-4 md:py-6 lg:py-8">
                        customer support / suggestion box
                    </h2>
                    <ul class="list-decimal space-y-12 font-medium text-[17px] text-black px-4">
                        <li class="border-b py-3">Was your experience seamless?</li>
                        <li class="border-b pb-4">Did our training courses meet your needs?</li>
                        <li class="border-b pb-4">Which course do you find the most sought after?</li>
                        <li class="border-b pb-4">What new course would you like us to add?</li>
                        <li class="border-b pb-4">How can we improve your overall experience on our website?</li>
                    </ul>
                </div>

                <div class=" md:flex items-center justify-center gap-x-3 font-bold bg-veryLightGreen py-4 px-4 mt-12 text-center text-darkGreen rounded-2xl">
                    <span>Please send your feedback here</span>
                    <span class="flex items-center justify-center gap-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 17C2.20435 17 1.44129 16.6642 0.87868 16.0664C0.316071 15.4686 0 14.6579 0 13.8125V3.1875C0 2.34212 0.316071 1.53137 0.87868 0.933597C1.44129 0.335825 2.20435 0 3 0H17C17.7956 0 18.5587 0.335825 19.1213 0.933597C19.6839 1.53137 20 2.34212 20 3.1875V13.8125C20 14.6579 19.6839 15.4686 19.1213 16.0664C18.5587 16.6642 17.7956 17 17 17H3ZM5.625 4.48375C5.52313 4.39133 5.40483 4.3216 5.27711 4.27869C5.1494 4.23578 5.01487 4.22058 4.88151 4.23397C4.74816 4.24737 4.61869 4.28909 4.50081 4.35667C4.38292 4.42425 4.27901 4.5163 4.19525 4.62737C4.11149 4.73843 4.04959 4.86625 4.01321 5.00322C3.97684 5.14019 3.96673 5.28354 3.9835 5.42474C4.00026 5.56594 4.04356 5.70213 4.11081 5.82521C4.17806 5.94829 4.2679 6.05577 4.375 6.14125L8.125 9.32981C8.65709 9.78245 9.31838 10.0291 10 10.0291C10.6816 10.0291 11.3429 9.78245 11.875 9.32981L15.625 6.14231C15.7276 6.05511 15.813 5.94729 15.8763 5.82502C15.9396 5.70275 15.9797 5.56842 15.9942 5.4297C16.0087 5.29098 15.9973 5.15059 15.9607 5.01654C15.9241 4.88249 15.8631 4.75741 15.781 4.64844C15.6989 4.53946 15.5974 4.44874 15.4824 4.38143C15.3673 4.31413 15.2409 4.27156 15.1103 4.25617C14.9798 4.24078 14.8476 4.25286 14.7215 4.29173C14.5953 4.33059 14.4776 4.39548 14.375 4.48269L10.625 7.67019C10.4476 7.82107 10.2272 7.90327 10 7.90327C9.77279 7.90327 9.55236 7.82107 9.375 7.67019L5.625 4.48375Z" fill="#005226"/>
                        </svg>
                        <a href="mailto:info@safetyforyou.ng?subject=Inquiry">info@safetyforyou.ng</a>
                    </span>
                        
                </div>
            </div>
         </div>
        <Footer />
    </section>
</template>

<script setup lang="ts">

import { type Post } from '~/types/Post'
import {ref} from 'vue'

const queryTraining = groq`*[_type in 
        [
            "journeyManagementTraining", 
            "HygieneAndSanitationTraining",  
            "emergencyResponseTraining", 
            "securityTraining", 
            "genderBasedViolenceTraining", 
            "basicAndAdvancedFirefightingTraining",
            "campCoordinationandManagementTraining"
        ]
    ]
    { title, slug}
    `
  const { data: training} = await useSanityQuery(queryTraining) 

  // If it's a ref, access its value directly
const trainingsData = ref(training.value);

console.log(trainingsData)

</script>

<style scoped>

#trainings-left-hero {
    background-image: url('../../assets/images/trainings-page-hero.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

#trainings-right-hero {
    opacity: 1;
    background: linear-gradient(0deg, rgba(0, 82, 38, 0.95) 0%, rgba(0, 82, 38, 0.95) 100%),
     url('../../assets/images/trainings-page-hero.jpg') lightgray center / cover no-repeat;
  
}

@media (max-width: 1008px) {
    #trainings-right-hero {
        background: linear-gradient(0deg, rgba(0, 118, 54, 0.60) 0%, rgba(0, 118, 54, 0.60) 100%), 
        url('../../assets/images/trainings-page-hero.jpg') lightgray -71px -8.866px / 126.897% 103.114% no-repeat;
    }
}

@media screen and (max-width: 480px) {
            #right-hero {
               /**background-size: 900px 100%;**/
               background-size: cover;
            }
  }

</style>