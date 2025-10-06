# Sacred Feminine - Content Management System

The Sanity CMS backend for Sacred Feminine, providing content management for retreats, resources, events, and more.

> **Note**: This is part of a larger platform. See the [main project README](../README.md) for complete documentation.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development studio
npm run dev
```

Visit `http://localhost:3333` to access the Sanity Studio.

## 🛠️ Tech Stack

- **CMS**: Sanity Studio v4.9.0
- **Language**: TypeScript
- **Styling**: React + Styled Components
- **Plugins**: Vision Tool, Color Input Plugin
- **Database**: Sanity Content Lake

## 📁 Project Structure

```
sacred-feminine-cms/
├── schemaTypes/           # Content type definitions
│   ├── retreatType.ts    # Retreat content schema
│   ├── eventType.ts      # Event content schema  
│   ├── resourceType.ts   # Resource library schema
│   ├── paymentOptionType.ts   # Payment configuration
│   ├── lodgingOptionType.ts   # Lodging options
│   ├── checkoutPageType.ts    # Checkout page config
│   ├── colorSchemeType.ts     # Color scheme settings
│   └── index.ts          # Schema exports
├── static/               # Static studio assets
├── sanity.config.ts     # Main studio configuration
├── sanity.cli.ts        # CLI configuration
└── tsconfig.json        # TypeScript configuration
```

## 🎛️ Content Schema

### Core Content Types

#### 1. Retreat (`retreatType.ts`)
Complete retreat management with multiple content groups:

**Details Group**
- Title, subtitle, description
- Start and end dates
- Location information
- Capacity and current enrollment

**Cost Group**  
- Full price option
- Partial scholarship pricing
- Full scholarship option
- Payment plan configurations

**Prep Group**
- Pre-retreat preparation materials
- Reading lists and resources
- What to bring/pack
- Travel information

**Accommodations Group**
- Lodging options and pricing
- Room types and availability
- Meal plans and dietary accommodations

**Cancellation Group**
- Cancellation policy details
- Refund terms and conditions
- Transfer options

#### 2. Event (`eventType.ts`)
Event management for workshops and gatherings:
- Event details and description
- Scheduling and duration
- Registration information
- Pricing and payment options

#### 3. Resource (`resourceType.ts`)  
Library of curated content:
- Books, music, films, and other media
- Category classification
- Author/creator information
- External purchase/access links
- Featured status and ordering

#### 4. Payment Option (`paymentOptionType.ts`)
Stripe integration configuration:
- Price IDs for different tiers
- Payment type (one-time, recurring)
- Currency and amount
- Description and display names

#### 5. Lodging Option (`lodgingOptionType.ts`)
Accommodation management:
- Room types and descriptions
- Pricing per night/package
- Availability calendars
- Special requirements and amenities

#### 6. Checkout Page (`checkoutPageType.ts`)
Dynamic checkout configuration:
- Page-specific settings
- Payment options mapping
- Custom messaging and terms

#### 7. Color Scheme (`colorSchemeType.ts`)
Brand color management:
- Primary and secondary colors
- Accent and background colors
- Color picker integration

## ⚙️ Configuration

### Studio Configuration (`sanity.config.ts`)

```typescript
export default defineConfig({
  name: 'default',
  title: 'Sacred Feminine Studio',
  studioHost: 'sacred-feminine-studio',
  projectId: 'n031luuh',
  dataset: 'production',
  plugins: [
    structureTool(),    // Content structure
    visionTool(),       // GraphQL queries  
    colorInput()        // Color picker
  ],
  schema: {
    types: schemaTypes  // All content types
  }
})
```

### Project Details
- **Project ID**: `n031luuh`
- **Dataset**: `production`
- **Studio Host**: `sacred-feminine-studio`
- **Studio URL**: `https://sacred-feminine-studio.sanity.studio`

## 🔧 Available Scripts

```bash
npm run dev            # Start development studio
npm run start          # Start production studio  
npm run build          # Build studio bundle
npm run deploy         # Deploy to Sanity hosting
npm run deploy-graphql # Deploy GraphQL API
```

## 🎨 Studio Features

### Content Management
- **Rich Text Editor**: Portable text with custom marks
- **Image Management**: Upload, crop, and optimize images
- **Reference Fields**: Link between different content types
- **Validation**: Built-in field validation and requirements

### Vision Tool
- **GraphQL Queries**: Test and develop queries
- **GROQ Queries**: Sanity's query language
- **Real-time Results**: Instant query feedback
- **Export Options**: Copy queries for frontend use

### Color Input Plugin
- **Color Picker**: Visual color selection
- **Hex/RGB/HSL**: Multiple color format support
- **Brand Consistency**: Standardized color management

## 🔗 Frontend Integration

### Sanity Client Configuration
The frontend connects using these settings:

```javascript
// In frontend (sacred-feminine-ui)
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'n031luuh',
  dataset: 'production', 
  useCdn: true,
  apiVersion: '2023-01-01'
})
```

### Content Queries
Example queries used by the frontend:

```javascript
// Fetch all retreats
const retreats = await client.fetch(`
  *[_type == "retreat"] | order(startDate asc) {
    _id,
    title,
    subtitle,
    description,
    startDate,
    endDate,
    location,
    fullPrice,
    partialScholarship,
    fullScholarship
  }
`)

// Fetch specific retreat
const retreat = await client.fetch(`
  *[_type == "retreat" && slug.current == $slug][0] {
    ...,
    lodgingOptions[]->
  }
`, { slug })
```

## 🚀 Deployment

### Studio Deployment
```bash
# Deploy studio to Sanity hosting
npm run deploy

# Custom domain configuration available
# SSL certificates automatically managed
```

### GraphQL API
```bash
# Deploy GraphQL API endpoint
npm run deploy-graphql

# Enables GraphQL queries from frontend
# Alternative to GROQ for complex queries
```

### CORS Configuration
Configure allowed origins in Sanity dashboard:
- Development: `http://localhost:3000`
- Production: `https://yourdomain.com`
- Studio: `https://sacred-feminine-studio.sanity.studio`

## 🔐 Security & Permissions

### API Tokens
- **Public Token**: Read-only access for frontend
- **Write Token**: Full access for authenticated operations
- **Admin Token**: Complete project management

### Dataset Access
- **Production**: Live content data
- **Development**: Test and staging content
- **Backup**: Automated daily backups

### User Roles
- **Administrator**: Full studio access
- **Editor**: Content creation and editing
- **Viewer**: Read-only access

## 📊 Content Management Workflow

### 1. Content Creation
- Use Sanity Studio interface
- Fill required fields with validation
- Add media and rich text content
- Set publication status

### 2. Content Review
- Preview changes in studio
- Use Vision tool for query testing
- Validate references and relationships

### 3. Publishing
- Publish content to make live
- Changes sync automatically to frontend
- Maintain revision history

### 4. Maintenance
- Regular content audits
- Image optimization
- Schema updates as needed

## 🧪 Development

### Schema Development
When modifying content types:

1. **Update Schema**: Edit files in `schemaTypes/`
2. **Test Locally**: Use development studio
3. **Deploy Changes**: Push to production studio
4. **Update Frontend**: Modify queries if needed

### Custom Components
Add custom studio components:

```typescript
// Example custom input component
import { defineField } from 'sanity'

export default defineField({
  name: 'customField',
  type: 'string',
  components: {
    input: CustomInputComponent
  }
})
```

### Studio Customization
- **Custom themes**: Modify studio appearance
- **Custom tools**: Add specialized management tools
- **Workflow automation**: Custom actions and webhooks

## 🔧 Troubleshooting

### Common Issues

**Studio Won't Start**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Schema Validation Errors**
- Check TypeScript compilation
- Verify all required fields
- Review field type definitions

**Deployment Issues**
- Verify authentication tokens
- Check project permissions
- Ensure dataset exists

**Content Not Syncing**
- Check CORS configuration
- Verify API token permissions
- Review frontend client setup

## 📞 Support

For CMS-specific support:

1. Check [Sanity documentation](https://www.sanity.io/docs)
2. Review schema type definitions
3. Test queries in Vision tool
4. Verify studio configuration

---

*Part of the Sacred Feminine platform - see main README for complete project documentation.*