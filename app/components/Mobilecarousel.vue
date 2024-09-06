<template>
    <div v-if="mobile_showCarousel" id="mobile_carousel-container" class="relative overflow-hidden">
      <!-- Centered rounded container -->
      <div class="rounded-full bg-white w-[273px] h-[264px] mx-auto flex items-center justify-center absolute top-14 left-20 overflow-hidden">
        
        <!-- Carousel Images -->
        <div
          class="mobile_carousel-images flex w-[calc(273px+1rem)] transition-transform duration-700 ease-in-out gap-x-4"
          :style="{ transform: `translateX(-${mobile_currentIndex * 100}%)` }"
        >
          <!-- First image -->
          <div class="relative w-[273px] h-[264px] flex-shrink-0">
            <img src="../assets/images/carousel/carousel_1_resized.jpg" alt="Image 1"
              class="w-full h-full rounded-full border-4 border-mainGreen object-cover" />
          </div>
  
          <!-- Second image -->
          <div class="relative sm:w-[200px] w-[273px] h-[264px] flex-shrink-0">
            <img src="../assets/images/carousel/carousel_2_resized.jpg" alt="Image 2"
              class="w-full h-full rounded-full border-4 border-mainGreen object-cover" />
          </div>
  
          <!-- Third image -->
          <div class="relative aspect-square w-[273px] h-[264px] flex-shrink-0">
            <img src="../assets/images/carousel/carousel_3_resized.jpg" alt="Image 3"
              class="w-full h-full rounded-full border-4 border-mainGreen object-cover" />
          </div>
  
          <!-- Fourth image -->
          <div class="relative aspect-square w-[273px] h-[264px] flex-shrink-0">
            <img src="../assets/images/carousel/carousel_4_resized.jpg" alt="Image 4"
              class="w-full h-full rounded-full border-4 border-mainGreen object-cover" />
          </div>
  
          <!-- Fifth image -->
          <div class="relative aspect-square w-[273px] h-[264px] flex-shrink-0">
            <img src="../assets/images/carousel/carousel_5_resized.jpg" alt="Image 5"
              class="w-full h-full rounded-full border-4 border-mainGreen object-cover" />
          </div>
  
          <!-- Sixth image -->
          <div class="relative aspect-square w-[273px] h-[264px] flex-shrink-0">
            <img src="../assets/images/carousel/carousel_6_resized.jpg" alt="Image 6"
              class="w-full h-full rounded-full border-4 border-mainGreen object-cover" />
          </div>
        </div>
      </div>
  
      <!-- Previous Button -->
      <svg @click="mobile_prev" :disabled="mobile_isPrevDisabled" 
        :class="[
          mobile_isPrevDisabled ? 'border-lightGray' : 'border-mainGreen hover:bg-lightGreen', 
          'hover:cursor-pointer absolute top-[37%] left-5 w-10 h-10  border-[3px] rounded-full bg-white'
        ]"
        viewBox="0 0 50 50"
        fill="none" xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2 25C2 12.2974 12.2975 2 25 2C37.7026 2 48 12.2975 48 25C48 37.7025 37.7025 48 25 48C12.2975 48 2 37.7025 2 25Z" fill="white"/>
        <path :stroke="mobile_isPrevDisabled ?  '#C2C2C2' : '#4CAF4F'" d="M27.99 32.36L21.755 26.5704C20.7751 25.6605 20.7751 24.1095 21.755 23.1996L27.99 17.41" stroke-width="3" stroke-linecap="round"/>
      </svg>
  
      <!-- Next Button -->
      <svg @click="mobile_next" :disabled="mobile_isNextDisabled" 
        :class="[
          mobile_isNextDisabled ? 'border-lightGray' : 'border-mainGreen hover:bg-lightGreen', 
          'hover:cursor-pointer absolute top-[37%] right-3 w-10 h-10 md:w-10 md:h-10 sm:w-8 sm:h-8 border-[3px] rounded-full bg-white'
        ]"
        viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M48 25C48 12.2974 37.7025 2 25 2C12.2974 2 2 12.2975 2 25C2 37.7025 12.2975 48 25 48C37.7025 48 48 37.7025 48 25Z" fill="white"/>
        <path :stroke="mobile_isNextDisabled ?  '#C2C2C2' : '#4CAF4F'" d="M22.01 32.36L28.245 26.5704C29.2249 25.6605 29.2249 24.1095 28.245 23.1996L22.01 17.41" stroke-width="3" stroke-linecap="round"/>
      </svg>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
  
  const mobile_currentIndex = ref(0); // Tracks the current image index for mobile
  const mobile_totalImages = 6; // Set to 6 to match the number of images
  
  // Show or hide the mobile carousel based on screen width (up to 754px)
  const mobile_showCarousel = ref(false);
  
  // Computed properties for disabling buttons
  const mobile_isPrevDisabled = computed(() => mobile_currentIndex.value === 0);
  const mobile_isNextDisabled = computed(() => mobile_currentIndex.value >= mobile_totalImages - 1);
  
  // Method to go to the previous slide
  function mobile_prev() {
    if (!mobile_isPrevDisabled.value) {
      mobile_currentIndex.value--;
    }
  }
  
  // Method to go to the next slide
  function mobile_next() {
    if (!mobile_isNextDisabled.value) {
      mobile_currentIndex.value++;
    }
  }
  
  // Function to hide the mobile carousel if the screen width is > 754px
  function mobile_checkWindowSize() {
    mobile_showCarousel.value = window.innerWidth <= 754;
  }
  
  onMounted(() => {
    mobile_checkWindowSize();
    window.addEventListener('resize', mobile_checkWindowSize);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('resize', mobile_checkWindowSize);
  });

  </script>
  
  <style scoped>
  #mobile_carousel-container {
    background-image: url('../assets/images/carousel/mobile_bg.svg');
    background-repeat: no-repeat;
    background-position: center;
    height: 400px;
  }
  
  @media (max-width: 768px) {
    #mobile_carousel-container {
      background-size: 400px;
    }
  }
  
  @media (min-width: 755px) {
    #mobile_carousel-container {
      display: none;
    }
  }
  </style>
  