import { createContext, useContext } from 'react';
import { Game, initialGames } from './reducer';

export const GamesContext = createContext<Game[]>(initialGames);
export const GamesDispatchContext = createContext({});


export const useGames = () => useContext(GamesContext);