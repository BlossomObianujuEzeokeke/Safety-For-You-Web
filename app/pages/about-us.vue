<template>
    <section>
        <Header />
        <!-------- Hero ------->
        <section class="lg:flex w-full h-[400px] lg:h-[380px]">
            <div class="hidden lg:block w-1/2" id="left-hero">

            </div>
            <div class="flex flex-col items-center justify-end md:justify-center h-full lg:w-1/2 pb-8 md:pb-0 space-y-5 md:space-y-10" id="right-hero">
                <h1 class="uppercase font-bold text-3xl md:text-6xl text-white">who we are</h1>
                <img class="w-36 md:w-44" src="../assets/images/S4U.png" alt="Safety For You Logo">
            </div>
        </section>

        <!------- About Us ----------->
        <section class="px-16 py-12">
            <h2 class=" uppercase font-bold text-3xl text-darkGreen pb-5">about us</h2>
            <p class=" text-darkGray text-lg font-medium" id="leading-p">
                Safety For You Services Ltd is a leading Health, Safety, Security, and Environmental (HSEC) consultancy. 
                We specialize in boosting HSEC performance for individuals and organizations through tailored training and expert consultancy.
            </p>
            <div class="py-2">
                <h6 class="capitalize font-bold py-4">our expertise:</h6>
                <div class=" text-darkGray text-[17px] font-medium space-y-1">
                    <!-- <span class="">- Certified Trainers: </span> -->
                     <p>- Certified Trainers: Our trainers are affiliated with top global health and medical institutions, ensuring high-quality training solutions</p>
                     <p> - Customized Programs: We offer training programs tailored to your specific needs, focusing on practical and effective safety measures.</p>
                     <p> - Comprehensive Risk Assessment: Using a 6x6 risk matrix, we assess major risks in conflict-prone humanitarian settings, identifying initial risks, control measures, and residual risks.</p>
                </div>
            </div>

            <div class="py-2">
                <h6 class="capitalize font-bold py-4">key benefits:</h6>
                <div class=" text-darkGray text-lg font-medium space-y-1">
                    <!-- <span class="">- Certified Trainers: </span> -->
                     <p>- Improved Safety and Health: Our services enhance safety and health standards, minimizing risks to people, assets, and the environment.</p>
                     <p> - Compliance with Regulations: We ensure compliance with relevant laws and international best practices, safeguarding your operations.</p>
                     <p>- Sustainable Performance: Continuous improvement and sustainability are at the heart of our HSEC strategy.</p>
                </div>
            </div>

            
            <div class="py-2">
                <h6 class="capitalize font-bold py-4">Training Programs:</h6>
                <div class=" text-darkGray text-lg font-medium space-y-1">
                    <!-- <span class="">- Certified Trainers: </span> -->
                     <p>- HSE Training: Essential for all organisations, especially NGOs working in high-risk areas</p>
                     <p>- Journery Management: Ensures safe travel for employees</p>
                     <p>- Hygiene Training: Crucial for internally displaced persons</p>
                     <p>- Security Management: Protests against potential threats</p>
                     <p>- Emergency Response: Includes First Aid. CPR, and defibrillator use</p>
                </div>
            </div>

            <div class="py-2">
                <h6 class="capitalize font-bold py-4">Consultancy Services:</h6>
                <div class=" text-darkGray text-lg font-medium space-y-1">
                    <!-- <span class="">- Certified Trainers: </span> -->
                     <p>- Procedure Development: We help develop proedures like journey management and emergency response plans.</p>
                     <p>- Adults and Guidelines: Provide comprehensive audits and guidelines for water, sanition and hygiene</p>
                </div>
            </div>

            <div class="py-2">
                <h6 class="capitalize font-bold py-4">Why Chose Us:</h6>
                <div class=" text-darkGray text-lg font-medium space-y-1">
                    <!-- <span class="">- Certified Trainers: </span> -->
                     <p>- Expertise: Over 14 years of experience in HSE management across various sectors</p>
                     <p>- Tailored Solutions: Customized training and consultancy services to meet your specific needs.</p>
                     <p>- Positive Impact: Long-lasting partnerships aimed at improving your organization's safety and environemental impact.</p>
                </div>
            </div>


        </section>

        <!--------- Our Team ----------->
        <section class="py-16 px-16 bg-lighterGray">
            <h3 class="uppercase font-bold text-3xl text-darkGreen text-center py-4">meet our team</h3>
            <p class="text-center text-darkGray text-lg font-medium">Key decision-makers at Safety for you LTD</p>

            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                <!-- Card 1 -->
                <div class="team-card group w-full h-[250px] sm:h-[300px] md:h-[150px] lg:h-[400px] border-[3px] border-borderGray rounded-2xl relative overflow-hidden hover:border-darkGreen transition-all duration-700">
                    <figure class="flex flex-col h-full pt-12">
                        <img class="object-cover w-full h-[80%] transition-transform duration-700 group-hover:scale-110" src="../assets/images/alex-obiora-cropped.png" alt="Alex Obiora">
                        <figcaption class="flex flex-col items-center justify-center bg-darkGreen text-center text-white absolute bottom-0 left-0 right-0 h-[20%] space-y-3 py-8">
                            <h2 class="font-bold text-xl">Alex Obiora</h2>
                            <div class="flex items-center justify-center w-full px-4">
                                <p class="font-medium">Managing Consultant</p>
                                <svg class="hidden md:block transition-colors duration-700 group-hover:stroke-white" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.2">
                                        <path d="M15 16.5L18.2929 13.2071C18.6834 12.8166 18.6834 12.1834 18.2929 11.7929L15 8.5M18 12.5L4 12.5" stroke="white" stroke-width="2" stroke-linecap="round" />
                                    </g>
                                </svg>
                            </div>
                        </figcaption>
                    </figure>
                </div>

                 <!-- Card 2 -->
                 <div class="team-card w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] border-2 border-borderGray rounded-2xl relative overflow-hidden hover:border-green-500 transition-all duration-300">
                    <figure class="flex flex-col h-full pt-12">
                        <img class="object-cover w-full h-[80%] transition-transform duration-300 hover:scale-105" src="../assets/images/irfan-pv-cropped.png" alt="Alex Obiora">
                        <figcaption class="flex flex-col items-center justify-center bg-darkGreen text-center text-white absolute bottom-0 left-0 right-0 h-[20%] space-y-3 py-8">
                            <h2 class="font-bold text-xl">Alex Obiora</h2>
                            <div class="flex items-center justify-center w-full px-4">
                                <p class="font-medium">Managing Consultant</p>
                                <svg class="hidden md:block transition-colors duration-300 hover:stroke-white" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.2">
                                        <path d="M15 16.5L18.2929 13.2071C18.6834 12.8166 18.6834 12.1834 18.2929 11.7929L15 8.5M18 12.5L4 12.5" stroke="white" stroke-width="2" stroke-linecap="round" />
                                    </g>
                                </svg>
                            </div>
                        </figcaption>
                    </figure>
                </div>

                 <!-- Card 3 -->
                 <div class="team-card w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] border-2 border-borderGray rounded-2xl relative overflow-hidden hover:border-green-500 transition-all duration-300">
                    <figure class="flex flex-col h-full pt-12">
                        <img class="object-cover w-full h-[80%] transition-transform duration-300 hover:scale-105" src="../assets/images/kamsy-madueke-cropped.png" alt="Alex Obiora">
                        <figcaption class="flex flex-col items-center justify-center bg-darkGreen text-center text-white absolute bottom-0 left-0 right-0 h-[20%] space-y-3 py-8">
                            <h2 class="font-bold text-xl">Alex Obiora</h2>
                            <div class="flex items-center justify-center w-full px-4">
                                <p class="font-medium">Managing Consultant</p>
                                <svg class="hidden md:block transition-colors duration-300 hover:stroke-white" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.2">
                                        <path d="M15 16.5L18.2929 13.2071C18.6834 12.8166 18.6834 12.1834 18.2929 11.7929L15 8.5M18 12.5L4 12.5" stroke="white" stroke-width="2" stroke-linecap="round" />
                                    </g>
                                </svg>
                            </div>
                        </figcaption>
                    </figure>
                </div>

                 <!-- Card 1 -->
                 <div class="team-card w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] border-2 border-borderGray rounded-2xl relative overflow-hidden hover:border-green-500 transition-all duration-300">
                    <figure class="flex flex-col h-full pt-12">
                        <img class="object-cover w-full h-[80%] transition-transform duration-300 hover:scale-105" src="../assets/images/princewill-ekeji-cropped.png" alt="Alex Obiora">
                        <figcaption class="flex flex-col items-center justify-center bg-darkGreen text-center text-white absolute bottom-0 left-0 right-0 h-[20%] space-y-3 py-8">
                            <h2 class="font-bold text-xl">Alex Obiora</h2>
                            <div class="flex items-center justify-center w-full px-4">
                                <p class="font-medium">Managing Consultant</p>
                                <svg class="hidden md:block transition-colors duration-300 hover:stroke-white" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.2">
                                        <path d="M15 16.5L18.2929 13.2071C18.6834 12.8166 18.6834 12.1834 18.2929 11.7929L15 8.5M18 12.5L4 12.5" stroke="white" stroke-width="2" stroke-linecap="round" />
                                    </g>
                                </svg>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            
                <!-- Repeat the card structure for the remaining cards -->
            
            </div>
            
              
              

        </section>
        <Footer />
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

#left-hero, #right-hero {
    background-image: url('../assets/images/about-us-hero.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

#right-hero {
    background-color: rgba(10, 70, 37, 0.8);
    background-blend-mode: overlay;
    
    
}

#leading-p {
    overflow-wrap: break-word;
  word-break: break-word;
  white-space: normal;
}

.team-card {
    background-image: url('../assets/images/background-spiral.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

@media screen and (max-width: 480px) {
            #right-hero {
               /**background-size: 900px 100%;**/
               background-size: cover;
            }
  }

</style>