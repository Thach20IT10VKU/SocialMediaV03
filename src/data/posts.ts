import { Post } from "../model/post";

const MILLISECONDS_IN_HOUR = 3600000;

export const POSTS: Post[] = [
    {
        id: '0000000000',
        user: 'User1',
        text: 'This is my first post!',
        createdDate: Date.now(),
    },

    {
        id: '0000000001',
        user: 'User1',
        text: 'This is my second post!',
        createdDate: Date.now() - MILLISECONDS_IN_HOUR,
    },

    {
        id: '0000000002',
        user: 'User1',
        text: 'This is my first post!',
        createdDate: Date.now() - MILLISECONDS_IN_HOUR * 1,
    },

    {
        id: '0000000003',
        user: 'User1',
        text: 'This is my second post!',
        createdDate: Date.now() - MILLISECONDS_IN_HOUR * 2,
    },

    {
        id: '0000000004',
        user: 'User1',
        text: 'This is my first post!',
        createdDate: Date.now() - MILLISECONDS_IN_HOUR * 3,
    },

    {
        id: '0000000005',
        user: 'User2',
        text: 'This is my second post!',
        createdDate: Date.now() - MILLISECONDS_IN_HOUR * 4,
    },

    {
        id: '0000000006',
        user: 'User2',
        text: 'This is my first post!',
        createdDate: Date.now() - MILLISECONDS_IN_HOUR * 5,
    },

    {
        id: '0000000007',
        user: 'User2',
        text: 'This is my second post!',
        createdDate: Date.now() - MILLISECONDS_IN_HOUR * 6,
    },

    {
        id: '0000000008',
        user: 'User1',
        text: 'This is my first post!',
        createdDate: Date.now() - MILLISECONDS_IN_HOUR * 7,
    },

    {
        id: '0000000009',
        user: 'User1',
        text: 'This is my second post!',
        createdDate: Date.now() - MILLISECONDS_IN_HOUR * 8,
    },

    {
        id: '0000000010',
        user: 'User3',
        text: 'This is my first post!',
        createdDate: Date.now() - MILLISECONDS_IN_HOUR * 9,
    },

    {
        id: '0000000011',
        user: 'User3',
        text: 'This is my second post!',
        createdDate: Date.now() - MILLISECONDS_IN_HOUR * 10,
    },

    {
        id: '0000000012',
        user: 'User2',
        text: 'This is my first post!',
        createdDate: Date.now() - MILLISECONDS_IN_HOUR * 11,
    },

    {
        id: '0000000013',
        user: 'User2',
        text: 'This is my second post!',
        createdDate: Date.now() - MILLISECONDS_IN_HOUR * 12,
    },

    {
        id: '0000000014',
        user: 'User2',
        text: 'This is my first post!',
        createdDate: Date.now() - MILLISECONDS_IN_HOUR * 13,
    },

    {
        id: '00000000015',
        user: 'User3',
        text: 'This is my second post!',
        createdDate: Date.now() - MILLISECONDS_IN_HOUR * 14,
    },
];