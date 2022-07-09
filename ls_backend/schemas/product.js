export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    { name: "title", title: "Item", type: "string" },
    { name: "price", title: "£", type: "number" },
    { name: "about", title: "Description", type: "string" },
    { name: "destination", title: "Destination", type: "url" },
    { name: "category", title: "Category", type: "string" },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    { name: "userId", title: "UserID", type: "string" },
    // { name: "releaseDate", title: "Release date", type: "date" },
    { name: "postedBy", title: "PostedBy", type: "postedBy" },
    {
      name: "comments",
      title: "Comments",
      type: "array",
      of: [{ type: "comment" }],
    },
    { name: "releaseDate", title: "Release date", type: "date" },
  ],
};
