import React, { useState } from "react";
import {StyleSheet, Text, View, TextInput, Pressable, Modal, ScrollView } from 'react-native';

export default function Edit({updateNote, showModal, displayModal, title, note}) {

  const [changeNote, setChangeNote] = useState(note)

  const updatingNote = () => {
    updateNote(changeNote)
    displayModal()
  }



  return (

    <View>
      <Modal animationType="slide" visible={showModal}>
        <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Pressable
      onPress={displayModal}>
        <View style={styles.hide}>
        <Text style={{color: 'white', textAlign:'center', fontWeight: 'bold'}}>HIDE</Text>
        </View>
      </Pressable>

        </View>

        <View>
        <ScrollView style={styles.scrollNote}>
        <TextInput
        style={styles.note}
         placeholder="This is where you will display your notes. This is a really good place where you can jot down your notes and have it saved forever"
         multiline={true}
         numberOfLines={5}
         value={changeNote}
         onChangeText={setChangeNote}
        />
        </ScrollView>

        </View>
        <View style={styles.postBox}>
          <Pressable
          onPress={updatingNote}>
          <Text style={styles.post}>CREATE</Text>
          </Pressable>

        </View>



      </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    // flex: 1,
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'space-between',
    padding: 15,
  },
  title: {
    fontSize: 20,
  },
  hide: {
  padding: 5,
  margin: 10,
  marginRight: 20,
  backgroundColor: 'red',
  width: "100%",
  height: 25,
  borderRadius: 10,

  // borderWidth: 1,
  },

  scrollNote: {
    // flex: 1,
    // borderWidth: 1,
    height: "43%"
  },
  note: {
    // borderWidth: 1,
    height: "500%",
    width: "100%",
    marginVertical: 0,
    padding: 20,
  },
  postBox: {
    margin: 10,
    backgroundColor: 'red',
    width: "30%",
    height: 26,
    borderRadius: 10,
    alignSelf: 'flex-end',
    padding: 5,

  },
  post: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  }
})