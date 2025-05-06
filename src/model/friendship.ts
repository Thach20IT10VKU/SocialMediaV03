export type Friendship = {
    id: string;
    users: string[];
    requester: string;
    status: FRIENDSHIP_STATUS;

    /**
     * Metadata
     */
    createDate: number;
    createDateString: string;
    accepteDate: number;
};

export enum FRIENDSHIP_STATUS {
    PENDING = 'pending',
    ACCEPTED = 'accepted',
    DECLINED = 'declined',
};
