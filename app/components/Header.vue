<template>
    <div class="">
        <div class="fixed z-40 w-full">
          <div class="flex items-center justify-between bg-darkGreen text-white px-6 py-3">
            <!-- Logo and Mobile Menu Hamburger -->
            <div class="flex items-center justify-between gap-6">
                <img class=" h-12" src="../assets/images/S4U.png" alt="Safety For You Logo">
                <div class=" hidden md:block flex-col">
                    <p class=" font-semibold capitalize">Safety For You services LTD</p>
                    <span class=" text-xs text-lightGray font-semibold">We specialize in health, safety, medical and security trainings</span>
                </div>
            </div>

            <!-- Hamburger Icon -->
            <button @click="toggleMenu" :class="{open : menuState}" id="menu-btn" class="block hamburger md:hidden focus:outline-none">
                <span class="hamburger-top"></span>
                <span class="hamburger-middle"></span>
                <span class="hamburger-bottom"></span>
            </button>

            <!-- Contact -->
            <div class="hidden md:flex gap-x-4 font-semibold text-sm">
                <div class="flex items-center gap-x-2">
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Mail">
                            <rect id="Rectangle 2" x="1.5" y="1.5" width="16.25" height="13" rx="3" stroke="white" stroke-width="1.5"/>
                            <path id="Line" d="M5.5 4.72461L8.16875 6.72617C9.23542 7.52617 10.7021 7.52617 11.7688 6.72617L14.4375 4.72461" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                    </svg>
                        
                    <a href="mailto:info@safetyforyou.ng?subject=Inquiry">info@safetyforyou.ng</a>
                </div>
                
                <div class="flex items-center gap-x-2">
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Phone">
                        <path id="Icon" d="M16.0835 11.9844V14.1094C16.0843 14.3067 16.0439 14.502 15.9649 14.6827C15.8858 14.8635 15.7699 15.0257 15.6246 15.1591C15.4792 15.2924 15.3076 15.394 15.1207 15.4572C14.9338 15.5204 14.7358 15.5438 14.5393 15.5261C12.3597 15.2892 10.266 14.5444 8.42643 13.3515C6.71497 12.264 5.26396 10.813 4.17643 9.1015C2.97933 7.2536 2.23435 5.14971 2.00184 2.96025C1.98414 2.76437 2.00742 2.56696 2.0702 2.38057C2.13297 2.19418 2.23387 2.02291 2.36647 1.87765C2.49907 1.73239 2.66045 1.61634 2.84036 1.53687C3.02027 1.4574 3.21475 1.41627 3.41143 1.41608H5.53643C5.88019 1.4127 6.21345 1.53443 6.47409 1.75859C6.73474 1.98274 6.90498 2.29403 6.95309 2.63442C7.04278 3.31446 7.20912 3.98218 7.44893 4.62483C7.54423 4.87836 7.56485 5.1539 7.50836 5.41879C7.45187 5.68368 7.32062 5.92683 7.13018 6.11942L6.23059 7.019C7.23894 8.79235 8.70725 10.2606 10.4806 11.269L11.3802 10.3694C11.5728 10.179 11.8159 10.0477 12.0808 9.99123C12.3457 9.93474 12.6212 9.95537 12.8748 10.0507C13.5174 10.2905 14.1851 10.4568 14.8652 10.5465C15.2093 10.595 15.5235 10.7684 15.7481 11.0335C15.9728 11.2986 16.0921 11.637 16.0835 11.9844Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                    </svg>
                        
                    <span>+234(0)8164339861</span>
                </div>
            </div>
           </div>

          <!---------- Navigation Menu ------------>
          <nav class=" hidden md:block bg-semiDarkGreen text-white py-4">
              <ul class="flex justify-center items-center gap-x-8 font-semibold text-sm">
                  <NuxtLink to="/">Home</NuxtLink>
                  <NuxtLink to="/about-us">About Us</NuxtLink>
                  <NuxtLink to="/contact-us">Contact Us</NuxtLink>
                  <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
                  <NuxtLink to="/trainers-profile">Trainers Profile</NuxtLink>
                  <NuxtLink to="/trainings">Trainings</NuxtLink>
              </ul>
          </nav>
        </div>
     
        <!---------- Mobile Menu ------------->
        <div class="block md:hidden">
            <!--- Background overlay ---->
            <div v-if="menuState" @click.self="toggleMenu" class=" fixed inset-0 z-10 bg-gray-500/20"></div>

            <!-- Mobile Menu -->
                <!-- <div v-if="menuState" :class="{'' : menuState}" class="fixed top-30 right-0 w-64 h-96 bg-white shadow-lg z-50 duration-700 ease-out transition-all" > -->
                    <div
                    v-show="menuState"
                    :class="[
                      'fixed top-28 right-0 w-64 h-96 bg-white shadow-lg z-50 transition-transform duration-700 ease-out',
                      menuState ? 'translate-x-0' : 'translate-x-full'
                    ]"
                  >
                    <nav class="mt-4 flex justify-center">
                        <ul class=" flex flex-col font-semibold text-lg text-darkGreen divide-y">
                            <NuxtLink class=" pt-4 pb-2 " to="/">Home</NuxtLink>
                            <NuxtLink class=" pt-4 pb-2" to="/about-us">About Us</NuxtLink>
                            <NuxtLink class=" pt-4 pb-2 " to="/contact-us">Contact Us</NuxtLink>
                            <NuxtLink class=" pt-4 pb-2 " to="/privacy-policy">Privacy Policy</NuxtLink>
                            <NuxtLink class=" pt-4 pb-2 " to="/trainers-profile">Trainers Profile</NuxtLink>
                            <NuxtLink class=" pt-4 pb-2 " to="/trainings">Trainings</NuxtLink>
                        </ul>
                    </nav>
            </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">

import { onMounted, onBeforeUnmount } from 'vue';

const menuState = useState<boolean>('menuState', () => false);

const toggleMenu = () => {
    menuState.value = !menuState.value
    console.log(menuState.value)
}

const handleResize = () => {
const isMediumScreen = window.matchMedia('(min-width: 768px)').matches;
    if (isMediumScreen) {
         menuState.value = false; // Reset the menuState if screen is wider than 768px
    }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  handleResize(); // Run on initial load to handle the case when the screen starts larger than 768px
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});


</script>


<style scoped>

a {
    text-decoration: none;
}


/* Hamburger Menu */
.hamburger {
    cursor: pointer;
    width: 24px;
    height: 24px;
    transition: all 0.25s;
    position: relative;
  }
  
  .hamburger-top,
  .hamburger-middle,
  .hamburger-bottom {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 2px;
    background: #fff;
    transform: rotate(0);
    transition: all 0.5s;
  }
  
  .hamburger-middle {
    transform: translateY(7px);
  }
  
  .hamburger-bottom {
    transform: translateY(14px);
  }
  
  .open {
    transform: rotate(90deg);
    transform: translateY(0px);
  }
  
  .open .hamburger-top {
    transform: rotate(45deg) translateY(6px) translate(6px);
  }
  
  .open .hamburger-middle {
    display: none;
  }
  
  .open .hamburger-bottom {
    transform: rotate(-45deg) translateY(6px) translate(-6px);
  }

</style>