<template>
    <div>
         <Header />
         <!-- Body -->
         <section class=" container mx-auto  px-8 lg:px-16 pb-32 pt-16 md:pt-8 lg:pt-28" id="">
                 <!-- Breadcrumb -->
             <div class="flex space-x-2 py-14">
                 <NuxtLink to='/trainers-profile' class="font-bold text-base text-darkGreen">Back</NuxtLink>
                 <span class="text-darkGreen">|</span>
                 <p class="font-semibold text-base text-semiDarkGreen">{{ item[0].name }}</p>
             </div>
 
             <div class="lg:px-16">
                <h1 class="text-3xl font-bold text-green-700 mb-8">{{ item[0].name}}</h1>
             
                <div v-if="item[0].profileSummary" class="leading-8 font-medium text-[17px] text-darkGray">
                    <h3 class="font-semibold text-lg text-black">Profile Summary:</h3>
                    <PortableText :value="item[0].profileSummary" />
                </div>
   
                <div class="mt-6" v-if="item[0].instructorCertifications">
                    <h3 class="font-semibold text-lg text-black">Instructor/Trainer Certifications:</h3>
                    <ul class=" list-disc pl-5 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">
                        <li v-for="certification in item[0].instructorCertifications" :key="certification.id" class="">
                           <span class="font-semibold text-black">{{ certification.year }}</span> : {{ certification.certification }}
                        </li>
                    </ul>
                </div>

                <div class="mt-4">
                    <h3 class="font-semibold text-lg text-black py-2">Short Courses</h3>
                    <div class="py-4" v-for="item in item[0].shortCourses" :key="item.id">
                        <h3 class="pb-2 font-semibold text-lg text-black">{{item.year}}</h3>
                        <ul v-for="course in item.courses" :key="course.id" class=" list-disc pl-5 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">
                            <li>{{ course }}</li>
                        </ul>
                    </div>
                </div>

                <div class="mt-4">
                    <h3 class="font-semibold text-lg text-black py-2">Professional Memberships:</h3>
                
                        <ul v-for="item in item[0].professionalMemberships" :key="item.id" class=" list-disc pl-5 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">
                            <li>{{ item }}</li>
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
 
     const query = groq`*[ _type == "nwaobiAnthonyTrainerPage" ]`
     const { data: item } = await useSanityQuery(query)
 
     console.log(item)
 </script>
 
 <style scoped>
 
 
 </style>