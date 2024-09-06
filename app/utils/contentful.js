import { createClient } from 'contentful';

export const createContentClient = () => {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })
}
const client = createContentClient()

export const getEntriesByType = async (type) => {
  const response = await client.getEntries({
    content_type: 'projects',
    include: 1,
  })

  return response.items
}

export const getProjects = async () => {
  const results = await getEntriesByType('Projects')
  console.log(results)
  const projects = results.map((project) => project.fields)
  return projects
}

export async function getEntryBySlug(slug, contentType) {
  const client = createContentClient();
  const queryOptions = {
    content_type: contentType,
    'fields.projectSlug[match]': slug, // Adjust field name as needed
  };
  const queryResult = await client.getEntries(queryOptions);
  return queryResult.items[0];
}