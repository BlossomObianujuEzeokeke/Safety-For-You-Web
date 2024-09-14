<template>
    <div>
         <Header />
         <!-- Body -->
         <section class="trainers-landing-page container mx-auto  px-8 lg:px-16 pb-32 pt-16 md:pt-8 lg:pt-28" id="">
                 <!-- Breadcrumb -->
             <div class="flex space-x-2 py-14">
                 <NuxtLink to='/trainers-profile' class="font-bold text-base text-darkGreen">Back</NuxtLink>
                 <span class="text-darkGreen">|</span>
                 <p class="font-semibold text-base text-mainGreen">{{ item[0].name }}</p>
             </div>
 
             <div class="lg:px-16">
                <h1 class="text-3xl font-bold text-semiDarkGreen mb-8 uppercase">{{ item[0].name}}</h1>
             
                <div v-if="item[0].professionalProfile" class="leading-8 font-medium text-[17px] text-darkGray">
                    <h3 class="font-semibold text-lg text-black">Profile Summary:</h3>
                    <PortableText :value="item[0].professionalProfile" />
                </div>
   
                <div class="mt-6" v-if="item[0].certifications">
                    <h3 class="font-semibold text-lg text-black">Key Training and Certifications:</h3>
                    <ul class=" list-disc pl-5 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">
                        <li v-for="certification in item[0].certifications" :key="certification.id" class="">
                            {{ certification }}
                        </li>
                    </ul>
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
 
     const query = groq`*[ _type == "alexObioraTrainerPage" ]`
     const { data: item } = await useSanityQuery(query)
 
     console.log(item)
 </script>
 
 <style scoped>
 
 
 </style>