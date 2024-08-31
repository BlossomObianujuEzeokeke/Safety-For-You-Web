<template>
    <div class="">
        <div id="header-wrapper" :class="{'border-b-[1.5px]': useScroll}" class="fixed z-40 w-full">
          <div class="flex items-center justify-between bg-darkGreen text-white px-6 py-3">
            <!-- Logo and Mobile Menu Hamburger -->
            <div class="flex items-center justify-between gap-6">
                <img class=" h-12" src="../assets/images/S4U.png" alt="Safety For You Logo">
                <div class=" hidden lg:block flex-col">
                    <p class=" font-semibold capitalize">Safety For You services LTD</p>
                    <span class=" text-xs text-lightGray font-semibold">We specialize in health, safety, medical and security trainings</span>
                </div>
            </div>

            <!-- Hamburger Icon -->
            <button @click="toggleMenu" :class="{open : menuState}" id="menu-btn" class="block hamburger lg:hidden focus:outline-none">
                <span class="hamburger-top"></span>
                <span class="hamburger-middle"></span>
                <span class="hamburger-bottom"></span>
            </button>

            <!-- Contact -->
            <div class="hidden lg:flex gap-x-4 font-semibold text-sm">
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
          <nav class=" hidden lg:block bg-semiDarkGreen text-white py-4">
              <ul class="flex justify-center items-center gap-x-8 font-semibold text-sm">
                  <NuxtLink class="text-sm font-bold hover:text-gray-300" to="/">Home</NuxtLink>
                  <NuxtLink class="text-sm font-bold hover:text-gray-300" to="/about-us">About Us</NuxtLink>
                  <NuxtLink class="text-sm font-bold hover:text-gray-300" to="/contact-us">Contact Us</NuxtLink>
                  <NuxtLink class="text-sm font-bold hover:text-gray-300" to="/privacy-policy">Privacy Policy</NuxtLink>
                  <NuxtLink class="text-sm font-bold hover:text-gray-300" to="/trainers-profile">Trainers Profile</NuxtLink>
                  <div class=" relative flex items-center justify-between gap-x-4">
                    <NuxtLink class="text-sm font-bold hover:text-gray-300" to="/trainings">Trainings</NuxtLink>
                    <svg @click="dropDownMenu" class="hover:cursor-pointer hover:text-gray-300" width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="bxs:up-arrow" clip-path="url(#clip0_1983_91)">
                      <path id="Vector" d="M15.4727 1.99935L2.5262 1.99935C2.39512 1.9997 2.26664 2.03047 2.15458 2.08835C2.04252 2.14623 1.95113 2.22903 1.89024 2.32783C1.82935 2.42663 1.80127 2.5377 1.80903 2.64907C1.81679 2.76044 1.86008 2.86791 1.93425 2.9599L8.40751 10.9185C8.67579 11.2485 9.32168 11.2485 9.59068 10.9185L16.0639 2.9599C16.1389 2.8681 16.1828 2.76058 16.191 2.64902C16.1992 2.53746 16.1713 2.42613 16.1103 2.32712C16.0494 2.22811 15.9577 2.14521 15.8453 2.08742C15.7329 2.02963 15.604 1.99917 15.4727 1.99935Z" fill="white"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_1983_91">
                      <rect width="17" height="11" fill="white" transform="matrix(-1 0 0 -1 17.5 11)"/>
                      </clipPath>
                      </defs>
                    </svg>

                    <!-- Drop down -->
                    <transition
                    enter-active-class="transition ease-out duration-300"
                    enter-from-class="opacity-0 transform scale-95"
                    enter-to-class="opacity-100 transform scale-100"
                    leave-active-class="transition ease-in duration-200"
                    leave-from-class="opacity-100 transform scale-100"
                    leave-to-class="opacity-0 transform scale-95"
                  >
                    <div v-if="showDropDown" class="absolute bg-[#006f32] top-9 w-64 rounded-b-xl shadow-lg">
                        <ul class=" flex flex-col space-y-4 px-3 py-5 text-sm">
                          <NuxtLink class="border-b pb-2 border-mainGreen hover:text-gray-300" to="/journery">Journery management training</NuxtLink>
                          <NuxtLink class="border-b pb-2 border-mainGreen hover:text-gray-300" to="/hygiene">Hygiene & Sanitation training</NuxtLink>
                          <NuxtLink class="border-b pb-2 border-mainGreen hover:text-gray-300" to="/emergency">Emergency Response training</NuxtLink>
                          <NuxtLink class="border-b pb-2 border-mainGreen hover:text-gray-300" to="/gender">Gender based violence training</NuxtLink>
                          <NuxtLink class="" to="">Security training</NuxtLink>
                        </ul>
                    </div>  
                    </transition>               
                  </div>
              </ul>
          </nav>
        </div>
     
        <!---------- Mobile Menu ------------->
        <div class="block lg:hidden">
          <div class=" relative z-50 flex items-center justify-center">
        
            <!-- Slide-over Container -->
            <div v-show="true"  class="w-full h-full fixed inset-0" >
              <!-- Background Overlay -->
              <div @click="toggleMenu"
                :class="['transition-all','duration-500','ease-out','inset-0','absolute','bg-gray-900', menuState ? 'opacity-50' : '']" class="w-full h-full opacity-0">
              </div>
        
              <!-- Slide-over Menu -->
              <div :class="['transition-all','duration-700','ease-out','absolute','right-0', ' top-[72px]' ,'bg-white',' w-72',' h-[28rem]', menuState ? '' : 'translate-x-full']"
                    class="  rounded-bl-lg"
              >
                  <nav class=" flex flex-col space-y-8 pt-20 pb-24 px-16">
                    <div class="border-b-2 border-gray-300 pb-2 px-2">
                      <NuxtLink class="text-lg text-darkGreen font-semibold hover:text-gray-300 " to="/">Home</NuxtLink>
                    </div>
                    <div class="border-b-2 border-gray-300 pb-2 px-2">
                      <NuxtLink class="text-lg text-darkGreen font-semibold hover:text-gray-300 " to="/about-us">About Us</NuxtLink>
                    </div>
                    <div class="border-b-2 border-gray-300 pb-2 px-2">
                      <NuxtLink class="text-lg text-darkGreen font-semibold hover:text-gray-300 " to="/trainings">Trainings</NuxtLink>
                    </div>
                    <div class="border-b-2 border-gray-300 pb-2 px-2">
                      <NuxtLink class="text-lg text-darkGreen font-semibold hover:text-gray-300 " to="/privacy-policy">Privacy Policy</NuxtLink>
                    </div>

                    <div class="border-b-2 border-gray-300 pb-2 px-2">
                      <NuxtLink class="text-lg text-darkGreen font-semibold hover:text-gray-300 " to="/trainers-profile">Trainers Profile</NuxtLink>
                    </div>
                  </nav>
              </div>
            </div>

          </div>
        </div>
        
    </div>
</template>

<script setup lang="ts">

import { onMounted, onBeforeUnmount, onUnmounted } from 'vue';

const menuState = useState<boolean>('menuState', () => false);

const useScroll = useState<boolean>('useScroll', () => false);

const showDropDown = useState<boolean>('showDropDown', ()=> false)

onMounted(() => {
  menuState.value = false
  showDropDown.value = false;
  window.addEventListener('scroll', handleScroll);
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})


// Drop down menu
const dropDownMenu = () => {
  console.log(1234)
  showDropDown.value = !showDropDown.value
}

// Use this to show / hide border bottom on the header nav
const handleScroll = () => {
  if(document.body.scrollTop === 0 || document.documentElement.scrollTop === 0) {
    useScroll.value = true
  } 
  if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    useScroll.value = false
  }
}

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

.router-link-active {
  text-decoration: underline;
} 

@media (max-width: 768px) {
  .router-link-active {
    text-decoration: none;
    border-radius: 40px;
    color: white;
    background: #007636;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 2px 6px 2px;
  } 
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