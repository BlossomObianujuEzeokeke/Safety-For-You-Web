import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'basicAndAdvancedFirefightingTraining',
  title: 'Basic & Advanced Firefighting Training',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }), 
  ],
})
