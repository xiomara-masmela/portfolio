export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'subcategories',
      title: 'Sub Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    }
  ],
}
