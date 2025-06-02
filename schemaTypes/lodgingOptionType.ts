import {HomeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'lodgingOption',
  title: 'Lodging Option',
  type: 'document',
  icon: HomeIcon,
  groups: [
    {
      name: 'details',
      title: 'Basic Details',
    },
    {
      name: 'settings',
      title: 'Display Settings',
    },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Accommodation Name',
      type: 'string',
      description: 'e.g., "Bedroom w/ Queen Bed", "Private Room"',
      group: 'details',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Detailed description of the accommodation',
      group: 'details',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Category',
      type: 'string',
      description: 'Accommodation category for display',
      group: 'details',
      options: {
        list: [
          {title: 'Premium Plus', value: 'Premium Plus'},
          {title: 'Premium', value: 'Premium'},
          {title: 'Standard', value: 'Standard'},
          {title: 'Basic', value: 'Basic'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
      description: 'Price in USD (without $ symbol)',
      group: 'details',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Optional image for this accommodation type',
      group: 'details',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this option appears (lower numbers first)',
      group: 'settings',
      validation: (Rule) => Rule.required().min(0),
      initialValue: 1,
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Whether this option is currently available for selection',
      group: 'settings',
      initialValue: true,
    }),
  ],
  
  preview: {
    select: {
      title: 'name',
      subtitle: 'type',
      price: 'price',
      isActive: 'isActive',
      media: 'image',
    },
    prepare({title, subtitle, price, isActive, media}) {
      return {
        title: title,
        subtitle: `${subtitle} - $${price} ${isActive ? '(Active)' : '(Inactive)'}`,
        media: media || HomeIcon,
      }
    },
  },
  
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrderAsc',
      by: [
        {field: 'displayOrder', direction: 'asc'},
        {field: 'name', direction: 'asc'}
      ]
    },
    {
      title: 'Price (Low to High)',
      name: 'priceAsc',
      by: [
        {field: 'price', direction: 'asc'},
        {field: 'name', direction: 'asc'}
      ]
    },
    {
      title: 'Price (High to Low)',
      name: 'priceDesc',
      by: [
        {field: 'price', direction: 'desc'},
        {field: 'name', direction: 'asc'}
      ]
    }
  ]
})
