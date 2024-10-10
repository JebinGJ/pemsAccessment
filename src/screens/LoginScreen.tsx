import { Text, SafeAreaView, StyleSheet, View, Image, Pressable } from "react-native"
import { routes } from "../service/routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type PostScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'LoginScreen'>;

type Props = {
    navigation: PostScreenNavigationProp;
};
export const LoginScreen = ({ navigation }: Props) => {
    return (
        <SafeAreaView style={styles.loginCont} >
            <Image
                source={{
                    uri: 'https://www.pemsdigital.com/static/media/logo3.4c6e3d923e6dd30dbf6e.png',
                }}
                resizeMode="contain"
                style={styles.img}
            />
            <View style={styles.buttCont}>
                <Pressable style={styles.signInBtn} onPress={() => { navigation.navigate(routes.HOME_SCREEN); }}>
                    <Text style={styles.signInTxt}>Sign In</Text>
                </Pressable >
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    loginCont: {
        flex: 1,
        backgroundColor: '#fff'
    },
    img: {
        flex: .6,
        width: '100%',
        height: '100%',
    },
    buttCont: {
        flex: .4,
        justifyContent: 'center',
        paddingHorizontal: 40
    },
    signInBtn: {
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: '#4285F4',
        borderRadius: 10,
    },
    signInTxt: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
})