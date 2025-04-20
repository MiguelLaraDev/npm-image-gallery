export interface ThumbnailClickEvent extends CustomEvent {
    detail: {
        item: {
            id: string;
            index: number;
        };
    };
}
export interface NavClickEvent extends CustomEvent {
    detail: {
        item: {
            id: string;
            index: number;
        };
    };
}
