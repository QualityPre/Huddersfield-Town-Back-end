import { IoManOutline as icon } from 'react-icons/io5';

export default {
    name: 'player',
    title: 'Players',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Player Name',
            type: 'string',
            description: 'Name of the player',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'appearances',
            title: 'Appearances',
            type: 'number',
            description: 'how many appearances they made',
            validation: (Rule) => Rule.required().min(0),
        },
        {
            name: 'position',
            title: 'Position',
            type: 'string',
            options: {
                list: ['goalkeeper', 'centre-back', 'full-back', 'winger', 'centre-midfield', 'striker'],
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'goals',
            title: 'Goals',
            type: 'number',
            description: 'how many goals they scored',
            validation: (Rule) => Rule.required().min(0),
        },
        {
            title: 'joined',
            name: 'startYear',
            type: 'date',
            options: {
                dateFormat: 'YYYY',
            },
            validation: (Rule) => Rule.required().min('1908'),
        },
        {
            title: 'left',
            name: 'endYear',
            type: 'date',
            options: {
                dateFormat: 'YYYY',
            },
            validation: (Rule) => Rule.required().min(Rule.valueOfField('startDate')),
        },

        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
            start: 'startYear',
            end: 'endYear',
            position: 'position',
        },
        prepare(selection) {
            const { title, media, start, end, position } = selection;
            const startYear = start.split('-')[0];
            const endYear = end.split('-')[0];
            return {
                title,
                media,
                subtitle: `${startYear} - ${endYear} (${position})`,
            };
        },
    },
};
