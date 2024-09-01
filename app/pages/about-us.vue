<template>
    <section class="overlow-hidden">
        <Header />

        <!-- Body -->
        <div class=" pt-16 md:pt-8 lg:pt-28 overflow-hidden">
                 <!-------- Hero ------->
                <section class="lg:flex w-full h-[300px] md:h-[420px] ">
                    <div class="hidden lg:block w-full lg:w-1/2" id="left-hero">
                        <!-- Left hero section content -->
                    </div>
                    <div class=" flex flex-col items-center justify-end sm:justify-center h-full w-full lg:w-1/2 pb-8 sm:pb-10 pt-16 md:pb-0 space-y-4 sm:space-y-5 md:space-y-8" id="right-hero">
                        <h1 class="uppercase font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white z-10">who we are</h1>
                        
                        <!-- Image with circular gradient overlay -->
                        <!-- <div class="relative w-28 sm:w-36 md:w-48">
                            <img class="w-full h-full rounded-full" src="../assets/images/S4U.png" alt="Safety For You Logo">
                            <div class="absolute top-1 left-2 w-44 h-44 rounded-full bg-gradient-to-b from-[rgba(0,82,38,0.8)] to-[rgba(0,82,38,0.8)] z-10"></div>
                        </div> -->

                        <div class="relative w-28 sm:w-36 md:w-48">
                            <img class="w-full h-full relative z-10 rounded-full" src="../assets/images/S4U.png" alt="Safety For You Logo">
                            <div class="absolute inset-0 w-full h-full rounded-full bg-gradient-to-b from-[rgba(0,82,38,0.5)] to-[rgba(0,82,38,0.5)] z-20"></div>
                        </div>
                        
                    </div>
                    
                </section>

                <!------- About Us ----------->
                <section class="px-6 sm:px-12 md:px-16 py-8 sm:py-10 md:py-12">
                    <h2 class="uppercase font-bold text-2xl sm:text-2xl lg:text-[28px] xl:text-4xl text-darkGreen pb-4 sm:pb-5">about us</h2>
                    <p class="text-darkGray text-base lg:text-[17px] font-medium" id="leading-p">
                        Safety For You Services Ltd is a leading Health, Safety, Security, and Environmental (HSEC) consultancy. 
                        We specialize in boosting HSEC performance for individuals and organizations through tailored training and expert consultancy.
                    </p>
                    <div class="py-2">
                        <h6 class="capitalize font-bold py-3 sm:py-4">our expertise:</h6>
                        <div class="text-darkGray text-base lg:text-[17px] font-medium space-y-1">
                            <p>- Certified Trainers: Our trainers are affiliated with top global health and medical institutions, ensuring high-quality training solutions.</p>
                            <p>- Customized Programs: We offer training programs tailored to your specific needs, focusing on practical and effective safety measures.</p>
                            <p>- Comprehensive Risk Assessment: Using a 6x6 risk matrix, we assess major risks in conflict-prone humanitarian settings, identifying initial risks, control measures, and residual risks.</p>
                        </div>
                    </div>

                    <div class="py-2">
                        <h6 class="capitalize font-bold py-3 sm:py-4">key benefits:</h6>
                        <div class="text-darkGray text-base lg:text-[17px] font-medium space-y-1">
                            <p>- Improved Safety and Health: Our services enhance safety and health standards, minimizing risks to people, assets, and the environment.</p>
                            <p>- Compliance with Regulations: We ensure compliance with relevant laws and international best practices, safeguarding your operations.</p>
                            <p>- Sustainable Performance: Continuous improvement and sustainability are at the heart of our HSEC strategy.</p>
                        </div>
                    </div>

                    <div class="py-2">
                        <h6 class="capitalize font-bold py-3 sm:py-4">Training Programs:</h6>
                        <div class="text-darkGray text-base lg:text-[17px] font-medium space-y-1">
                            <p>- HSE Training: Essential for all organisations, especially NGOs working in high-risk areas.</p>
                            <p>- Journey Management: Ensures safe travel for employees.</p>
                            <p>- Hygiene Training: Crucial for internally displaced persons.</p>
                            <p>- Security Management: Protects against potential threats.</p>
                            <p>- Emergency Response: Includes First Aid, CPR, and defibrillator use.</p>
                        </div>
                    </div>

                    <div class="py-2">
                        <h6 class="capitalize font-bold py-3 sm:py-4">Consultancy Services:</h6>
                        <div class="text-darkGray text-base lg:text-[17px] font-medium space-y-1">
                            <p>- Procedure Development: We help develop procedures like journey management and emergency response plans.</p>
                            <p>- Audits and Guidelines: Provide comprehensive audits and guidelines for water, sanitation, and hygiene.</p>
                        </div>
                    </div>

                    <div class="py-2">
                        <h6 class="capitalize font-bold py-3 sm:py-4">Why Choose Us:</h6>
                        <div class="text-darkGray text-base lg:text-[17px] font-medium space-y-1">
                            <p>- Expertise: Over 14 years of experience in HSE management across various sectors.</p>
                            <p>- Tailored Solutions: Customized training and consultancy services to meet your specific needs.</p>
                            <p>- Positive Impact: Long-lasting partnerships aimed at improving your organization's safety and environmental impact.</p>
                        </div>
                    </div>
                </section>

                <!--------- Our Team ----------->
                <section class="py-10 sm:py-12 md:py-16 px-6 sm:px-12 md:px-16 bg-lighterGray" id="team-section">
                    <h3 class="uppercase font-bold text-2xl sm:text-3xl md:text-4xl text-darkGreen text-center">meet our team</h3>
                    <p class="text-center text-darkGray text-base sm:text-lg font-medium py-5">Key decision-makers at Safety for you LTD</p>
                
                    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
                        <!-- Card 1 -->
                        <div class="team-card w-full h-auto aspect-[4/5] border-4 bg-white group border-borderGray rounded-2xl relative overflow-hidden hover:border-darkGreen transition-all duration-700">
                            <figure class="flex flex-col h-full py-8">
                                <img class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" src="../assets/images/alex-obiora-cropped.png" alt="Alex Obiorra">
                                <figcaption class="flex flex-col border-t z-10 items-center justify-center bg-darkGreen text-center text-white absolute bottom-0 left-0 right-0 h-[20%]">
                                    <h2 class="font-bold text-base lg:text-lg">Alex Obiora</h2>
                                    <div class="flex items-center justify-center w-full px-4">
                                        <p class="font-medium text-15px lg:text-base ">Managing Consultant</p>
                                        <svg class="hidden lg:block ml-2" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g class=" transition-all duration-700 group-hover:opacity-[1]" opacity="0.2">
                                                <path d="M15 16.5L18.2929 13.2071C18.6834 12.8166 18.6834 12.1834 18.2929 11.7929L15 8.5M18 12.5L4 12.5" stroke="white" stroke-width="2" stroke-linecap="round" />
                                            </g>
                                        </svg>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    
                        <!-- Card 2 -->
                        <div class="team-card w-full h-auto aspect-[4/5] border-4 bg-white group border-borderGray rounded-2xl relative overflow-hidden hover:border-darkGreen transition-all duration-700">
                            <figure class="flex flex-col h-full mt-4">
                                <img class="object-cover h-96 transition-transform duration-700 group-hover:scale-105" src="../assets/images/irfan-pv-croppedd.png" alt="Irfan PV" width="800px">
                                <figcaption class="flex border-t flex-col z-10 items-center justify-center bg-darkGreen text-center text-white absolute bottom-0 left-0 right-0 h-[20%] py-5">
                                    <h2 class="font-bold text-base lg:text-lg">Irfan PV</h2>
                                    <div class="flex items-center justify-center w-full px-4">
                                        <p class="font-medium text-15px lg:text-base ">Head of Training Dept</p>
                                        <svg class="hidden lg:block ml-2" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g class=" transition-all duration-700 group-hover:opacity-[1]" opacity="0.2">
                                                <path d="M15 16.5L18.2929 13.2071C18.6834 12.8166 18.6834 12.1834 18.2929 11.7929L15 8.5M18 12.5L4 12.5" stroke="white" stroke-width="2" stroke-linecap="round" />
                                            </g>
                                        </svg>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    
                        <!-- Card 3 -->
                        <div class="team-card w-full h-auto aspect-[4/5] border-4 bg-white group border-borderGray rounded-2xl relative overflow-hidden hover:border-darkGreen transition-all duration-700">
                            <figure class="flex flex-col h-full pt-5">
                                <img class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" src="../assets/images/kamsy-madueke-cropped.png" alt="Kamsy Madueke">
                                <figcaption class="flex flex-col border-t z-10 items-center justify-center bg-darkGreen text-center text-white absolute bottom-0 left-0 right-0 h-[20%] py-5">
                                    <h2 class="font-bold text-base lg:text-lg">Kamsy Madueke</h2>
                                    <div class="flex items-center justify-center w-full">
                                        <p class="font-medium text-15px lg:text-base ">Learning & Dev. Specialist</p>
                                        <svg class="hidden lg:block ml-2" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g class=" transition-all duration-700 group-hover:opacity-[1]" opacity="0.2">
                                                <path d="M15 16.5L18.2929 13.2071C18.6834 12.8166 18.6834 12.1834 18.2929 11.7929L15 8.5M18 12.5L4 12.5" stroke="white" stroke-width="2" stroke-linecap="round" />
                                            </g>
                                        </svg>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    
                        <!-- Card 4 -->
                        <div class="team-card w-full h-auto aspect-[4/5] border-4 bg-white group border-borderGray rounded-2xl relative overflow-hidden hover:border-darkGreen transition-all duration-700">
                            <figure class="flex flex-col h-full pt-5">
                                <img class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" src="../assets/images/princewill-ekeji-cropped.png" alt="Princewill Ekeji">
                                <figcaption class="flex flex-col border-t z-10 items-center justify-center bg-darkGreen text-center text-white absolute bottom-0 left-0 right-0 h-[20%] py-5">
                                    <h2 class="font-bold text-base lg:text-lg">Princewill Ekeji</h2>
                                    <div class="flex items-center justify-center w-full px-4">
                                        <p class="font-medium text-15px ">HSE Manager</p>
                                        <svg class="hidden lg:block ml-2" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g class=" transition-all duration-700 group-hover:opacity-[1]" opacity="0.2">
                                                <path d="M15 16.5L18.2929 13.2071C18.6834 12.8166 18.6834 12.1834 18.2929 11.7929L15 8.5M18 12.5L4 12.5" stroke="white" stroke-width="2" stroke-linecap="round" />
                                            </g>
                                        </svg>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </section>
                


            <!---------- Gallery ----------->
            <div class="py-8 md:px-16 md:py-16">
                <h3 class=" text-2xl uppercase pb-8 text-center text-darkGreen md:text-4xl font-bold">gallery</h3>
                    <!------ Gallery 1 -------->
                    <div class="py-16 mb-14">
                        <div>
                            <!-- Grid Layout -->
                            <div class="grid grid-cols-4 gap-0">
                            
                                <!-- Column #1 (Tall Image 1) -->
                                <div class="col-span-1 row-span-3">
                                    <img class="w-full h-full object-cover" src="../assets/images/gallery-1/adult-manequin-on-table.jpg" alt="Adult Manequin" />
                                </div>
                            
                                <!-- Column #2 (Square Images 3 & 4) -->
                                <div class="col-span-1 grid grid-rows-2 gap-0">
                                    <img class="w-full h-full object-cover" src="../assets/images/gallery-1/two-manequins-on-table.jpg" alt="Image 03" />
                                    <img class="w-full h-full object-cover" src="../assets/images/gallery-1/man-and-woman-standing.jpg" alt="Image 04" />
                                </div>
                            
                                <!-- Column #3 (Square Images 6 & 7) -->
                                <div class="col-span-1 grid grid-rows-2 gap-0">
                                    <img class="w-full h-full object-cover" src="../assets/images/gallery-1/red-plastic-tables.jpg" alt="Image 06" />
                                    <img class="w-full h-full object-cover" src="../assets/images/gallery-1/baby-manequin.jpg" alt="Image 07" />
                                </div>
                            
                                <!-- Column #4 (Tall Image 9) -->
                                <div class="col-span-1 row-span-3">
                                    <img class="w-full h-full object-cover" src="../assets/images/gallery-1/man-on-stretcher.jpg" alt="Image 09" />
                                </div>
                            
                                <!-- Bottom Row Images (Wide Images 2, 5, 8) -->
                                <div class="col-span-4 grid grid-cols-3 gap-0">
                                    <img class="w-full h-full object-cover" src="../assets/images/gallery-1/crowd-around-table.jpg" alt="Image 02" />
                                    <img class="w-full h-full object-cover" src="../assets/images/gallery-1/cpr-session.jpg" alt="Image 05" />
                                    <img class="w-full h-full object-cover" src="../assets/images/gallery-1/man-and-woman-giving-lecture.jpg" alt="Image 08" />
                                </div>
                        
                            </div>
                        </div>
                    </div>
                    
                    <!------- Gallery 2 ------->
                    <div class="mb-14">
                        <div>
                            <h2 class="font-bold text-[20px] mb-4 uppercase text-darkGreen text-center py-8">advanced fire fighting training</h2>
                            <div class="grid grid-cols-3 gap-0">
                                <div class="col-span-3 grid grid-rows-1 grid-cols-3">
                                    <img class="w-full h-full object-cover" src="../assets/images/gallery-2/pipe.jpg" alt="Fire pipe">
                                    <img class="w-full h-full object-cover" src="../assets/images/gallery-2/hose.jpg" alt="Hose">
                                    <img class="w-full h-full object-cover" src="../assets/images/gallery-2/man-fixing-pipe.jpg" alt="Hands fixing pipe">
                                </div>

                                <div class="col-span-3">
                                    <img class="w-full h-full object-cover" src="../assets/images/gallery-2/group.jpg" alt="Group training">
                                </div>
                                <div class="col-span-3 grid grid-cols-2">
                                    <img class="w-full h-full object-cover" src="../assets/images/gallery-2/hands-fixing-pipe.jpg" alt="Hands fixing pipe">
                                    <img class="w-full h-full object-cover" src="../assets/images/gallery-2/refinery.jpg" alt=" Fire training">
                                </div>
                            </div>
                        </div>
                    </div>

                    <!------- Gallery 3 ------->
                    <div class="mb-14">
                        <div>
                            <h2 class="font-bold text-[20px] py-8 uppercase text-darkGreen text-center">hygiene and basic fire fighting training</h2>
                            <div class="grid grid-cols-12">
                                <!-- First row: Three images with equal width -->
                                <div class="col-span-12 grid grid-cols-12">
                                    <img class="col-span-4 w-full h-full object-cover" src="../assets/images/gallery-3/peopl-around-table-2.jpg" alt="Training session">
                                    <img class="col-span-4 w-full h-full object-cover" src="../assets/images/gallery-3/people-around-table-1.jpg" alt="Another training session">
                                    <img class="col-span-4 w-full h-full object-cover" src="../assets/images/gallery-3/people-sitting.jpg" alt="Training participant's">
                                </div>
                    
                                <!-- Second row: Images 4, 5, and 6 on the same line horizontally -->
                                <div class="col-span-12 grid grid-cols-12">
                                    <img class="col-span-5 w-full h-full object-cover" src="../assets/images/gallery-3/fire-training-2.jpg" alt="Fire training"> <!-- Image 4 -->
                                    <img class="col-span-2 w-full h-full object-cover" src="../assets/images/gallery-3/fire-training-1.jpg" alt="Fire training"> <!-- Image 5 -->
                                    <img class="col-span-5 w-full h-full object-cover" src="../assets/images/gallery-3/fire-training-3.jpg" alt="Fire training"> <!-- Image 6 -->
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <Footer />
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

#left-hero {
    background-image: url('../assets/images/about-us-hero.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}



#right-hero {
    opacity: 1;
    background: linear-gradient(0deg, rgba(0, 82, 38, 0.95) 0%, rgba(0, 82, 38, 0.95) 100%),
     url('../assets/images/about-us-hero.jpg') lightgray center / cover no-repeat;
    
}
    

#leading-p {
    overflow-wrap: break-word;
  word-break: break-word;
  white-space: normal;
}

/* For medium screens */
@media (min-width: 768px) {
    #team-section {
        background-image: url('../assets/images/team-svg-bg.svg');
        background-repeat: no-repeat;
        background-size: 300px;
        background-position: right top;
    }
}

.team-card {
    background-image: url('../assets/images/background-spiral.png');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: right top;
}

@media screen and (max-width: 480px) {
            #right-hero {
               /**background-size: 900px 100%;**/
               background-size: cover;
            }
  }

</style>