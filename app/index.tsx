import Games from "@/components/Games";
import Players from "@/components/Players";
import { useReducer } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GamesContext, GamesDispatchContext } from "./GameContext";
import { gamesReducer, initialGames } from "./reducer";

export default function HomeScreen() {
  const [games, dispatch] = useReducer(gamesReducer, initialGames);

  return (
    <GamesContext value={games}>
      <GamesDispatchContext value={dispatch}>
        <SafeAreaView style={styles.container}>
          <Players position="defender" />
          <Players position="midfielder" />
          <Players position="striker" />

          <Games />
        </SafeAreaView>
      </GamesDispatchContext>
    </GamesContext>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#fff",
    flex: 1,
  },
});
