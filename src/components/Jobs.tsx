import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'

const Jobs = () => {
    const [more, setMore] = useState(false)
  return (
    <View style={styles.job}>
                            <View style={styles.titleAndLike}>
                                <Text style={styles.title}>
                                    Fast wordpress site for website
                                </Text>
                                <Text style={styles.DisLike}>logo</Text>
                                <Text style={styles.reactLove}>logo</Text>
                            </View>
                            <Text style={styles.priceType}>Fixed- price</Text>
                            <View style={styles.part2}>
                                <View style={styles.pricePart}>
                                    <Text style={styles.priceAndExperince}>
                                        $100
                                    </Text>
                                    <Text style={styles.damitext}>budget</Text>
                                </View>
                                <View style={styles.experienceLevel}>
                                    <Text style={styles.priceAndExperince}>
                                        InterMediate
                                    </Text>
                                    <Text style={styles.damitext}>
                                        Experience Level
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.desCription}>
                                <Text style={styles.desCriptionText}>
                                    we have a product description in plain html
                                    files that is not responsive and need to
                                    have that responsive...{
                                        more ? <Text>
                                        we have a product description in plain html
                                        files that is not responsive and need to
                                        have that responsive...
                                    </Text> : null
                                    }
                                </Text>
                                <Text style={styles.more} onPress={()=> setMore(!more)}>{more ? 'less' : 'more'}</Text>
                            </View>
                            <View style={styles.tags}>
                                <Text
                                    style={styles.tagButton}
                                    onPress={() => console.log("button press")}
                                >
                                    wordpress
                                </Text>
                                <Text
                                    style={styles.tagButton}
                                    onPress={() => console.log("button press")}
                                >
                                    wordpress
                                </Text>
                                <Text
                                    style={styles.tagButton}
                                    onPress={() => console.log("button press")}
                                >
                                    wordpress
                                </Text>
                            </View>
                            <View>
                                <Text>
                                    <FontAwesome name="star" />
                                    Payment Verified $1k spent
                                </Text>
                            </View>
                        </View>
  )
}

export default Jobs

const styles = StyleSheet.create({
    job: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5.65,
        elevation: 5,
    },
    titleAndLike: {
        flexDirection: "row",
    },
    title: {
        fontSize: 18,
        flex: 8,
    },

    DisLike: {
        flex: 1,
    },
    reactLove: {
        flex: 1,
    },
    priceType: {
        marginVertical: 5,
        fontSize: 14,
    },
    part2: {
        marginBottom: 10,
        flexDirection: "row",
    },
    pricePart: {
        flex: 1,
    },
    experienceLevel: {
        flex: 1,
    },
    priceAndExperince: {
        fontWeight: "600",
    },
    damitext: {},
    desCription: {
        marginBottom: 20,
    },
    desCriptionText: {
        fontSize: 16,
        color: "#000",
    },
    more: {
        color: "#1d7444ec",
    },
    tags: {
        flexDirection: "row",
        marginBottom: 25,
    },
    tagButton: {
        backgroundColor: "#f8f2f2",
        borderRadius: 50,
        marginRight: 10,
        padding: 4,
        paddingHorizontal: 15,
    },
})