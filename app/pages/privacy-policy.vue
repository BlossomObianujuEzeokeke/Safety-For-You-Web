<template>
    <section>
        <Header />

        <!--- Body ---->
        <div class="pt-16 md:pt-16 lg:pt-28 px-4 md:px-8 lg:px-16 pb-24 lg:pb-48 bg-lightGrayBg" id="privacy-policy">
            <h1 class="uppercase font-bold text-4xl md:text-4xl lg:text-6xl text-darkGray/15 text-center py-8 md:py-6 lg:py-8">
                privacy policy
            </h1>
            <div class="shadow-md border border-darkGray/30 lg:border-veryLightGreen rounded-xl px-4 md:px-8 lg:px-12 pt-10 md:pt-12 lg:pt-14 pb-14 md:pb-20 lg:pb-28 bg-white">
                <h3 class="uppercase font-bold text-2xl px-10 md:px-0 pt-4 pb-6 md:text-lg lg:text-xl text-darkGreen text-center">
                    hse privacy policy statement
                </h3>
        
                <div class="text-base md:text-[17px] font-medium text-darkGray space-y-3 md:space-y-4 lg:space-y-5 mb-4 leading-8">
                    <p>At Safety For You Services Limited, we are committed to delivering our business objectives while holding health, safety, and environment (HSE) as a core value.</p>
                    <p>Throughout the life-cycle of our activities, we aim to provide a safe and healthy working environment for our employees, contractors, and other stakeholders; to protect the environment; in compliance with extant laws and regulations and international best standards and practices.</p>
                    <p>As a responsible organization, we seek to achieve continuous improvement and sustainability with respect to HSE. A high standard of HSE performance by everyone who works for or with us is critical to the success of our business. Accordingly, we expect our contractors and partners to share our values and ambitions.</p>
                </div>
        
                <div class="text-base md:text-[17px] font-medium">
                    <h3 class="font-bold text-black">It is our policy to:</h3>
                    <ul class="list-disc space-y-3 md:space-y-4 lg:space-y-5 text-darkGray px-4 md:px-6 lg:px-8 leading-8">
                        <li>Comply with all applicable legal and other obligations including Safety For You Services Limited Referential documents, follow industry HSE best practices, etc.</li>
                        <li>Systematically identify and assess all risks to which people, the environment, and assets are exposed, and implement measures to eliminate or reduce such risks to As Low As Reasonably Practicable (ALARP).</li>
                        <li>Adopt the principle of continuous improvement by setting measurable objectives, monitoring and reviewing performance and effectiveness through independent audits and analysis of results.</li>
                        <li>Maintain a positive HSE culture, through strong visible leadership and safety representation, in which each person cares for colleagues, both employees and contractors, behaves in an honest and transparent manner, and acts as a role model in accordance with our Golden Rules and Company Values.</li>
                        <li>Require anyone working for the company, be it any employee or contractor, to proactively intervene and stop an ongoing activity if actions or situations are unsafe or have the immediate potential to lead to an accident.</li>
                        <li>Recognize good HSE performance, ensure a just and fair culture, and protect whistleblowers.</li>
                        <li>Ensure our employees and contractors are equipped with the right skills and competencies to fulfill their responsibilities in HSE matters.</li>
                        <li>Learn from experience by promoting a proactive HSE incident reporting culture, investigating causes, and effectively identifying and closing out the actions to avoid recurrence.</li>
                        <li>Ensure our emergency response capability is suitable for responding to the worst-case scenarios and regularly test its effectiveness through periodic controlled exercises.</li>
                        <li>Actively engage with relevant stakeholders to understand their HSE interests and foster open and long-term dialogue to achieve our HSE objectives.</li>
                        <p>We expect that all employees familiarize themselves with the content of our HSE Policy and work accordingly, enabling us to reach our objectives within health, safety, and the environment.</p>
                    </ul>
        
                    <div class="font-semibold text-lg italic pt-4 md:pt-6 lg:pt-8">
                        <span>Alex. Obiora</span>
                        <br>
                        <span>Managing Consultant</span>
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

#privacy-policy {
    background-image: url('../assets/images/privacy-policy-left-spirall.png'), url('../assets/images/privacy-policcy-right-spiral.png');
    background-repeat: no-repeat;
    background-size: 300px;
    background-position: left 4%, right 4%;
}

/* For large screens */
@media (min-width: 1024px) {
    #privacy-policy {
        background-size: 400px;
    }
}

/* For medium screens */
@media (min-width: 768px) and (max-width: 1023px) {
    #privacy-policy {
        background-size: 300px;
    }
}

/* For small screens */
@media (max-width: 767px) {
    #privacy-policy {
        background-size: 150px;
    }
}

</style>