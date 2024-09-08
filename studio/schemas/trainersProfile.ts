import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'trainerProfile',
  title: 'Trainer Profile',
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
      validation: Rule => Rule.required(),
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
      name: 'trainingAndCertifications',
      title: 'Training and Certifications',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'instructorCertifications',
      title: 'Instructor/Trainer Certifications',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'courses',
      title: 'Courses',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
        name: 'education',
        title: 'Education',
        type: 'array',
        of: [{ type: 'string' }],
    }),
    defineField({
        name: 'professionalMemberships',
        title: 'Professional Memberships',
        type: 'array',
        of: [{type: 'string'}],
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
    defineField({
        name: 'careerMilestones',
        title: 'Career Milestones',
        type: 'array',
        of: [{type: 'string'}]
    }),
    defineField({
        name: 'hseLeadership',
        title: 'HSE Leadership',
        type: 'array',
        of: [{type: 'string'}]
    }),
    defineField({
        name: 'roles',
        title: 'Roles',
        type: 'array',
        of: [{type: 'string'}]
    }),
    defineField({
        name: 'achievements',
        title: 'Achievements',
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
  ],
})
