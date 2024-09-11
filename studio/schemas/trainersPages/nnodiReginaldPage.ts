import { defineField, defineType } from 'sanity'

// Define the `refrees` field object properly
const referees = defineField({
  name: 'referees',
  title: 'Referees',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'address',
          title: 'Address',
          type: 'string',
        },
        {
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
        },
        {
          name: 'position',
          title: 'Position',
          type: 'string',
        },
      ],
    },
  ],
});

export default defineType({
  name: 'nnodiReginaldPage',
  title: "Nnodi Reginald Trainer's Page",
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
      name: 'profileSummary',
      title: 'Profile Summary',
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
      name: 'professionalMaritimeCourses',
      title: 'Professional Maritime Courses',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'militaryTraining',
      title: 'Military Training',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'militaryUnitsServed',
      title: 'Military Units Served',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'weaponsAndExplosives',
      title: 'Weapons And Explosives',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'militaryOperations',
      title: 'Military Operations',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'postMilitaryServiceExperience',
      title: 'Post-Military Service Experience',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'hobbies',
      title: 'Hobbies',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    referees, // Passing the referees field object here
  ],
});
