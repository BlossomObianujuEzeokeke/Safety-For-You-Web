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
 
             <div class="flex flex-col md:flex-row items-start gap-8 lg:px-16">
               
               <!-- Left Column: Image -->
               <div class="team-card flex justify-center md:w-2/5 w-full lg:h-auto h-[320px] sm:h-[290px] bg-white rounded-3xl border-[2px]  overflow-hidden border-mainGreen flex-col">
 
                 <!-- Image Section -->
                 <div class="flex-grow overflow-hidden h-[380px]">
                 <img class="object-cover w-full h-full" :src="$urlFor(item[0].image).width(1920).url()"  :alt="item[0].name">
                 </div>
         
               </div>
 
                 <!-- Right Column: Text Content -->
                 <div class="md:w-3/5 w-full">
                     <h1 class="text-3xl font-bold text-darkGreen pb-4 text-center lg:text-start">{{ item[0].name}}</h1>
             
                     <div v-if="item[0].professionalProfile" class="leading-8 font-medium text-[17px] text-darkGray">
                         <h3 class="font-semibold text-lg text-black">Professional Profile:</h3>
                         <PortableText :value="item[0].professionalProfile" />
                     </div>
 
                     <div class="py-4" v-if="item[0].scopeOfServices">
                        <h3 class="font-semibold text-lg text-black">Her scope of services include but is not limited to the following:</h3>
                        <ul class="leading-8 font-medium text-[17px] text-darkGray list-disc pl-5 mt-2 space-y-1">
                            <li v-for="item in item[0].scopeOfServices" :key="item.id" class="">
                                {{ item }}
                            </li>
                        </ul>
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
 
     const query = groq`*[ _type == "kamsyMaduekeTeamPage" ]`
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