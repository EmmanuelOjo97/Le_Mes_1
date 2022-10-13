export default {
  name: "pin",
  title: "Pin",
  type: "document",
  initialValue: () => ({
    releaseDate: new Date().toISOString(),
  }),
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    { name: "about", title: "About", type: "string" },
    { name: "destination", title: "Destination", type: "url" },
    //{ name: "category", title: "Category", type: "string" },
    //*[title match "*numbers*"] | order(lower(title) desc)
    //*[releaseDate != "2016-04-27"]
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    //{ name: "userId", title: "UserID", type: "string" },
    { name: "postedBy", title: "PostedBy", type: "postedBy" },
    { name: "save", title: "Save", type: "array", of: [{ type: "save" }] },
    {
      name: "comments",
      title: "Comments",
      type: "array",
      of: [{ type: "comment" }],
    },
    {
      name: "releaseDate",
      title: "Release date",
      type: "datetime",
      readOnly: true,
      options: {
        calendarTodayLabel: "Today",
      },
    },
  ],
};
