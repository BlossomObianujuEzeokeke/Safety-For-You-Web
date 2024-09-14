export default defineNuxtPlugin((nuxtApp) => {
    const router = useRouter();
  
    router.afterEach((to) => {
      if (to.hash) {
        nextTick(() => {
          // Function to handle scrolling after the element is rendered
          const scrollToElement = (attempt = 0) => {
            const element = document.querySelector(to.hash);
            
            if (element) {
              // Adjust the offset for fixed headers
              const headerOffset = 100; // Adjust this value as needed
              const elementPosition = element.getBoundingClientRect().top + window.scrollY;
              const offsetPosition = elementPosition - headerOffset;
  
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
              });
            } else if (attempt < 10) {
              // Retry scrolling after a delay (in case the element isn't rendered yet)
              setTimeout(() => scrollToElement(attempt + 1), 100);
            } else {
              console.warn('Element not found after multiple attempts:', to.hash);
            }
          };
  
          // Initial call to try scrolling
          scrollToElement();
        });
      }
    });
  });
  