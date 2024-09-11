import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'securityTraining',
  title: 'Security Training',
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
        name: 'securityRiskManagement',
        title: 'Security Risk Training',
        type: 'array',
        of: [{type: 'string'}]
    }),
    defineField({
        name: 'firstAid',
        title: 'First Aid',
        type: 'array',
        of: [{type: 'string'}]
    }),
    defineField({
        name: 'buildingSecurity',
        title: 'Building Security',
        type: 'array',
        of: [{type: 'string'}]
    }),
    defineField({
        name: 'safeMovement',
        title: 'Safe Movement',
        type: 'array',
        of: [{type: 'string'}]
    }),
    defineField({
        name: 'weaponsAndExplosives',
        title: 'Weapons And Explosives',
        type: 'array',
        of: [{type: 'string'}]
    }),
    defineField({
        name: 'kidnapAwarenessandHostageSurvival',
        title: 'Kidnap Awareness and Hostage Survival',
        type: 'array',
        of: [{type: 'string'}]
    }),
    defineField({
        name: 'communications',
        title: 'Communications',
        type: 'array',
        of: [{type: 'string'}]
    }),
    defineField({
        name: 'resilience',
        title: 'Resilience',
        type: 'array',
        of: [{type: 'string'}]
    }),
    defineField({
        name: 'keyBenefits',
        title: 'Key Benefits',
        type: 'array',
        of: [{type: 'string'}]
    }),
  ],
})
