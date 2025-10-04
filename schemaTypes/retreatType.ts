import {CalendarIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'retreat',
  title: 'Retreat',
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
    {
      name: 'prep',
      title: 'Retreat Prep',
    },
    {
      name: 'accommodations',
      title: 'Accommodations',
    },
    {
      name: 'cancellation',
      title: 'Cancellation Policy',
    },
    {
      name: 'join',
      title: 'Want to Join?',
    },
    {
      name: 'lodgingCheckout',
      title: 'Lodging & Checkout',
    },
  ],
  fields: [
    defineField({
      name: 'name',
      description: 'Name of the retreat',
      group: 'details',
      type: 'string',
    }),
    defineField({
      name: 'cardImage',
      title: 'Card Image',
      description: 'Image that appears on the retreat card',
      group: 'details',
      type: 'image',
      options: {
        hotspot: true, // Enables image cropping
      },
    }),
    defineField({
      name: 'range',
      description: 'Date range of the retreat (August 10th - August 12th for example',
      group: 'details',
      type: 'string',
    }),
    defineField({
      name: 'startDate',
      description: 'Start date of the retreat',
      group: 'details',

      type: 'date',
    }),
    defineField({
      name: 'endDate',
      description: 'End date of the retreat',
      group: 'details',

      type: 'date',
    }),
    defineField({
      name: 'startTime',
      description: 'Start time of the retreat',
      group: 'details',

      type: 'string',
    }),
    defineField({
      name: 'endTime',
      description: 'End time of the retreat',
      group: 'details',

      type: 'string',
    }),
    defineField({
      name: 'location',
      description: 'Location of the retreat',
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
      description: 'Details information - you can write multiple sentences and they will display properly on separate lines',
      type: 'text',
      group: 'details',
      rows: 8,
      initialValue:
        'Our retreat will begin around 5PM the 13th, but you are welcome to arrive anytime after 4pm. The retreat will end at 2:30PM on the 15th, and we ask that all participants be there until that time.\n\nEvery activity - group or solo - is not about adherence to a schedule or pleasing others, but we want to create an opportunity for you to listen to yourself, learning from your own heart and others around you.\n\nFor each retreat, a private facebook group is created - this can help retreat participants to get to knoweach other before the weekend and collaborate on transportation.',
    }),
    defineField({
      name: 'cost',
      description: 'Cost information - you can write multiple sentences and they will display properly on separate lines',
      type: 'text',
      group: 'cost',
      rows: 8,
      initialValue:
        'Please let us know if making a single payment is an obstacle for you as we also have scholarships available. The cost of the retreat is $1000.00.\n\nMeals included are dinner the first night, and the breakfasts the following two days. There will be some fridge space for you to bring food for other meals, and also long breaks for you to get or prepare your own meals.\n\nWe will have a wide variety of foods for the meals for those who are vegan, gluten free, etc.',
    }),
    defineField({
      name: 'cancellation',
      description: 'Cancellation policy information - you can write multiple sentences and they will display properly on separate lines',
      type: 'text',
      group: 'cancellation',
      rows: 8,
      initialValue:
        'Due to the vendor charges for processing payments plus all of the backend work we do to prepare, we are unable to offer refunds.\n\nHowever, should you need to cancel for some reason, you are welcome to either gift your spot to someone, or exchange your spot with someone else.',
    }),
    defineField({
      name: 'joinOne',
      description: 'First Line of Join',
      type: 'text',
      group: 'join',
      initialValue:
        'Space is limited to 27 participants, if you would like to come, please send an email to team@sacredfeminine.co with your first and last name.',
    }),
    defineField({
      name: 'joinTwo',
      description: 'Second Line of Join',
      type: 'text',
      group: 'join',
      initialValue:
        'If you want to request on site accommodation (see accommodation section for details) please include which room type you prefer in your email as well.',
    }),
    defineField({
      name: 'joinThree',
      description: 'Third Line of Join',
      type: 'text',
      group: 'join',
      initialValue:
        'These e-mails will be answered on a first come first serve basis. If you decide to join, we will provide a link for you to make an online payment for the retreat (and your room if applicable).',
    }),

    defineField({
      name: 'prep',
      description: 'Retreat prep information - you can write multiple sentences and they will display properly on separate lines',
      type: 'text',
      group: 'prep',
      rows: 8,
      initialValue:
        'Upon registration, you will receive a welcome email that will provide details on how you can best prepare for the retreat. It will also include a very basic outline of what will happen over the course of the retreat.\n\nWe will also ask you to provide any information about yourself that you feel you want to share so we can get to know you better and serve you well at the retreat.\n\nIf you requested an on site accommodations but there is no room left, or you prefer to arrange your own, there will be a facebook group that you can join once you have paid for your ticket or a deposit.',
    }),
    defineField({
      name: 'accommodations',
      description: 'Accommodations information - you can write multiple sentences and they will display properly on separate lines',
      type: 'text',
      group: 'accommodations',
      rows: 8,
      initialValue:
        'We will have limited on site accommodations for those of you who are interested. This will be a "first come first serve" basis, so please let us know as soon as you can if you would like a bed on site. If you request a room in your email and there is space still available we will let you know. Here is the cost breakdown for an on-site room for the entirety of the retreat:\n\n- $300 for a private room (2 beds available)\n- $200 for a shared room (4 beds available)\n- $50 for barn bed further away from the house (2 beds available)',
    }),

    // Lodging & Checkout Integration Fields
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'The URL path for this retreat (e.g., sacred-feminine-summer-2025)',
      group: 'lodgingCheckout',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'accessCode',
      title: 'Access Code',
      type: 'string',
      description: 'Code required to access lodging and checkout pages for this retreat',
      group: 'lodgingCheckout',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'lodgingOptions',
      title: 'Available Lodging Options',
      type: 'array',
      group: 'lodgingCheckout',
      description: 'Select which lodging options are available for this retreat',
      of: [
        {
          type: 'reference',
          to: [{type: 'lodgingOption'}],
        },
      ],
    }),
    defineField({
      name: 'paymentOptions',
      title: 'Payment Options',
      type: 'array',
      group: 'lodgingCheckout',
      description: 'Configure payment options for this retreat',
      of: [
        {
          type: 'paymentOption',
        },
      ],
    }),
    defineField({
      name: 'checkoutDescription',
      title: 'Checkout Page Description',
      type: 'text',
      description: 'Description that appears on the checkout page',
      group: 'lodgingCheckout',
      rows: 3,
    }),
    defineField({
      name: 'isLodgingCheckoutActive',
      title: 'Enable Integrated Lodging & Checkout',
      type: 'boolean',
      description: 'Toggle to enable the new integrated lodging and checkout flow',
      group: 'lodgingCheckout',
      initialValue: false,
    }),
  ],
})
