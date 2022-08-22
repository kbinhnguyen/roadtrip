import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation, TabActions } from "@react-navigation/native";

export default function TripCard(props: any) {

  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        if (props.tripStatus !== 'active') {
          navigation.navigate('DestinationViewer', {
            tripId: props.tripId,
            tripName: props.tripName
          })
        } else {
          const jumpToAction = TabActions.jumpTo('Active Trip');
          navigation.dispatch(jumpToAction);
        }

      }}
    >
      <Text style={styles.tripName}>{props.tripName}</Text>
      <View style={ props.tripStatus === 'active' ? styles.greenIndicator : styles.redIndicator}></View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 90,
    width: 300,
    backgroundColor: '#DEDBD2',
    alignItems: 'center',
    justifyContent:'space-between',
    borderRadius: 30,
    margin: 20,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  tripName: {
    marginLeft: 30,
    width: 200,
  },
  greenIndicator: {
    width: 10,
    height: 10,
    backgroundColor: '#00FF28',
    borderStyle: 'solid',
    borderRadius: 5,
    marginRight: 30,
    borderWidth: 1,
    borderColor: 'black'
  },
  redIndicator: {
    width: 10,
    height: 10,
    backgroundColor: '#FF2200',
    borderStyle: 'solid',
    borderRadius: 5,
    marginRight: 30,
    borderWidth: 1,
    borderColor: 'black'
  }
})