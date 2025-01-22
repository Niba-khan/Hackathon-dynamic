import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token:"skaTQl0tBFpo4g2TLPRE6BzP05kJWxmDZA0pqZVuRZ6M77ArGkIVcqY63MHNXHjDOYwVIozif6KyiVwrTEKvsy18a4vsqfwsvem2Y84ho0UEMMe2rbuLhqx6ih3At0yuVJKgjHeoep9NHp5BC5hRk11Ya9sCzrjPVFTEugeau07WmTd6NuFi" // Set to false if statically generating pages, using ISR or tag-based revalidation
})
