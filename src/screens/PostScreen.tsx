import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useAppSelector, useAppDispatch } from '../redux/Hooks';
import { getUserPost } from '../redux/actions/PostAction';
import { postAction } from '../redux/reducers/PostReducer';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PostType } from '../redux/types';
import { RootStackParamList } from '../../App';



type PostScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'PostScreen'>;
type PostScreenRouteProp = RouteProp<RootStackParamList, 'PostScreen'>;

type Props = {
    route: PostScreenRouteProp;
    navigation: PostScreenNavigationProp;
};

export const PostScreen = ({ route, navigation }: Props) => {
    const { user, color } = route.params;
    const dispatch = useAppDispatch()
    const { userPost, userPostLoading, error } = useAppSelector((state) => state.post)
    const [visiblePost, setVisiblePost] = useState<PostType[] | null>(null)

    useEffect(() => {
        if (userPost) {
            setVisiblePost([...userPost].splice(0, 5))
        }
    }, [userPost])

    useEffect(() => {
        const userId = user?.id
        if (error?.length > 0) {
            dispatch(postAction.setError(''))
        }
        if (user) {
            dispatch(getUserPost({ userId }))
        }
    }, [user]);

    const loadMorePosts = () => {
        if (!visiblePost) return null;
        const currentLength = visiblePost.length;
        const nextPosts = userPost.slice(currentLength, currentLength + 5);
        if (nextPosts.length > 0) {
            setVisiblePost([...visiblePost, ...nextPosts]);
        }
    };


    const renderItem = ({ item }: { item: PostType }) => {
        return (
            <View style={styles.item} >
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.underline}></View>
                <Text style={styles.desc}>{item.body}</Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.postCont} >
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.header}>Back</Text>
            </TouchableOpacity>
            <View style={styles.userPostDetails}>
                <View style={[styles.userImg, { backgroundColor: color }]}><Text style={styles.imgTxt}>{user.name.charAt(0).toUpperCase()}</Text></View>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.details}>{user.email}</Text>
                <Text style={styles.details}>{user.phone}</Text>
                <Text style={styles.details}>{user.website}</Text>
            </View>
            {userPostLoading ? (
                <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
            ) : (error?.length > 0 ? <Text style={styles.errorText}>{error}</Text> :
                <FlatList
                        data={visiblePost}
                        renderItem={renderItem}
                        keyExtractor={item => `user${item.id}`}
                        onEndReached={loadMorePosts}
                        onEndReachedThreshold={0.5}
                        onMomentumScrollBegin={() => {
                            loadMorePosts();
                        }}
                />)}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    postCont: {
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
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        display: 'flex',

    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    },
    desc: {
        fontSize: 12,
        color: '#000'
    },
    underline: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 5,
    },
    userPostDetails: {
        backgroundColor: '#fff',
        marginTop: 5,
        padding: 10,
        marginHorizontal: 10,
        borderRadius: 10,
        alignItems: 'center'
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
    details: {
        fontSize: 14,
        color: '#000'
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
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
});
