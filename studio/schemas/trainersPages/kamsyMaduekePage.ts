import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'kamsyMaduekeTrainerPage',
  title: "Kamsy Madueke's Trainer Page",
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'profileSummary',
      title: 'Profile Summary',
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
        name: 'scopeOfServices',
        title: 'Scope of Services',
        type: 'array',
        of: [{ type: 'string' }],
      }),
  ],
})
