import { StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type Players = {
    firstName: string;
    lastName: string;
    position: 'goalkeeper' | 'defender' | 'midfielder' | 'striker';
}

const players: Players[] = [
    { firstName: 'Keren', lastName: 'Bayakissa', position: 'defender'},
    { firstName: 'Sarah Emmanuelle', lastName: 'Bomian', position: 'striker'},
    { firstName: 'Maelys', lastName: 'Bouzeau'  ,position: 'midfielder'},
    { firstName: 'Maya', lastName: 'Cartiaux', position: 'defender'},
    { firstName: 'Maissa', lastName: 'Derdour', position: 'defender'},
    { firstName: 'Niagale', lastName: 'Diakite', position: 'defender'},
    { firstName: 'Mariam', lastName: 'Diallo', position: 'defender'},
    { firstName: 'Oceane', lastName: 'Fang'  ,position: 'midfielder'},
    { firstName: 'Haddab', lastName: 'Syma Meriam',position: 'striker'},
    { firstName: 'Ines', lastName: 'Hamdane',position: 'striker'},
    { firstName: 'Maiwen', lastName: 'Khenoune'  ,position: 'midfielder'},
    { firstName: 'Jade', lastName: 'Lombi Ngoma', position: 'striker'},
    { firstName: 'Haby', lastName: 'Marena', position: 'defender'},
    { firstName: 'Lola', lastName: 'Montali'  ,position: 'midfielder'},
    { firstName: 'Dielia', lastName: 'Sall', position: 'midfielder'},
    { firstName: 'Lya', lastName: 'Salomon', position: 'defender'},
    { firstName: 'Khady', lastName: 'Samassi', position: 'striker'},
    { firstName: 'Moudjedj Shayna', lastName: 'Stangier', position: 'striker'},
    { firstName: 'Cassandra', lastName: 'Steyaert', position: 'striker'},
    { firstName: 'Aicha', lastName: 'Zerroug'  ,position: 'midfielder'},
]



const Players = () => {
    return (
        <View>
            <Text style={styles.title}>Joueurs</Text>

            {players.map((player) => (
                <View key={player.firstName} style={styles.container}>
                    <BouncyCheckbox onPress={(isChecked: boolean) => {}} textComponent={<Text style={{marginLeft: 8}} key={player.firstName}>{player.firstName} {player.lastName}</Text>}/>
                </View>
            ))}
            </View> 
    )
}   


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 8
        
    },
    title: {
        marginBottom: 8
    }
})

export default Players