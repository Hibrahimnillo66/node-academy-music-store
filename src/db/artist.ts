export const artists = [{
    name: 'shakira',
    age: 30,
    id: 1
}, {
    name: 'Jose Jose',
    age: 70,
    id: 2
}];

export class Artist {
    getBy(criteria?: string, query?: string) {
        if (!criteria && !query) {
            return artists;
        }
        return artists.filter((artist) => `${artist[criteria]}` === query) || [];
    }
}