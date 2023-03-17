import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, FlatList, Image, TouchableOpacity, Button } from 'react-native';
import games from './games.json';
import Header from './Header';
import Footer from './Footer';

export default function GameList({navigation}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedGameIndex, setSelectedGameIndex] = useState(null);

  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
    || game.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRandomGame = () => {
    if (!selectedGame) return null;

    const categoryGames = games.filter(game => game.category === selectedGame.category);
    const filteredGames = categoryGames.filter(game => game.id !== selectedGame.id); // filter out the selected game
    const randomIndex = Math.floor(Math.random() * filteredGames.length);
    return filteredGames[randomIndex];
  };

  const handleGameClick = (game, index) => {
      setSelectedGame(null);
      setSelectedGameIndex(null);
      setTimeout(() => {
        setSelectedGame(game);
        setSelectedGameIndex(index);
      },1);
  };

  const randomGame = getRandomGame();

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      
      <TextInput
        style={styles.searchBar}
        placeholder="Type here to search for a specific game"
        placeholderTextColor={"white"}
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <View style={styles.suggestionContainer2}>
          <Text style={styles.suggestionText2}>Suggestions will appear here</Text>
        </View>
      {selectedGame && randomGame && (
        <View style={styles.suggestionContainer}>
          <Text style={styles.suggestionText}>You may also like {randomGame.name}, a game from the same category : {randomGame.category}</Text>
        </View>
      )}

      <FlatList
        style={styles.list}
        data={filteredGames}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.gameContainer} onPress={() => handleGameClick(item, index)}>
            <Image style={styles.gameImage} source={{ uri: item.image }} />
            <Text style={styles.gameName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems:"center",
  },
  searchBar: {
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop:130,
    width:"100%",
    backgroundColor:"#DA3C3C",
    color:"white",

  },
  suggestionContainer: {
    position:'absolute',
    backgroundColor: '#f9c2ff',
    padding: 10,
    width:"100%",
    marginTop: 185,
    zIndex:309999,
    backgroundColor:"#062C49",
    borderRadius:10,
  },
  suggestionContainer2: {
    position:'absolute',
    backgroundColor: '#f9c2ff',
    padding: 10,
    width:"100%",
    marginTop: 185,
    zIndex:309,
    backgroundColor:"#062C49",
    height:61,
    borderRadius:10,
  },
  suggestionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color:"white",
    textAlign:"center",
  },
  suggestionText2: {
    marginTop:9,
    fontSize: 16,
    fontWeight: 'bold',
    color:"white",
    textAlign:"center",
  },
  resetButtonContainer: {
    marginBottom: 10,
  },
  list: {
    flex: 1,
    marginTop:70,
    width:"100%"
  },
  gameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    
  },
  gameImage: {
  width: 50,
  height: 50,
  marginRight: 10,
  borderRadius:9,
  borderColor:"#E9BD1F",
  borderWidth:2,
  },
  gameName: {
  fontSize: 18,
  fontWeight: '900',
  },
  });