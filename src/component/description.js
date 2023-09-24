import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import moment from 'moment';

const item = {
    title: 'Tiêu đề bài viết',
    description: `In order to constrain memory and enable smooth scrolling, content is rendered asynchronously offscreen. This means its possible to scroll faster than the fill rate and momentarily see blank content. This is a tradeoff that can be adjusted to suit the needs of each application, and we are working on improving it behind the scenes.`,
};
const Description = () => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.date}> {moment().format('MMMM Do YYYY, h:mm:ss a')}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,

    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center'
    },
    date: {
        fontSize: 8,
        textAlign: 'right',
    },
    description: {
        fontSize: 12,
        marginTop: 10,
        marginBottom: 10,
    }
})
export default Description;
