"use client"
import { ClientBlockProps } from '@/payload-types'
import { RichText } from '@/components/RichText'

type Props = ClientBlockProps

export const ClientBlock = (props: Props) => {
  return props.content && <RichText data={props.content} />
}