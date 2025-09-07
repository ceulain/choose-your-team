export type Position = 'goalkeeper' | 'defender' | 'midfielder' | 'striker';
export type Players = {
    firstName: string;
    lastName: string;
    position: Position
}

export const players: Players[] = [
    { firstName: 'Keren', lastName: 'Bayakissa', position: 'defender' },
    { firstName: 'Sarah Emmanuelle', lastName: 'Bomian', position: 'striker' },
    { firstName: 'Maelys', lastName: 'Bouzeau', position: 'midfielder' },
    { firstName: 'Maya', lastName: 'Cartiaux', position: 'defender' },
    { firstName: 'Maissa', lastName: 'Derdour', position: 'defender' },
    { firstName: 'Niagale', lastName: 'Diakite', position: 'defender' },
    { firstName: 'Mariam', lastName: 'Diallo', position: 'defender' },
    { firstName: 'Oceane', lastName: 'Fang', position: 'midfielder' },
    { firstName: 'Haddab', lastName: 'Syma Meriam', position: 'striker' },
    { firstName: 'Ines', lastName: 'Hamdane', position: 'striker' },
    { firstName: 'Maiwen', lastName: 'Khenoune', position: 'midfielder' },
    { firstName: 'Jade', lastName: 'Lombi Ngoma', position: 'striker' },
    { firstName: 'Haby', lastName: 'Marena', position: 'defender' },
    { firstName: 'Lola', lastName: 'Montali', position: 'midfielder' },
    { firstName: 'Dielia', lastName: 'Sall', position: 'midfielder' },
    { firstName: 'Lya', lastName: 'Salomon', position: 'defender' },
    { firstName: 'Khady', lastName: 'Samassi', position: 'striker' },
    { firstName: 'Moudjedj Shayna', lastName: 'Stangier', position: 'striker' },
    { firstName: 'Cassandra', lastName: 'Steyaert', position: 'striker' },
    { firstName: 'Aicha', lastName: 'Zerroug', position: 'midfielder' },
]


export const getPlayersFromPosition = (position: string) => players.filter((player) => player.position === position);
export const getTextPosition = (position: string) => {
    switch (position) {
        case 'goalkeeper':
            return 'Gardien';
        case 'defender':
            return 'Défenseur';
        case 'midfielder':
            return 'Milieu de terrain';
        case 'striker':
            return 'Attaquant';
        default:
            return '';
    }
}
