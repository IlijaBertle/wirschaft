import { defineType, defineField } from "sanity";

export default defineType({
  name: "event",
  title: "Beitrag / Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required().min(3),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "contentType",
      title: "Typ",
      type: "string",
      initialValue: "blog",
      options: {
        list: [
          { title: "Blog-Eintrag", value: "blog" },
          { title: "Event", value: "event" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "date",
      title: "Datum",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),

    defineField({
      name: "caption",
      title: "Kurzbeschreibung",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(240).warning("Die Kurzbeschreibung sollte kurz gehalten sein."),
    }),

    defineField({
      name: "description",
      title: "Beschreibung",
      type: "text",
      rows: 10,
    }),

    defineField({
      name: "image",
      title: "Hauptbild",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alternativtext",
          type: "string",
        }),
      ],
    }),

    defineField({
      name: "gallery",
      title: "Weitere Bilder",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: "alt",
              title: "Alternativtext",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "caption",
      media: "image",
    },
  },
});
