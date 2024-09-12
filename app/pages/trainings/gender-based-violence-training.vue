<template>
  <div>
      <Header />

      <!-- Body -->
      <section class="container mx-auto  px-8 lg:px-16 pb-32 pt-32 md:pt-36">
              <!-- Breadcrumb -->
              <div class="flex space-x-2 py-4 lg:py-10">
                  <NuxtLink to='/trainings' class="font-bold text-base">Back</NuxtLink>
                  <span class="text-darkGreen">|</span>
                  <p class="font-semibold text-base text-semiDarkGreen"> {{ training[0].title }} </p>
              </div>

              <div class="lg:px-16">
                  <h1 class="text-3xl font-bold text-black mb-8">
                      {{ training[0].title }}
                  </h1>

                  <div class="leading-8 font-medium text-[17px] text-darkGray mb-8">
                      <PortableText :value="training[0].description" />
                  </div>

                  <div class="mb-8">
                    <h3 class="font-bold text-black text-base">Training Objectives:</h3>
                    <ul v-for="item in training[0].trainingObjectives" :key="item.id" class="list-disc pl-5 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">
                      <li>{{ item }}</li>
                    </ul>
                  </div>

                  <div class="mb-8">
                    <h3 class="font-bold text-black text-base">Key Benefits:</h3>
                    <ul v-for="item in training[0].keyBenefits" :key="item.id" class="list-disc pl-5 mt-2 space-y-1 leading-8 font-medium text-[17px] text-darkGray">
                      <li>{{ item }}</li>
                    </ul>
                  </div>

      
              </div>
      </section>

      <Footer />
  </div>
</template>

<script setup lang="ts">

  import { PortableText } from '@portabletext/vue'

  // const route = useRoute()

  const query = groq`*[ _type == "genderBasedViolenceTraining" ]`
  const { data: training } = await useSanityQuery(query)

  console.log(training)

</script>

<style scoped>

</style>