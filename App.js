import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
<Image
source={require('./assets/imagemicone.png')}

/>
     <Text style={styles.titulo}>olá mundo! Meu Nome é AZEVEDO RAFAEL SABINO</Text>
      <Text style={styles.subtitulo}>A minha primeira app em React Native!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'hsl(192, 65%, 33%)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  
});
