<script setup lang="ts">
import { type Post } from '~/types/Post'
import { PortableText } from '@portabletext/vue'

const route = useRoute()

const query = groq`*[ _type == "post" && slug.current == $slug][0]`
const { data: post } = await useSanityQuery<Post>(query, {
  slug: route.params.slug,
})
</script>

<template>
  <Navigation />
  <section v-if="post" class="post">
    <img
      v-if="post.mainImage"
      class="post__cover"
      :src="$urlFor(post.mainImage).width(1920).url()"
      alt="Cover image"
    />
    <div v-else class="post__cover--none" />
    <div class="post__container">
      <h1 class="post__title">{{ post.title }}</h1>
      <p class="post__excerpt">{{ post.excerpt }}</p>
      <p class="post__date">{{ formatDate(post._createdAt) }}</p>
      <div v-if="post.body" class="post__content">
        <PortableText :value="post.body" />
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>