import {CalendarIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: CalendarIcon,
  groups: [
    {
      name: 'details',
      title: 'Details',
    },
    {
      name: 'schedule',
      title: 'Schedule',
    },
    {
      name: 'cost',
      title: 'Cost',
    },
    {
      name: 'checkout',
      title: 'Checkout',
    },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Event Name',
      group: 'details',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Event Slug',
      type: 'slug',
      description: 'URL slug used for event pages and ticket links',
      group: 'details',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      group: 'schedule',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      group: 'schedule',
      type: 'date',
    }),
    defineField({
      name: 'startTime',
      title: 'Start Time',
      type: 'string',
      group: 'schedule',
    }),
    defineField({
      name: 'endTime',
      title: 'End Time',
      type: 'string',
      group: 'schedule',
    }),
    defineField({
      name: 'price',
      title: 'Ticket Price',
      description: 'Displayed cost for the event (e.g., "$125")',
      type: 'string',
      group: 'cost',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'checkoutDescription',
      title: 'Checkout Page Description',
      type: 'text',
      rows: 3,
      group: 'checkout',
      description: 'Optional description displayed above the payment options.',
    }),
    defineField({
      name: 'paymentOptions',
      title: 'Payment Options',
      type: 'array',
      group: 'checkout',
      of: [{type: 'paymentOption'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'contactEmail',
      title: 'Support Email',
      type: 'email',
      group: 'checkout',
      initialValue: 'team@sacredfeminine.co',
    }),
    defineField({
      name: 'isCheckoutActive',
      title: 'Enable Checkout',
      type: 'boolean',
      group: 'checkout',
      description: 'Disable to temporarily turn off ticket sales for this event.',
      initialValue: true,
    }),
    defineField({
      name: 'enableTicketButton',
      title: 'Show Ticket Button',
      type: 'boolean',
      group: 'checkout',
      description: 'Set to false to hide the ticket button even if checkout is active.',
      initialValue: true,
    }),
  ],
})
