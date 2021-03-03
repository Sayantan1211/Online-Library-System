export const BooksAddSchema = {
  name: "BooksAdd",
  controls: [
    {
      fieldType: "SimpleInput",
      type: "text",
      name: "name",
      label: "Name",
    },
    {
      fieldType: "SimpleTextArea",
      type: "text",
      name: "description",
      label: "Description",
    },
    {
      fieldType: "SimpleInput",
      type: "number",
      name: "count",
      label: "Count",
    },
    {
      fieldType: "SimpleInput",
      type: "number",
      name: "pages",
      label: "Pages",
    },
    {
      fieldType: "SimpleInput",
      type: "text",
      name: "author",
      label: "Author",
    },
    {
      fieldType: "SimpleFileUpload",
      name: "bookImage",
      label: "Image",
    },
    {
      fieldType: "SimpleButton",
      type: "submit",
      label: "Add Book",
    },
  ],
};
