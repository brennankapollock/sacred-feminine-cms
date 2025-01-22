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
      name: 'cost',
      title: 'Cost',
    },
  ],
  fields: [
    defineField({
      name: 'name',
      description: 'Name of the event',
      group: 'details',
      type: 'string',
    }),
    defineField({
      name: 'startDate',
      description: 'Start date of the event',
      group: 'details',

      type: 'date',
    }),
    defineField({
      name: 'endDate',
      description: 'End date of the event',
      group: 'details',

      type: 'date',
    }),
    defineField({
      name: 'startTime',
      description: 'Start time of the event',
      group: 'details',

      type: 'string',
    }),
    defineField({
      name: 'endTime',
      description: 'End time of the event',
      group: 'details',

      type: 'string',
    }),
    defineField({
      name: 'location',
      description: 'Location of the event',
      group: 'details',

      type: 'string',
    }),
    defineField({
      name: 'price',
      description: 'Price in USD',
      type: 'string',
      group: 'cost',
      initialValue: '$1000',
    }),
    defineField({
      name: 'details',
      description: 'details',
      type: 'text',
      group: 'details',
      initialValue:
        'Our retreat will begin around 5PM the 13th, but you are welcome to arrive anytime after 4pm. The retreat will end at 2:30PM on the 15th, and we ask that all participants be there until that time.',
    }),

    defineField({
      name: 'costOne',
      description: 'First Line of Cost',
      type: 'text',
      group: 'cost',
      initialValue:
        'Please let us know if making a single payment is an obstacle for you as we also have scholarships available. The cost of the retreat is $1000.00. Meals included are dinner the first night, and the breakfasts the following two days. There will be some fridge space for you to bring food for other meals, and also long breaks for you to get or prepare your own meals. We will have a wide variety of foods for the meals for those who are vegan, gluten free, etc.',
    }),
  ],
})
