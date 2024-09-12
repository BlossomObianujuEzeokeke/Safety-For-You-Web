import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'genderBasedViolenceTraining',
  title: 'Gender Based Violence Training',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
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
    defineField({
      name: 'trainingObjectives',
      title: 'Training Objectives',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'keyBenefits',
      title: 'Key Benefits',
      type: 'array',
      of: [{ type: 'string' }],
    })
  ],
})
