import { Text } from "react-native"

const CustomErrorBox = ({error}) => {
    return(
        <Text style={{ color: '#ff0000', marginBottom: 30 }} >
            {error}
        </Text>
    )
}

export default CustomErrorBox