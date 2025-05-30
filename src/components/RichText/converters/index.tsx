import {JSXConvertersFunction} from "@payloadcms/richtext-lexical/react";
import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'
import {textConverter} from "./textConverter";
import {ClientBlockProps} from '@/payload-types'
import { ClientBlock } from '@/blocks/ClientBlock/Component'

type NodeTypes = DefaultNodeTypes | SerializedBlockNode<ClientBlockProps>

export const jsxConverter: JSXConvertersFunction<NodeTypes> = ({defaultConverters}) => ({
  ...defaultConverters,
  ...textConverter,
  blocks: {
    clientBlock: ({node}) => <ClientBlock {...node.fields} />,
  }
})
