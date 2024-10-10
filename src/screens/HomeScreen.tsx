import { Text, SafeAreaView, StyleSheet, FlatList, View, TouchableOpacity, ActivityIndicator } from "react-native"
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/Hooks';
import { getAllUser } from "../redux/actions/UserAction";
import { routes } from "../service/routes";
import { userAction } from "../redux/reducers/UserReducer";
import { UserType } from "../redux/types";
import { RootStackParamList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type PostScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;

type Props = {
    navigation: PostScreenNavigationProp;
};
export const HomeScreen = ({ navigation }: Props) => {
    const dispatch = useAppDispatch()
    const { allUsers, allUsersLoading, error } = useAppSelector((state) => state.user)
    const [visibleUser, setVisibleUser] = useState<UserType[] | null>(null)

    useEffect(() => {
        if (allUsers) {
            setVisibleUser([...allUsers].splice(0, 5))
        }
    }, [allUsers])

    useEffect(() => {
        if (error?.length > 0) {
            dispatch(userAction.setError(''))
        }
        dispatch(getAllUser())
    }, [])

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const loadMorePosts = () => {
        if (!visibleUser) return;
        const currentLength = visibleUser.length;
        const nextPosts = allUsers.slice(currentLength, currentLength + 5);
        if (nextPosts.length > 0) {
            setVisibleUser([...visibleUser, ...nextPosts]);
        }
    };

    const renderItem = ({ item }: { item: UserType }) => {
        const randomBgColor = getRandomColor();
        return (
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate(routes.POST_SCREEN, { user: item, color: randomBgColor })}>
                <View style={[styles.userImg, { backgroundColor: randomBgColor }]}><Text style={styles.imgTxt}>{item.name.charAt(0).toUpperCase()}</Text>
                </View>
                <View style={styles.userContent}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.details}>{item.website}</Text>
                    <Text style={styles.details}>{item.email}</Text>
                    <Text style={styles.details}>{item.phone}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={styles.homeCont} >
            <Text style={styles.header}>DashBoard</Text>
            {allUsersLoading ? (
                <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
            ) :
                (error?.length > 0 ? <Text style={styles.errorText}>{error}</Text> : <FlatList
                    data={visibleUser}
                    renderItem={renderItem}
                    keyExtractor={item => `user${item.id}`}
                    onEndReached={loadMorePosts}
                    onEndReachedThreshold={0.5}
                    onMomentumScrollBegin={() => {
                        loadMorePosts();
                    }}
                />)
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    homeCont: {
        flex: 1,
        backgroundColor: '#eff3fa'
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        padding: 20,
        backgroundColor: '#fff',
    },
    item: {
        backgroundColor: '#fff',
        padding: 25,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'row',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    userImg: {
        height: 80,
        width: 80,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgTxt: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000'
    },
    userContent: {
        flex: 1,
        paddingLeft: 10
    },
    details: {
        fontSize: 14,
        color: '#000'
    },
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 14,
        color: '#000',
    }
})