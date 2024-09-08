import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'princewillEkejiPage',
  title: 'Princewill Ekeji Page',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'professionalProfile',
      title: 'Professional Profile',
      type: 'blockContent',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'keyAchievements',
      title: 'Key Achievements',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'careersMilestones',
      title: 'Career Milestone',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'hseLeadership',
      title: 'HSE Leadership',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'educationalBackground',
      title: 'Educational Background',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'currentRole',
      title: 'Current Role',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})
