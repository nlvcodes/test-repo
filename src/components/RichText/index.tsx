import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'
import {
  JSXConvertersFunction,
  RichText as RichTextWithoutBlocks,
} from '@payloadcms/richtext-lexical/react'
import type {
  ContentWithMedia as ContentWithMediaProps,
} from '@/payload-types'
import {ContentWithMedia} from '@/blocks/ContentWithMedia/Component'

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<ContentWithMediaProps>

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  blocks: {
    contentWithMedia: ({node}) => <ContentWithMedia {...node.fields} />
  },
})

type Props = {
  data: SerializedEditorState
} & React.HTMLAttributes<HTMLDivElement>

export default function RichText(props: Props) {
  const { className, ...rest } = props
  return (
    <RichTextWithoutBlocks
      converters={jsxConverters}
      className={className}
      {...rest}
    />
  )
}
