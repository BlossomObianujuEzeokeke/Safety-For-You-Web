import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'alexObioraTrainerPage',
  title: "Alex Obiora Trainer's Page",
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
        name: 'certifications',
        title: 'Certifications',
        type: 'array',
        of: [{ type: 'string' }],
      }),
  ],
})
