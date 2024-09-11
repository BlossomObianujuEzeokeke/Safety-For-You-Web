import {defineField, defineType} from 'sanity'


const short_courses = {
  name: 'shortCourses',
  title: 'Short Courses',
  type: 'array',
  of: [
    {
      type: 'object',
      name: 'yearCourses',
      title: 'Year and Courses',
      fields: [
        {
          name: 'year',
          title: 'Year',
          type: 'number',
          validation: (Rule :any) => Rule.integer().min(1900).max(new Date().getFullYear()).required(),
        },
        {
          name: 'courses',
          title: 'Courses',
          type: 'array',
          of: [{ type: 'string' }],
          validation: (Rule : any) => Rule.required().min(1).unique(),
        },
      ],
    },
  ],
}

const certifications = {
  name: 'instructorCertifications',
  title: 'Instructor/Trainer Certifications',
  type: 'array',
  of: [
    {
      type: 'object',
      name: 'certificationYear',
      title: 'Certification and Year',
      fields: [
        {
          name: 'certification',
          title: 'Certification',
          type: 'string',
          validation: (Rule: any) => Rule.required().min(2),
        },
        {
          name: 'year',
          title: 'Year',
          type: 'number',
          validation: (Rule: any) => Rule.integer().min(1900).max(new Date().getFullYear()).required(),
        },
      ],
    },
  ],
}


export default defineType({
  name: 'nwaobiAnthonyPage',
  title: "Nwaobi Anthony Trainer's Page",
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
    defineField(certifications),
    defineField( short_courses),
    defineField({
      name: 'professionalMemberships',
      title: 'Professional Memberships',
      type: 'array',
      of: [{type: 'string'}],
  }),
  ],
})





