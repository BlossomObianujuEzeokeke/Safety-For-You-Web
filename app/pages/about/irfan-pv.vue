<template>
    <div>
         <Header />
         <!-- Body -->
         <section class="container mx-auto  px-8 lg:px-16 pb-32 pt-16 md:pt-8 lg:pt-28">
                 <!-- Breadcrumb -->
             <div class="flex space-x-2 py-10">
                 <NuxtLink to='/about' class="font-bold text-base">Back</NuxtLink>
                 <span class="text-darkGreen">|</span>
                 <p class="font-semibold text-base text-semiDarkGreen">{{ item[0].name }}</p>
             </div>
 
             <div class="flex flex-col md:flex-row items-start gap-8">
               
               <!-- Left Column: Image -->
               <div class="team-card flex justify-center md:w-1/3 w-full lg:h-auto h-[320px] sm:h-[290px] bg-white rounded-3xl border-[3px]  overflow-hidden border-mainGreen flex-col">
 
                 <!-- Image Section -->
                 <div class="flex-grow overflow-hidden">
                 <img class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-125" :src="$urlFor(item[0].image).width(1920).url()"  :alt="item[0].name">
                 </div>
         
               </div>
 
                 <!-- Right Column: Text Content -->
                 <div class="md:w-2/3 w-full">
                     <h1 class="text-3xl font-bold text-green-700">{{ item[0].name}}</h1>
             
                     <div v-if="item[0].professionalProfile" class="leading-8 font-medium text-[17px] text-darkGray">
                         <h3 class="font-semibold text-lg text-black">Professional Profile:</h3>
                         <PortableText :value="item[0].professionalProfile" />
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
 
     const query = groq`*[ _type == "irfanTeamPage" ]`
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