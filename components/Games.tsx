import { useGames } from "@/app/GameContext";
import { Text, View } from "react-native";

const Games = () => {
  const games = useGames();
  return (
    <View>
      <Text>Games</Text>
      {games.map((game) => (
        <Text key={game.id}>{game.name}</Text>
      ))}
    </View>
  );
};

export default Games;
