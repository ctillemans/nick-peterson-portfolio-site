import sanityClient from 'part:@sanity/base/client';
import { string } from 'prop-types';
var slugify = require('slugify');

function asyncSlugify(input, type) {
  console.log(input);
  // make a slug from the input
  const slug = slugify(input);
  console.log(slug);

  const query =
    'count(*[_type=="haircut" && haircutTitle == $slug]{_id, haircutTitle})';
  const params = { slug: slug };
  return sanityClient.fetch(query, params).then((count) => {
    console.log(`people with same slug: ${count}`);

    return count > 1 ? `${slug}-${count - 1}` : slug;
  });
  // search all slugs
  //make it unique by adding the count to the end
}

export default {
  title: 'Haircut',
  name: 'haircut',
  type: 'document',
  fields: [
    {
      title: 'Hair cut title',
      name: 'haircutTitle',
      type: 'string',
      validation: (Rule) => Rule.max(100),
    },
    {
      title: 'Slug',
      name: 'haircutSlug',
      type: 'slug',
      options: {
        source: 'haircutTitle',
        slugify: asyncSlugify,
      },
    },
    {
      title: 'Description',
      name: 'description',
      description: 'describe the haircut',
      type: 'string',
      validation: (Rule) => Rule.max(250),
    },
    // TODO: make this an array of custom documents so that one of the
    // images can be the default image. THis might not be necasary with just more
    // restrictions on array ordering and clarity for the client to
    // upload in a particular way.
    {
      title: 'Haircut Images',
      name: 'haircutImages',
      type: 'array',
      description: 'Add haircut images',
      maxLength: 4,
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      title: 'Date',
      name: 'date',
      type: 'date',
      options: {
        calendarTodayLabel: true,
      },
    },
    {
      title: 'HairType',
      name: 'hairType',
      type: 'string',
      description: 'Type of hair:',
      options: {
        list: [
          {
            title: 'Straight',
            value: 'Straight',
          },
          {
            title: 'Wavy',
            value: 'Wavy',
          },
          {
            title: 'Curly',
            value: 'Curly',
          },
          {
            title: 'Kinky',
            value: 'Kinky',
          },
        ],
      },
    },
    {
      title: 'Hair Thickness',
      name: 'hair_thickness',
      type: 'string',
      description: 'Thickness of hair:',
      options: {
        list: [
          {
            title: 'Thin',
            value: 'Thin',
          },
          {
            title: 'Average',
            value: 'Average',
          },
          {
            title: 'Thick',
            value: 'Thick',
          },
        ],
      },
    },
    {
      title: 'Head Shape',
      name: 'head_shape',
      type: 'string',
      description: 'Shape of head:',
      options: {
        list: [
          { title: 'Heart', value: 'Heart' },
          { title: 'Square', value: 'Square' },
          { title: 'Pear', value: 'Pear' },
          { title: 'Rectangle', value: 'Rectangle' },
          { title: 'Round', value: 'Round' },
          { title: 'Oval', value: 'Oval' },
          { title: 'Oblong', value: 'Oblong' },
          { title: 'Diamond', value: 'Diamond' },
        ],
      },
    },
  ],
};
