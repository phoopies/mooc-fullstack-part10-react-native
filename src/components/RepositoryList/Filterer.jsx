import { Picker } from "@react-native-picker/picker"
import { StyleSheet } from "react-native"
import theme from "../../theme"
import Stack from "../Stack"
import TextInput from "../TextInput"

const styles = StyleSheet.create({
    picker: {
        margin: 10,
        padding: 10,
        backgroundColor: theme.colors.backgroundSecondary,
        color: theme.colors.textSecondary,
        borderRadius: 3,
        borderWidth: 0,
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