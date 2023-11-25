import React, { useState } from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';


function SinglePro({ navigation, route } :any ) {
    let obj = route.params;
    const [list, setList] = useState([]);

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: obj.image }} />
            <Text style={styles.title}>{obj.title}</Text>
            <Text style={styles.price}>${obj.price}</Text>
            <Text style={styles.description}>{obj.description}</Text>
            <Text style={styles.category}>{obj.category}</Text>
        </View>
    );
}

// in computer Screen ////////////////// 

// const styles = StyleSheet.create({
//     container: {
//         padding: 20,
//         width: 500,
//         display: 'flex',
//         borderColor: 'black',
//         borderRadius: 10,
//         borderWidth: 2,
//         marginBottom: 20,
//     },
//     heading: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     productContainer: {
//         margin: 10,
//         borderColor: 'black',
//         border: 2,
//         borderRadius: 10,
//         borderWidth: 2,
//         padding: 15,
//         marginBottom: 20,
//     },
//     image: {
//         height: 200,
//         width: 200,
//         borderRadius: 10,
//         marginBottom: 10,
//     },
//     title: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 5,
//     },
//     price: {
//         color: 'green',
//         fontWeight: 'bold',
//         marginBottom: 5,
//     },
//     description: {
//         marginBottom: 10,
//     },
//     category: {
//         fontStyle: 'italic',
//     },
// });

// in mobile Screen //////////////////

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: "center"
    },
    productContainer: {
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        color: 'green',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        marginBottom: 10,
    },
    category: {
        fontStyle: 'italic',
    },
});

export default SinglePro;