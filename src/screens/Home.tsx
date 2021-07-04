import React, { useState, useCallback } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    ScrollView
} from 'react-native';

import { FriendList } from '../components/FriendList';

export function Home() {
    const [name, setName] = useState('');
    const [friends, setFriends] = useState([]);

    async function handleSearch() {
        const response = await fetch(`http://192.168.0.108:3333/friends?q=${name}`);
        const data = await response.json();

        setFriends(data);
    }

    const handleFollow = useCallback(() => {
        console.log("follow user");
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Amigos</Text>

            <TextInput
                placeholder="Nome do amigo"
                onChangeText={setName}
                style={styles.input}
            />

            <Button
                title="Buscar"
                onPress={handleSearch}
            />

            <FriendList
                data={friends}
                follow={handleFollow}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        padding: 25
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    input: {
        borderWidth: 1,
        padding: 7,
        marginVertical: 10
    },
    list: {
        marginTop: 20
    }
})