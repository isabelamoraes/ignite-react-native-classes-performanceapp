import React, { useMemo } from 'react';
import { View, Text, FlatList } from 'react-native';

import { Friend } from './Friend';

interface Props {
    data: {
        id: number;
        name: string;
        likes: number;
    }[];
    follow: () => void;
}

export function FriendList({ data, follow }: Props) {
    const totalLikes = useMemo(() => {
        data.reduce((likes, friend) => {
            return likes + friend.likes
        }, 0);
    }, [data]);

    return (
        <View>
            <Text>Total de likes: {totalLikes}</Text>

            <FlatList
                data={data}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <Friend
                        data={item}
                        follow={follow}
                    />
                )}
            />             
        </View>
    );
}