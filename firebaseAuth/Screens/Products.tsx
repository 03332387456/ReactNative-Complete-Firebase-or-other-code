import { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, Image, TouchableOpacity , ScrollView } from 'react-native';
import rncStyles from 'rncstyles';


export default function Products({ navigation } :any ) {
    const [productList, setProductList] = useState<any>([]);

    const getData = () => {
        let api = 'https://fakestoreapi.com/products';
        axios.get(api).then((res : any) => {
            setProductList([...res.data]);
            console.log(res.data);
        }).catch((err : any) => {
            console.log(err);
        });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <ScrollView>
  <View style={styles.container }>
            <Text style={styles.heading}>Products</Text>
            {productList.map((product : any) => (
                <View key={product.id} style={[styles.productContainer, rncStyles.shadow2]}>
                    <TouchableOpacity onPress={() => { navigation.navigate('SingleProduct', product); }}  >
                        <Image style={styles.image} source={{ uri: product.image }} />
                        <Text numberOfLines={1} style={styles.description}>{product.description}</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
        </ScrollView>
    );
}


// In computer  Screen ///////////////

// const styles = StyleSheet.create({
//     container: {
//         padding: 20,
//         width: 500,
//         display: 'flex',
//         borderColor: 'black',
//         borderRadius: 10,
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

//     description: {
//         marginBottom: 10,
//     },

// });


// In mobile Screen ///////////////

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