import React from 'react';
import { useState } from "react";
import Title from "./Title";
import { Text, StyleSheet, TextInput, Button, View } from 'react-native'

function Communication(props: any) {
  const messages = props.messages;
  const [chatMessage, setChatMessage] = useState('');
  const [stringMsg, setStringMsg] = useState('');
  React.useEffect(() => {
    setStringMsg(messages);
  }, [messages]);

  const sendMessageClick = () => {
    props.onSendMessage(chatMessage);
    setChatMessage('');
  }
  const clearMessageClick = () => {
    props.clearMessage();
  }
  return (
    // <>
    //   <Title name='Communications' />
    //   <Grid style={{padding:'0vh 30px 0vh 0vw'}} container direction='column' spacing={2}>
    //     <Grid item xs={12} lg={12}>
    //       <TextField value={chatMessage} onChange={event => setChatMessage(event.target.value)} fullWidth multiline rows={10} label="Transmitted" />
    //       <br />
    //       <br />
    //       <div className=" flex-end">
    //         <Button variant="contained" onClick={sendMessageClick}>Transmit</Button>
    //       </div>
    //     </Grid>
    //     <Grid item xs={12} lg={12}>
    //       <TextField value={stringMsg} fullWidth disabled multiline rows={10} label="Received" />
    //       <br />
    //       <br />
    //       <div className="flex-end">
    //         <Button variant="contained" onClick={clearMessageClick}>Clear</Button>
    //       </div>
    //     </Grid>

    //   </Grid>
    // </>
    <>
      <Title name='Communications' />

      <View style={styles.wrapper}>
        <Text style={styles.label}>Enter Phone Number</Text>

        <TextInput style={styles.inpt} multiline={true} value={chatMessage} onChangeText={(text) => setChatMessage(text)} />
        <Button
          onPress={sendMessageClick}
          title="Transmit"
          color="#1976d2"
        />
        <Text style={styles.label}>Enter Phone Number</Text>

        <TextInput style={styles.inpt} multiline={true} value={stringMsg} />
        <Button
          onPress={clearMessageClick}
          title="Clear"
          color="#1976d2"
        />
      </View>
    </>

  )
}

export default Communication;

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  inpt: {
    borderWidth: 2,
    borderColor: "#0b8ed2",
    borderRadius: 4,
    padding: 8,
    marginBottom: 15
  },
  label: {
    marginBottom: 5,
    color: "#0b8ed2"
  },
})