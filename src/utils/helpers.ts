import { getCollection, type ContentCollectionKey } from 'astro:content'

const cts = await getCollection('wp-content-types')
const collectionNames = cts.map<ContentCollectionKey>(
	(ct) => ct.data.collectionName as ContentCollectionKey
)

export const getAllCollections = async () => {
	const collections = await Promise.all(collectionNames.map((name) => getCollection(name)))

	return collections
}

export const getAllCollectionsByAuthor = async (wpAuthorId: number, authorId: string) => {
	const collections = await Promise.all(
		collectionNames.map((name) =>
			getCollection(
				name,
				({ data }) => data.authorId === wpAuthorId || data.author?.id === authorId
			)
		)
	)

	return collections
}
