export type Players = {
    firstName: string;
    lastName: string;
    position: string
}

export type Game = {
    id: number;
    name: string;
    players: Players[]
}

type Action = {
    type: string;
    payload: any;
}
export const gamesReducer = (games: Game[], action: Action) => {
    switch (action.type) {
        case 'add':
            return [...games, action.payload];
        case 'remove':
            return games.filter((g) => g.id !== action.payload);
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

export const initialGames = []