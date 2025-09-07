import {
  getPlayersFromPosition,
  getTextPosition,
  Position,
} from "@/helpers/players";
import { StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type Props = {
  position: Position;
};

const Players = ({ position }: Props) => (
  <View>
    <Text style={styles.title}>{getTextPosition(position)}</Text>
    <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8 }}>
      {getPlayersFromPosition(position).map((player) => (
        <View key={player.firstName} style={styles.container}>
          <BouncyCheckbox
            onPress={(isChecked: boolean) => {}}
            textComponent={
              <Text style={{ marginLeft: 8 }} key={player.firstName}>
                {player.firstName} {player.lastName}
              </Text>
            }
          />
        </View>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 8,
  },
  title: {
    marginBottom: 8,
  },
});

export default Players;
