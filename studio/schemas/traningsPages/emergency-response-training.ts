import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'emergencyResponseTraining',
  title: 'Emergency Response Training',
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
        name: 'practicalBenefits',
        title: 'Practical benefits',
        type: 'blockContent',
    }),
    defineField({
        name: 'trainingObjectives',
        title: 'Training Objectives',
        type: 'blockContent',
    }),
  ],
})
