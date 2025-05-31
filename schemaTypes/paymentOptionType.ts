import {defineType, defineField} from 'sanity'

export const paymentOptionType = defineType({
  name: 'paymentOption',
  title: 'Payment Option',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Option Name',
      type: 'string',
      description: 'e.g., "Full Retreat Payment" or "Retreat Deposit"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Payment Type',
      type: 'string',
      description: 'e.g., "Full Payment", "Deposit", "Second Payment"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price in dollars (without $ symbol)',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Optional description for this payment option',
      rows: 2,
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Whether this payment option is available',
      initialValue: true,
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this option appears (1, 2, 3, etc.)',
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'type',
      price: 'price',
    },
    prepare({title, subtitle, price}) {
      return {
        title: title,
        subtitle: `${subtitle} - $${price}`,
      }
    },
  },
})
