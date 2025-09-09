import {
  getPlayersFromPosition,
  getTextPosition,
  Position,
} from "@/helpers/players";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import AccordionItem from "./AccordionItem";
type Props = {
  position: Position;
};

const RightArrow = Animated.createAnimatedComponent(AntDesign);
const Players = ({ position }: Props) => {
  const open = useSharedValue(false);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ rotate: withTiming(open.value ? "90deg" : "0deg") }],
  }));
  const onPress = () => (open.value = !open.value);

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title} onPress={onPress}>
          {getTextPosition(position)}
        </Text>

        <RightArrow
          style={animatedStyles}
          name="right"
          size={12}
          color="black"
        />
      </View>
      <AccordionItem isExpanded={open} viewKey={position}>
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
      </AccordionItem>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    flexDirection: "row",
    marginBottom: 8,
  },
  title: {
    marginBottom: 8,
  },
});

export default Players;
