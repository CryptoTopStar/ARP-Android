import React, { useState } from 'react';
// import { Button, TextField, Stack, Box } from "@mui/material";
import Title from './Title';
import { Text, StyleSheet, TextInput, Button, View } from 'react-native'

// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import MediaQuery from 'react-responsive'

function Server(props: any) {
  const [type, setType] = React.useState('');
  const [address, setAddress] = React.useState('127.0.0.1');
  const [port, setPort] = React.useState('13131');

  const serverOpen = () => {
    props.joinServer(port, address);
  }
  // const handleChange = (event: ) => {
  //   setType(event.target.value as string);
  // };
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    // <>
    //   <Title name='Server' />
    //   <Box sx={{padding:'0vh 20px'}}>
    //   <MediaQuery minWidth='701px'>
    //     <Stack direction='row' spacing={2} >
    //       <TextField value={address} onChange={(e) => setAddress(e.target.value)} label="Address" />
    //       <TextField value={port} onChange={(e) => setPort(e.target.value)} type='number' label="Port" />
    //       <FormControl sx={{ width: '200px' }}>
    //         <InputLabel id="demo-simple-select-label">Type</InputLabel>
    //         <Select
    //           value={type}
    //           label="Type"
    //           onChange={handleChange}
    //         >
    //           <MenuItem value={10}>WebSocket</MenuItem>
    //           <MenuItem value={20}>WebSocket</MenuItem>
    //           <MenuItem value={30}>WebSocket</MenuItem>
    //         </Select>
    //       </FormControl>
    //       <Button  size='large' variant="contained" onClick={serverOpen}>Open</Button>
    //       <Button  size='large' variant="contained">Close</Button>
    //     </Stack>
    //   </MediaQuery>
    //   <MediaQuery maxWidth="700px" minWidth="400px">
    //     <Stack  spacing={2}>
    //       <Stack  direction='row' spacing={2}>
    //       <TextField fullWidth value={address} onChange={(e) => setAddress(e.target.value)} label="Address" />
    //         <TextField fullWidth value={port} onChange={(e) => setPort(e.target.value)} type='number' label="Port" />
    //       </Stack>
    //         <Stack direction='row' spacing={2}>
    //         <FormControl fullWidth >
    //           <InputLabel id="demo-simple-select-label">Type</InputLabel>
    //           <Select
    //             value={type}
    //             label="Type"
    //             onChange={handleChange}
    //           >
    //             <MenuItem value={10}>WebSocket</MenuItem>
    //             <MenuItem value={20}>WebSocket</MenuItem>
    //             <MenuItem value={30}>WebSocket</MenuItem>
    //           </Select>
    //         </FormControl>
    //         <Button  size='large' variant="contained" onClick={serverOpen}>Open</Button>
    //         <Button  size='large' variant="contained">Close</Button>

    //         </Stack>

    //     </Stack>
    //   </MediaQuery>

    //   <MediaQuery maxWidth='400px'>
    //     <Stack  spacing={2}>
    //         <TextField value={address} onChange={(e) => setAddress(e.target.value)} label="Address" />
    //         <TextField value={port} onChange={(e) => setPort(e.target.value)} type='number' label="Port" />
    //         <FormControl >
    //           <InputLabel id="demo-simple-select-label">Type</InputLabel>
    //           <Select
    //             value={type}
    //             label="Type"
    //             onChange={handleChange}
    //           >
    //             <MenuItem value={10}>WebSocket</MenuItem>
    //             <MenuItem value={20}>WebSocket</MenuItem>
    //             <MenuItem value={30}>WebSocket</MenuItem>
    //           </Select>
    //         </FormControl>
    //         <Stack direction="row" spacing={2}>
    //         <Button fullWidth variant="contained" size='large' onClick={serverOpen}>Open</Button>
    //         <Button fullWidth variant="contained"  size='large'>Close</Button>
    //         </Stack>
    //     </Stack>
    //   </MediaQuery>
    //   </Box>


    // </>
    <>
      <Title name='Server' />
      <View style={styles.wrapper}>
        <Text style={styles.label}>Address:</Text>
        <TextInput style={styles.inpt} multiline={false} value={address} onChangeText={(text) => setAddress(text)} />
        <Text style={styles.label}>Port:</Text>
        <TextInput style={styles.inpt} multiline={false} value={port} keyboardType='numeric' onChangeText={(text) => setPort(text)} />
        <View style={styles.btnwrapper}>
          <Button
            onPress={serverOpen}
            title="Open"
            color="#1976d2"
          />
          <Button
            title="Clear"
            color="#1976d2"
          />
        </View>

      </View>

    </>
  )
}

export default Server;

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  btnwrapper: {
    display: 'flex',
    justifyContent: 'space-between'
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