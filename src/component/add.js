import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image, Text, TextInput } from 'react-native';

const Add = () => {
    const [header, setHeader] = React.useState('');
    const [url, setUrl] = React.useState('');
    const [ndUrl, setNdUrl] = React.useState('');
    const [status, setStatus] = React.useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Thêm bài viết</Text>
            <View style={{}}>
                <Text style={styles.noidung}>Tiêu đề bài viết</Text>
                <TextInput
                    style={styles.inputText}
                    onChangeText={(text) => { setHeader(text) }}
                    value={header}
                    placeholder="Nhập tiêu đề"
                />
                <Text style={styles.noidung} >Đường liên kết</Text>
                <TextInput
                    style={styles.inputText}
                    onChangeText={(text) => { setUrl(text) }}
                    value={url}
                    placeholder="Nhập url"
                />
                <Text style={styles.noidung}>Nội dung liên kết</Text>
                <TextInput
                    style={styles.inputText}
                    onChangeText={(text) => { setNdUrl(text) }}
                    value={ndUrl}
                    placeholder=""
                />

                <Text style={styles.noidung}>Nội dung bài viết</Text>
                <TextInput
                    style={[styles.inputText,{height: 100}]}
                    onChangeText={(text) => { setStatus(text) }}
                    value={status}
                    placeholder=""
                />

                <View style={styles.footer}>
                    <TouchableOpacity
                        key='Save'
                        style={styles.delButton}>
        
                        <Text style={{ fontSize: 15}}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        key='Save'
                        style={styles.saveButton}>
                        <Text style={{ fontSize: 15}}>Lưu</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        top: 20,
        alignItems: 'center', 
    },
    header:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 25,
        textAlign: 'center'
    },
    noidung: {
        fontSize: 15,
        marginBottom: 5,

    },
    inputText: {
        width: 350,
        borderWidth: 1,
        paddingHorizontal: 5,
        marginBottom: 10,
    },
    footer: {
        marginTop: 30,
        flexDirection: 'row'
    },
    delButton:{
        borderWidth: 1,
        paddingHorizontal: 3,
        paddingVertical: 4,
    },
    saveButton:{
        borderWidth: 1,
        paddingHorizontal: 3,
        paddingVertical: 4,
        marginLeft:275,
    }
})
export default Add;
