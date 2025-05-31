import {CreditCardIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'checkoutPage',
  title: 'Checkout Page',
  type: 'document',
  icon: CreditCardIcon,
  groups: [
    {
      name: 'general',
      title: 'General Settings',
    },
    {
      name: 'branding',
      title: 'Branding & Styling',
    },
    {
      name: 'products',
      title: 'Payment Options',
    },
    {
      name: 'access',
      title: 'Access Control',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'The title that appears in the browser tab',
      group: 'general',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'The URL path for this checkout page (e.g., mens-retreat-checkout)',
      group: 'general',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'retreatName',
      title: 'Retreat Name',
      type: 'string',
      description: 'The name of the retreat (e.g., Sacred Masculine Retreat)',
      group: 'general',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Page Description',
      type: 'text',
      description: 'The description text that appears under the title',
      group: 'general',
      rows: 3,
    }),
    defineField({
      name: 'isActive',
      title: 'Page Active',
      type: 'boolean',
      description: 'Toggle to enable/disable this checkout page',
      group: 'general',
      initialValue: true,
    }),
    
    // Branding & Styling
    defineField({
      name: 'colorScheme',
      title: 'Color Scheme',
      type: 'colorScheme',
      group: 'branding',
    }),
    defineField({
      name: 'headerImage',
      title: 'Header Image',
      type: 'image',
      description: 'Optional header image for the checkout page',
      group: 'branding',
      options: {
        hotspot: true,
      },
    }),

    // Payment Options/Products
    defineField({
      name: 'paymentOptions',
      title: 'Payment Options',
      type: 'array',
      group: 'products',
      of: [
        {
          type: 'paymentOption',
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),

    // Access Control
    defineField({
      name: 'accessCode',
      title: 'Access Code',
      type: 'string',
      description: 'Code required to access this checkout page',
      group: 'access',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'accessTitle',
      title: 'Access Page Title',
      type: 'string',
      description: 'Title shown on the access code entry page',
      group: 'access',
      initialValue: 'Retreat Checkout',
    }),
    defineField({
      name: 'accessDescription',
      title: 'Access Page Description',
      type: 'text',
      description: 'Description shown on the access code entry page',
      group: 'access',
      rows: 2,
      initialValue: 'Enter your registration code to proceed with checkout',
    }),

    // Contact Information
    defineField({
      name: 'contactEmail',
      title: 'Support Email',
      type: 'email',
      description: 'Email for customer support',
      group: 'general',
      initialValue: 'team@sacredfeminine.co',
    }),
  ],
  
  preview: {
    select: {
      title: 'retreatName',
      subtitle: 'slug.current',
      isActive: 'isActive',
    },
    prepare({title, subtitle, isActive}) {
      return {
        title: title,
        subtitle: `/${subtitle} ${isActive ? '(Active)' : '(Inactive)'}`,
        media: CreditCardIcon,
      }
    },
  },
})
