<template>
  <div v-if="showCarousel" id="carousel-container" class="py-52 relative overflow-hidden">

    <h3 class=" hidden min-755:block text-darkGreen italic font-bold text-xl absolute top-[15%] left-[30%]">Aid Workers Braving Risks for a Safer World</h3>
    <!-- Carousel Images -->
    <div
      class="carousel-images flex"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <!-- First set -->
      <div class="w-full flex justify-center min-w-full">
        <div class="relative lg:w-[320px] lg:h-[320px] md:w-[250px] md:h-[250px] sm:w-[200px] sm:h-[200px] flex-shrink-0">
          <img src="../assets/images/carousel/carousel_1_resized.jpg" alt="Image 1"
            class="w-full h-full rounded-full border-4 border-mainGreen object-cover" />
        </div>
        <div class="relative lg:w-[320px] lg:h-[320px] md:w-[250px] md:h-[250px] sm:w-[200px] sm:h-[200px] flex-shrink-0 -ml-6">
          <img src="../assets/images/carousel/carousel_2_resized.jpg" alt="Image 2"
            class="w-full h-full rounded-full border-4 border-mainGreen object-cover" />
        </div>
        <div class="relative lg:w-[320px] lg:h-[320px]  md:w-[250px] md:h-[250px] sm:w-[200px] sm:h-[200px] flex-shrink-0 -ml-6">
          <img src="../assets/images/carousel/carousel_3_resized.jpg" alt="Image 3"
            class="w-full h-full rounded-full border-4 border-mainGreen object-cover" />
        </div>
      </div>

      <!-- Second set -->
      <div class="w-full flex justify-center min-w-full">
        <div class="relative lg:w-[320px] lg:h-[320px] md:w-[250px] md:h-[250px] sm:w-[200px] sm:h-[200px] flex-shrink-0 ">
          <img src="../assets/images/carousel/carousel_4_resized.jpg" alt="Image 4"
            class="w-full h-full rounded-full border-4 border-mainGreen object-cover" />
        </div>
        <div class="relative lg:w-[320px] lg:h-[320px] md:w-[250px] md:h-[250px] sm:w-[200px] sm:h-[200px] flex-shrink-0 -ml-6">
          <img src="../assets/images/carousel/carousel_5_resized.jpg" alt="Image 5"
            class="w-full h-full rounded-full border-4 border-mainGreen object-cover" />
        </div>
        <div class="relative lg:w-[320px] lg:h-[320px] md:w-[250px] md:h-[250px] sm:w-[200px] sm:h-[200px] flex-shrink-0 -ml-6">
          <img src="../assets/images/carousel/carousel_6_resized.jpg" alt="Image 6"
            class="w-full h-full rounded-full border-4 border-mainGreen object-cover" />
        </div>
      </div>
    </div>

    <!-- Previous Button -->
    <svg
    @click="prev"
    :disabled="isPrevDisabled"
    :class="[
      isPrevDisabled ? 'border-lightGray' : 'border-mainGreen hover:bg-lightGreen', 
      'hover:cursor-pointer absolute top-[42%] left-10 w-12 h-12 md:w-10 md:h-10 sm:w-8 sm:h-8 border-[3px] rounded-full bg-white'
    ]"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 25C2 12.2974 12.2975 2 25 2C37.7026 2 48 12.2975 48 25C48 37.7025 37.7025 48 25 48C12.2975 48 2 37.7025 2 25Z"
      fill="white"
    />
    <path
      :stroke="isPrevDisabled ?  '#C2C2C2' : '#4CAF4F' "
      d="M27.99 32.36L21.755 26.5704C20.7751 25.6605 20.7751 24.1095 21.755 23.1996L27.99 17.41"
      stroke-width="3"
      stroke-linecap="round"
    />
  </svg>

  <!-- Next Button -->
  <svg
    @click="next"
    :disabled="isNextDisabled"
    :class="[
      isNextDisabled ? 'border-lightGray' : 'border-mainGreen hover:bg-lightGreen',
      'hover:cursor-pointer absolute top-[42%] right-10 w-12 h-12 md:w-10 md:h-10 sm:w-8 sm:h-8 border-[3px] rounded-full bg-white'
    ]"
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M48 25C48 12.2974 37.7025 2 25 2C12.2974 2 2 12.2975 2 25C2 37.7025 12.2975 48 25 48C37.7025 48 48 37.7025 48 25Z"
      fill="white"
    />
    <path
      :stroke="isNextDisabled ?  '#C2C2C2' : '#4CAF4F' "
      d="M22.01 32.36L28.245 26.5704C29.2249 25.6605 29.2249 24.1095 28.245 23.1996L22.01 17.41"
      stroke-width="3"
      stroke-linecap="round"
    />
  </svg>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const currentIndex = ref(0); // Tracks which div is being shown (0 or 1)
const totalImages = 2; // Total number of divs (2 in this case)
const showCarousel = ref(true); // Flag to show/hide carousel

// Computed properties for button disabling
const isPrevDisabled = computed(() => currentIndex.value === 0);
const isNextDisabled = computed(() => currentIndex.value >= totalImages - 1);

// Method to go to the previous slide
function prev() {
  if (!isPrevDisabled.value) {
    currentIndex.value--;
  }
}

// Method to go to the next slide
function next() {
  if (!isNextDisabled.value) {
    currentIndex.value++;
  }
}

// Function to hide the carousel if the screen width is <= 755px
function checkWindowSize() {
  showCarousel.value = window.innerWidth >= 755;
}

onMounted(() => {
  checkWindowSize();
  window.addEventListener('resize', checkWindowSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkWindowSize);
});
</script>

<style scoped>
#carousel-container {
  background-image: url('../assets/images/left_carousel_spiral_bg.svg'), url('../assets/images/right_carousel_spiral_bg.svg');
  background-repeat: no-repeat;
  background-position: calc(50% - 280px) 65%, calc(50% + 280px) 65%;
  background-size: 750px;
}

@media (max-width: 768px) {
  #carousel-container {
    background-size: 500px;
  }
}

@media (max-width: 755px) {
  #carousel-container {
    display: none;
  }
}
</style>
