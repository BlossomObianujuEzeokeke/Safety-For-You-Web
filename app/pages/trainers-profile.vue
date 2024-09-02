<template>
    <section>
        <Header />

        <!--- Body ---->
        <div class="pt-16 md:pt-16 lg:pt-28 ">
            <div class="px-4 md:px-8 lg:px-16 py-8 pb-24 lg:pb-48 bg-lightGrayBg" id="trainers-landing-page">
                <h1 class="uppercase font-bold sm:text-base md:text-[28px]  text-black text-center py-4 md:py-6 lg:py-8">
                    Profile of Key Personnel Trainers
                </h1>
            
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <NuxtLink to="" class="px-4 py-6 mb-[14px] shadow-lg rounded-2xl border hover:cursor-pointer border-green-300 bg-white">
                        <h3 class=" text-mainGreen font-bold text-lg md:text-xl">Alex Obiora</h3>
                        <div class="pt-4">
                            <p class="font-bold text-black">Profile Summary:</p>
                            <p class="font-medium text-darkGray leading-8">
                                Alex Obiora is the Managing Consultant and Head of Occupational Health and Safety Training with over 17 years of experience. 
                                He has provided consultancy services to multinational oil and gas companies and humanitarian aid organizations.....
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
  
</script>

<style scoped>

#trainers-landing-page {
    background-image: url('../assets/images/trainers-page-spiral.png');
    background-repeat: no-repeat;
    background-size: 150px;
    background-position: right 10%;
}

/* For large screens */
@media (min-width: 1024px) {
    #trainers-landing-page {
        background-size: 150px;
    }
}

/* For medium screens */
@media (min-width: 768px) and (max-width: 1023px) {
    #trainers-landing-page {
        background-size: 150px;
    }
}

/* For small screens */
@media (max-width: 767px) {
    #privacy-policy {
        background-size: 150px;
    }
}

</style>