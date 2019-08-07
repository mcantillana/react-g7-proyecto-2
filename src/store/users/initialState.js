export const INIT_STATE = {
    users: {
        error: false,
        loading: false,
        data: [
            {
                id: 1,
                name: 'Manolo',
                email: 'manolito@gmail.com',
                favoriteEpisodes: ['1', '2', '3'],
                episodesWatched: ['1', '2', '3'],
                favoriteCharacters: ['1', '2', '3']
            },
            {
                id:2,
                name: 'Ana',
                email: 'anita@gmail.com',
                favoriteEpisodes: ['5', '6', '3'],
                episodesWatched: ['9', '2', '8'],
                favoriteCharacters: ['11', '12', '23']
            },
            {
                id: 3,
                name: 'Federico',
                email: 'federiquito@gmail.com',
                favoriteEpisodes: ['9', '6', '3'],
                episodesWatched: ['11', '8', '7'],
                favoriteCharacters: ['1', '12', '22']
            },
        ]
    }
};
