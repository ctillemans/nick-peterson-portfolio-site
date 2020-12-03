import sanityClient from 'part:@sanity/base/client';
import { string } from 'prop-types';
var slugify = require('slugify');

function asyncSlugify(input, type) {
  console.log(input);
  // make a slug from the input
  const slug = slugify(input);
  console.log(slug);

  const query =
    'count(*[_type=="haircut" && haircutSlug.current == $slug]{_id, haircutTitle})';
  const params = { slug: slug };
  return sanityClient.fetch(query, params).then((count) => {
    console.log(`people with same slug: ${count}`);

    return count >= 1 ? `${slug}-${count + 1}` : slug;
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
    // TODO: change to array of images to make it more dynamic
    {
      title: 'Image 1',
      name: 'image1',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Date',
      name: 'date',
      type: 'date',
      options: {
        calendarTodayLabel: true,
      },
    },
  ],
};
