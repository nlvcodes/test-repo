import type { Block } from 'payload'
import { lexicalEditor, defaultColors, TextStateFeature } from '@payloadcms/richtext-lexical'

export const ClientBlock: Block = {
  slug: 'clientBlock',
  interfaceName: 'ClientBlockProps',
  fields: [
    {
      type: 'richText',
      name: 'content',
      editor: lexicalEditor({
        features: ({ defaultFeatures, rootFeatures }) => [
          ...defaultFeatures,
          ...rootFeatures,
          TextStateFeature({
            state: {
              color: {
                ...defaultColors.text,
                ...defaultColors.background,
              },
              underline: {
                'dashed': {
                  label: 'Dashed',
                  css: {
                    'text-decoration': 'underline dashed',
                  },
                },
              },
            },
          }),
        ],
      }),
    },
  ],
}