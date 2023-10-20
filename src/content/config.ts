import { z, defineCollection, reference } from "astro:content";

const Content = ({ image }) =>
  z.object({
    wpId: z.number(),
    title: z.string(),
    description: z.string(),
    draft: z.boolean().optional(),
    type: z.string(),
    createdAt: z.date(),
    modifiedAt: z.date(),
    authorId: z.number().optional(),
    categories: z.array(reference("categories")).optional(),
    tags: z.array(reference("tags")).optional(),
    featuredMedia: z
      .object({
        id: z.number(),
        src: image(),
        alt: z.string(),
        caption: z.string().optional(),
      })
      .optional(),
  });

const Category = z.object({
  wpId: z.number(),
  count: z.number(),
  name: z.string(),
  description: z.string().optional(),
  slug: z.string().optional(),
});

const Tag = z.object({
  wpId: z.number(),
  count: z.number(),
  name: z.string(),
  description: z.string().optional(),
  slug: z.string().optional(),
});

const WPContentType = z.object({
  title: z.string(),
  description: z.string(),
  collectionName: z.string(),
  slug: z.string(),
});

const blogCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: Content,
});

const categoriesCollection = defineCollection({
  type: "data", // v2.5.0 and later
  schema: Category,
});

const tagsCollection = defineCollection({
  type: "data", // v2.5.0 and later
  schema: Tag,
});

const wpContentTypesCollection = defineCollection({
  type: "data", // v2.5.0 and later
  schema: WPContentType,
});

const officesCollection = defineCollection({
  type: "data", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      phone: z.string(),
      fax: z.string().optional(),
      address: z.object({
        street: z.string(),
        city: z.string(),
        postal: z.string().optional(),
        country: z.string().optional(),
      }),
      email: z.string().email(),
      link: z.string().url().optional(),
      map: image(),
    }),
});

const employeesCollection = defineCollection({
  type: "data", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      name: z.object({
        first: z.string(),
        last: z.string(),
      }),
      position: z.string(),
      office: z.array(z.string()),
      email: z.string().email(),
      phone: z.string(),
      photo: image(),
      slug: z.string(),
      description: z.string().optional(),
      business_areas: z.array(z.string()).optional(),
      areas_of_expertise: z.array(z.string()).optional(),
      education: z
        .array(
          z.object({
            degree: z.string(),
            school: z.string(),
            year: z.string().optional(),
          })
        )
        .optional(),
      languages: z.array(z.string()).optional(),
      linkedIn: z.string().url().optional(),
      networks: z.array(z.string()).optional(),
    }),
});

export const collections = {
  blog: blogCollection,
  categories: categoriesCollection,
  tags: tagsCollection,
  "wp-content-types": wpContentTypesCollection,
  employees: employeesCollection,
  offices: officesCollection,
};

// {
//     "name": {"first": "", "last": ""},
//     "position": "",
//     "office": [""],
//     "phone": "",
//     "email": "",
//     "photo": "@assets/employees/",
//     "slug": "",
//     "description": "",
//     "business_areas": [],
//     "areas_of_expertise": [],
//     "education": [{"degree": "", "school": "", "year": ""}],
//     "languages": [],
//     "linkedIn": ""
//   }
