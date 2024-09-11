import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'journeyManagementTraining',
  title: 'Journey Management Training',
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
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{type: 'string'}]
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
        name: 'safeDrivingCourse',
        title: 'Safe Driving Course',
        type: 'blockContent',
      }),
    defineField({
      name: 'programComponent',
      title: 'Program Component',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'courseObjectives',
      title: 'Course Objectives',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'keyBenefits',
      title: 'Key Benefits',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})
