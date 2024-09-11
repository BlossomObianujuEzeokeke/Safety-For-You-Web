<template>
    <div>
        <Header />

        <!-- Body -->
        <section class="container mx-auto  px-8 lg:px-16 pb-32 pt-32 md:pt-36">
                 <!-- Breadcrumb -->
                 <div class="flex space-x-2 py-10">
                    <NuxtLink to='/about' class="font-bold text-base">Back</NuxtLink>
                    <span class="text-darkGreen">|</span>
                    <p class="font-semibold text-base text-semiDarkGreen"> Training </p>
                </div>
        
            <!-- Main Heading -->
            <h1 class="text-3xl font-bold text-gray-900 pb-8">Security Training</h1>
        
            <!-- Description -->
            <p class="mt-4 text-justify text-lg text-gray-700">
              Humanitarian aid workers face increasing risks in unstable environments. Attacks on aid workers have become more frequent due to rising deployments, unstable settings, and perceived erosion of neutrality. According to the UN, 139 aid workers were killed in 2017, highlighting the need for better protection.
            </p>
        
            <p class="mt-4 text-justify text-lg text-gray-700">
              To address these risks, we offer a comprehensive Field Security Management Course. This training equips humanitarian workers, human rights defenders, and freelance journalists with essential skills for operating in hostile environments. Our training uses workshops, role plays, and realistic scenarios to provide hands-on experience, ensuring participants are well-prepared for field challenges. Join us to enhance your safety and security in high-risk environments.
            </p>
        
            <!-- Course Syllabus Heading -->
            <h2 class="text-2xl font-bold text-green-700 mt-8">Course Syllabus</h2>
        
            <!-- Course Syllabus Grid -->
            <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        
              <!-- Column 1 -->
              <div>
                <h3 class="font-semibold text-lg">1. Security Risk Management:</h3>
                <ul class="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                  <li>Understand your operating environment.</li>
                  <li>Learn risk assessment and security planning.</li>
                  <li>Handle hibernation, relocation, and evacuation.</li>
                  <li>Develop crisis management strategies.</li>
                </ul>
        
                <h3 class="font-semibold text-lg mt-4">2. First Aid:</h3>
                <ul class="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                  <li>Manage catastrophic bleeding and basic CPR.</li>
                  <li>Address environmental illnesses like heat exhaustion and hypothermia.</li>
                  <li>Handle common medical emergencies and improvisation.</li>
                </ul>
        
                <h3 class="font-semibold text-lg mt-4">3. Building Security:</h3>
                <ul class="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                  <li>Ensure office, residential, and hotel security.</li>
                  <li>Implement safe room and fire safety measures.</li>
                </ul>
        
                <h3 class="font-semibold text-lg mt-4">4. Safe Movement:</h3>
                <ul class="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                  <li>Conduct vehicle convoy procedures.</li>
                  <li>Navigate legal and illegal checkpoints.</li>
                  <li>Plan routes and handle carjackings.</li>
                </ul>
              </div>
        
              <!-- Column 2 -->
              <div>
                <h3 class="font-semibold text-lg">5. Weapons and Explosives:</h3>
                <ul class="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                  <li>Respond to direct and indirect fire.</li>
                  <li>Identify and manage IEDs, UXOs, and landmines.</li>
                  <li>Use body armor and survive active shooter scenarios.</li>
                </ul>
        
                <h3 class="font-semibold text-lg mt-4">6. Kidnap Awareness and Hostage Survival:</h3>
                <ul class="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                  <li>Respond to abductions and captivity.</li>
                  <li>Manage sexual assault awareness and conflict de-escalation.</li>
                  <li>Learn self-defense and restraint escape techniques.</li>
                </ul>
        
                <h3 class="font-semibold text-lg mt-4">7. Communications:</h3>
                <ul class="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                  <li>Master radio and sat phone basics.</li>
                  <li>Develop communication plans and use GPS trackers.</li>
                  <li>Ensure information security.</li>
                </ul>
        
                <h3 class="font-semibold text-lg mt-4">8. Resilience:</h3>
                <ul class="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                  <li>Cultivate survival psychology and skills.</li>
                  <li>Prepare grab bags and maintain mental health.</li>
                </ul>
              </div>
        
            </div>
        
            <!-- Key Benefits Section -->
            <div class="mt-8">
              <h2 class="text-xl font-bold text-gray-900">Key Benefits:</h2>
              <ul class="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                <li>Enhance safety and security knowledge.</li>
                <li>Develop practical skills for emergency situations.</li>
                <li>Improve risk assessment and crisis management capabilities.</li>
              </ul>
            </div>
        
        </section>

        <Footer />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>