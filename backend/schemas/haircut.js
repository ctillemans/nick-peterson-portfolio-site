import { string } from 'prop-types';

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
