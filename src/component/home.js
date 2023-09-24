import React from 'react';
import {FlatList, TouchableOpacity, StyleSheet, View, Image, Text, TextInput } from 'react-native';


const DATA = [
    {
        id: "1",
        title: "Tiên đề bài viết 1",
        img: "require('../img/cake.jpg')",
        description: "",
    },
    {
        id: "2",
        title: "Tiên đề bài viết 2",
        img: "require('../img/cake.jpg')",
        description: "",
    },{
        id: "3",
        title: "Tiên đề bài viết 3",
        img: "require('../img/cake.jpg')",
        description: "",
    },{
        id: "4",
        title: "Tiên đề bài viết 4",
        img: "require('../img/cake.jpg')",
        description: "",
    },{
        id: "5",
        title: "Tiên đề bài viết 5",
        img: "require('../img/cake.jpg')",
        description: "",
    },
];

const Item = ({ item, navigation }) => (
    <View style={styles.textContainer}>
        <Image
            style={styles.tinyLogo}
            source={item.img}
        />
        <View style={styles.status}>
            <TouchableOpacity
                style={styles.linkButton}
                onPress={() => navigation.navigate('Description')}>
                <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
            </TouchableOpacity>
            <Text>{item.description}</Text>
        </View>
    </View>
);

const Home = ({ navigation }) => {
    const [keyword, setKeyword] = React.useState('');
    const renderItem = ({ item }) => {
        return (
            <Item 
            item={item}
            navigation={ navigation } />
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.tieude}>
                <Text style={
                    {
                        fontSize: 15,
                        fontWeight: 'bold',
                        width: 270
                    }
                }>Danh sách bài viết</Text>
                <TouchableOpacity
                    key='Add'
                    style={styles.addButton}
                    onPress={() => navigation.navigate('Add')}>
                    <Text style={{ fontSize: 20, fontWeight:'bold', textAlign: 'center' }}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.find}>
                <TextInput
                    style={styles.inputText}
                    onChangeText={(text) => { setKeyword(text) }}
                    value={keyword}
                    placeholder="Tìm kiếm"
                />
                <TouchableOpacity
                    key='Tìm kiếm'
                    style={styles.findButton}
                    onPress={() => {
                    }
                    }>
                    <Text style={{ fontSize: 10 }}>
                        Tìm kiếm
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />

            <View style={styles.page}>
                <Text></Text>
                <TouchableOpacity style={styles.pageNumber}>
                    <Text>1</Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.pageNumber}>
                    <Text>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.pageNumber}>
                    <Text>3</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        // justifyContent: 'center',
        // alignItems: 'center',
        // color: "#560cce",
    },
    tieude: {
        flexDirection: 'row',
        marginBottom: 10
    },
    addButton: {
        paddingHorizontal: 3,
        paddingVertical: 3,
        marginLeft: 55,
        textAlign: 'center',
    },
    find: {
        flexDirection: 'row',
        marginTop: 5,
        marginBottom:5,
    },
    inputText: {
        paddingHorizontal: 3,
        paddingVertical: 3,
        borderWidth: 1,
        borderColor: '#c0c0c0',
        width:'85%',
        height: 30,
    },
    findButton: {
        borderWidth: 1,
        borderColor: '#c0c0c0',
        paddingHorizontal: 3,
        paddingVertical: 4,
        marginLeft: 10,
        textAlign: 'center',
        height: 30,

    },
    textContainer: {
        flexDirection: 'row',
        marginTop: 30,
    },
    tinyLogo: {
        width: 100,
        height: 100,
    },
    status: {
        marginLeft: 20,
        width: '65%',
    },
    linkButton: {
        paddingHorizontal: 3,
        paddingVertical: 3,
    },
    page: {
        marginTop: 30,
        flexDirection: 'row',
        marginLeft: 120,
    },

    pageNumber: {
        borderWidth: 1,
        borderColor: '#c0c0c0',
        marginLeft: 5,
        paddingHorizontal: 10,
    },

});

export default Home;
