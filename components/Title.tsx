import { View, Text, StyleSheet } from 'react-native'
function Title(props:any) {
  return (
    <View>
     <Text style = {styles.text} >{props.name}</Text>

    </View>
  )
}

export default Title;

const styles = StyleSheet.create ({
  text: {
    backgroundColor:'#E8E8E8',
    border:'1 solid #DBDBDB',
    padding: 3,
    marginBottom: 5,
    color: '#41cdf4',
  }
})