import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableHighlight } from "react-native";

const HeaderButtonRight = () => (
  <TouchableHighlight onPress={() => console.log("Rechercher")}>
    <AntDesign name="plus" size={24} color="black" />
  </TouchableHighlight>
);

export default HeaderButtonRight;
