import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'nnodiReginaldPage',
  title: 'Nnodi Reginald Page',
  type: 'document',
  fields: [
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
        name: 'profileSummary',
        title: 'Profile Summary',
        type: 'array',
        of: [{ type: 'string' }],
      }),
    defineField({
        name: 'roles',
        title: 'Roles',
        type: 'array',
        of: [{type: 'string'}]
    }),
    defineField({
        name: 'professionalMaritimeCourses',
        title: 'Professional Maritime Courses',
        type: 'array',
        of: [{type: 'string'}]
    }),
    defineField({
        name: 'militaryTraining',
        title: 'Military Training',
        type: 'array',
        of: [{type: 'string'}]
    }),
    defineField({
        name: 'militaryUnitsServed',
        title: 'Military Units Served',
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
        name: 'militaryOperations',
        title: 'Military Operations',
        type: 'array',
        of: [{type: 'string'}]
    }),
    defineField({
        name: 'postMilitaryServiceExperience',
        title: 'Post-Military Service Experience',
        type: 'array',
        of: [{type: 'string'}]
    }),
    defineField({
      name: 'hobbies',
      title: 'Hobbies',
      type: 'array',
      of: [{type: 'string'}],
  }),
  defineField({
      name: 'refrees',
      title: 'Refrees',
      type: 'array',
      of: [{type: 'string'}],
  }),
  ],
})

