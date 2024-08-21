<template>
    <section>
        <Header />
        <!-------- Hero ------->
        <section class="lg:flex w-full h-[400px] lg:h-[380px]">
            <div class="hidden lg:block w-1/2" id="left-hero">

            </div>
            <div class="flex flex-col items-center justify-end md:justify-center h-full lg:w-1/2 pb-8 md:pb-0 space-y-5 md:space-y-10" id="right-hero">
                <h1 class="uppercase font-bold text-3xl md:text-6xl text-white">train with us</h1>
                <img class="w-36 md:w-44" src="../../assets/images/S4U.png" alt="Safety For You Logo">
            </div>
        </section>
        <Footer />
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

#left-hero, #right-hero {
    background-image: url('../../assets/images/about-us-hero.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

#right-hero {
    background-color: rgba(0, 118, 54, 0.8);
    background-blend-mode: overlay;
    
    
}

@media screen and (max-width: 480px) {
            #right-hero {
               /**background-size: 900px 100%;**/
               background-size: cover;
            }
  }

</style>