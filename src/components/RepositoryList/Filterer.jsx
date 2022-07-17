import { Picker } from "@react-native-picker/picker"
import { StyleSheet } from "react-native"
import Stack from "../Stack"
import TextInput from "../TextInput"

const styles = StyleSheet.create({
    picker: {
        margin: 5,
        padding: 5,
    },
    textInput: {
        margin: 10,
    }
})

const OrderPicker = ({ orderBy, setOrderBy, orderByOptions }) => {
    return (<Picker
        style={styles.picker}
        selectedValue={orderBy}
        onValueChange={(itemValue) => setOrderBy(itemValue)}
    >
        {orderByOptions.map(option => <Picker.Item key={option} label={option} value={option} />)}
    </Picker>)
}


const Filterer = ({ searchKeyword, setSearchKeyword, orderBy, setOrderBy, orderByOptions }) => {
    return (
        <Stack>
            <TextInput style={styles.textInput} placeholder="Search" value={searchKeyword} onChangeText={setSearchKeyword} />
            <OrderPicker orderBy={orderBy} setOrderBy={setOrderBy} orderByOptions={orderByOptions}/>
        </Stack>
    )
}

export default Filterer;