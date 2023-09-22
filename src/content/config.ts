import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
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
  //   blog: blogCollection,
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
