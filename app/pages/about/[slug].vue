<template>
    <div>
        <Header />
        <!-- Body -->
        <div id="team-details-page" class="pt-16 md:pt-16 lg:pt-28 px-16">

            <!-- Breadcrumb -->
            <div class="flex space-x-2 py-10">
                <NuxtLink to='/about' class="font-bold text-base">Back</NuxtLink>
                <span class="text-darkGreen">|</span>
                <p class="font-semibold text-base text-semiDarkGreen">{{ item.name }}</p>
            </div>

           <!-- Content Wrapper -->
            <div class="flex space-x-8">
                <!-- Left Column: Fixed Image Section -->
                <div class=" team-member-card w-2/5 min-h-[400px] h-[900px] sm:h-[290px] max-w-96 bg-white rounded-3xl border-[3px] border-darkGreen overflow-hidden">
                    <img class="object-cover w-full h-full" :src="$urlFor(item.image).width(1920).url()" :alt="item.name">
                </div>
          
                <!-- Right Column: Text Content Section -->
                <div class="mt-36 md:mt-0 w-3/5">
                    <h1 class="font-bold text-[28px] text-darkGreen">{{ item.name }}</h1>
                    <div v-if="item.professionalProfile" class="leading-8 font-medium text-[17px] text-darkGray">
                        <h3 class="font-semibold text-lg text-black">Professional Profile:</h3>
                        <PortableText :value="item.professionalProfile" />
                    </div>
                
                    <div class="py-4" v-if="item.keyAchievements">
                        <h3 class="font-semibold text-lg text-black">Key Achievements:</h3>
                        <ul class="leading-8 font-medium text-[17px] text-darkGray list-none">
                        <li v-for="achievement in item.keyAchievements" :key="achievement.id" class="">
                           <span>-</span> {{ achievement }}
                        </li>
                        </ul>
                    </div>
                
                    <div class="py-4" v-if="item.certifications">
                        <h3 class="font-semibold text-lg text-black">Certifications:</h3>
                        <ul class="leading-8 font-medium text-[17px] text-darkGray list-none">
                        <li v-for="certification in item.certifications" :key="certification.id" class="">
                           <span>-</span> {{ certification }}
                        </li>
                        </ul>
                    </div>

                    <div class="py-4" v-if="item.scopeOfServices">
                        <h3 class="font-semibold text-lg text-black">Her scope of services include but is not limited to the following:</h3>
                        <ul class="leading-8 font-medium text-[17px] text-darkGray list-none">
                        <li v-for="item in item.scopeOfServices" :key="item.id" class="">
                           <span>-</span> {{ item }}
                        </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!--- More content -->
            <div class="flex">
                <div v-if="item.hseLeadership">
                    <h3 class="font-semibold text-lg text-black">HSE Leadership:</h3>
                    <ul class="leading-8 font-medium text-[17px] text-darkGray list-none">
                        <li v-for="item in item.hseLeadership" :key="item.id" class="">
                        <span>-</span> {{ item }}
                        </li>
                    </ul>
                </div>
                <div v-if="item.educationalBackground">
                    <h3 class="font-semibold text-lg text-black">Educaional Background:</h3>
                    <ul class="leading-8 font-medium text-[17px] text-darkGray list-none">
                        <li v-for="item in item.educationalBackground" :key="item.id" class="">
                        <span>-</span>  {{ item }}
                        </li>
                    </ul>
                </div>
            </div>

            <div class="flex">
                <div v-if="item.currentRole">
                    <h3 class="font-semibold text-lg text-black">Current Role:</h3>
                    <ul class="leading-8 font-medium text-[17px] text-darkGray list-none">
                        <li v-for="item in item.currentRole" :key="item.id" class="">
                        <span>-</span> {{ item }}
                        </li>
                    </ul>
                </div>

                <div v-if="item.careersMilestones">
                    <h3 class="font-semibold text-lg text-black">Career Milestones:</h3>
                    <ul class="leading-8 font-medium text-[17px] text-darkGray list-none">
                        <li v-for="item in item.careersMilestones" :key="item.id" class="">
                            <span>-</span> {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
  
  
        </div>
        <Footer />
    </div>
</template>


<script setup lang="ts">
import { type Post } from '~/types/Post'
import { PortableText } from '@portabletext/vue'

const route = useRoute()

console.log(route.params.slug)

const query = groq`*[ _type == "team" && slug.current == $slug][0]`
const { data: item } = await useSanityQuery<Post>(query, {
  slug: route.params.slug,
})

console.log(item)
</script>


<style scoped>

#team-details-page {
    background-image: url('../../assets/images/team-svg-bg.svg');
    background-position: top right;
    background-repeat: no-repeat;
    background-size: 300px;
}

.team-member-card {
    background-image: url('../../assets/images/team-card-bg.svg');
    background-repeat: no-repeat;
    background-size: cover;
  
}

</style>