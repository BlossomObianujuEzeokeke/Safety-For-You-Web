import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'alexObioraTeamPage',
  title: 'Alex Obiora Team Page',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'position',
        title: 'Position',
        type: 'string',
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
        name: 'certifications',
        title: 'Certifications',
        type: 'array',
        of: [{ type: 'string' }],
      }),
  ],
})
