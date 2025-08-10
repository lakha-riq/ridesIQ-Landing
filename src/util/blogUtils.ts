import { client } from '@/contentful/contenful';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

const parseBlogEntry = (entry: any) => {
  const { fields, sys } = entry;
  function normalizeImageUrl(url: string) {
    return url.startsWith('//') ? `https:${url}` : url;
  }

  return {
    id: sys.id,
    title: documentToPlainTextString(fields.title || { content: [] }),
    slug: documentToPlainTextString(fields.slug || { content: [] }),
    content: documentToPlainTextString(fields.content || { content: [] }),
    image:
      normalizeImageUrl(fields.image.fields.file.url) ||
      'https://via.placeholder.com/1280x720',
    author: {
      name: documentToPlainTextString(fields.authorName || { content: [] }),
      avatar:
        normalizeImageUrl(fields.authorImage?.fields?.file?.url) ||
        'https://via.placeholder.com/100x100',
      role: fields.authorRole || '',
    },
    category: fields.category || '',
    readtime: fields.readtime || '',
    publishedAt: new Date(sys.createdAt),
  };
};

export const getParsedBlogEntries = async () => {
  try {
    const entries = await client.getEntries();
    const parsed = entries.items
      .filter((item: any) => item.fields.title)
      .map(parseBlogEntry);

    return parsed;
  } catch (error) {
    console.error('Error fetching blog entries:', error);
    return [];
  }
};
