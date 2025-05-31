import {defineType, defineField} from 'sanity'

// Background gradient schema type
export const backgroundGradientType = defineType({
  name: 'backgroundGradient',
  title: 'Background Gradient',
  type: 'object',
  fields: [
    defineField({
      name: 'from',
      title: 'Gradient Start',
      type: 'color',
      description: 'Starting color for background gradient (hex format)',
      options: {
        disableAlpha: true
      },
    }),
    defineField({
      name: 'to',
      title: 'Gradient End',
      type: 'color',
      description: 'Ending color for background gradient (hex format)',
      options: {
        disableAlpha: true
      },
    }),
  ],
})

// Color scheme schema type
export const colorSchemeType = defineType({
  name: 'colorScheme',
  title: 'Color Scheme',
  type: 'object',
  fields: [
    defineField({
      name: 'primary',
      title: 'Primary Color',
      type: 'color',
      description: 'Main color for buttons and accents (hex format, e.g., #4a5568)',
      options: {
        disableAlpha: true
      },
    }),
    defineField({
      name: 'secondary',
      title: 'Secondary Color',
      type: 'color',
      description: 'Secondary color for highlights (hex format, e.g., #2d3748)',
      options: {
        disableAlpha: true
      },
    }),
    defineField({
      name: 'background',
      title: 'Background Gradient',
      type: 'backgroundGradient',
    }),
    defineField({
      name: 'text',
      title: 'Text Color',
      type: 'color',
      description: 'Main text color (hex format, e.g., #2d3748)',
      options: {
        disableAlpha: true
      },
    }),
  ],
})
