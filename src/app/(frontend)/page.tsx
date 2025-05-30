import {getPayload} from 'payload'
import config from '@payload-config'
import { RichText } from '@/components/RichText'

export default async function Page() {
  const payload = await getPayload({config})
  const page = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: 'post-1'
      }
    }
  }).then(res => res.docs[0])

  return page?.content && <RichText data={page.content} />

}