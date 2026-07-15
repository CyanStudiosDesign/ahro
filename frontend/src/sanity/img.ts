import { createImageUrlBuilder } from '@sanity/image-url'
import { client } from './client'

// Use the named export builder
const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
  // Safeguard: If image metadata doesn't exist, return null
  if (!source || !source.asset || (!source.asset._ref && !source.asset._id)) {
    return null;
  }
  
  return builder.image(source)
}