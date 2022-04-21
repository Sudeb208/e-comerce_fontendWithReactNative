import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    Button,
} from "react-native";
import React from "react";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import Search from "../../components/Search";
import Buttons from "../../components/Buttons";
import Jobs from "../../components/Jobs";

const postDetails = [
    {
        title: "Fast WordPress Elementor Content & Responsiveness website",
        Budget: 100,
        experienceLevel: "intermediate",
        description:
            "we have a product description in plain html files that is not responsive and need to have that responsive",
        tags: ["wordPress", "Elementor", "Css"],
        paymentverified: true,
    },
];

const UpworkClone = () => {
    return (
        <View style={styles.root}>
            {/* part 1 0 */}
            <View style={styles.header}>
                <Image
                    style={styles.Image}
                    source={{
                        uri: "https://bestprofilepictures.com/wp-content/uploads/2021/04/Cool-Profile-Picture.jpg",
                    }}
                />
                <Text style={styles.headerText}>Jobs</Text>
                <TouchableOpacity style={styles.dot}>
                    <Text style={styles.dotes}></Text>
                    <Text style={styles.dotes}></Text>
                    <Text style={styles.dotes}></Text>
                </TouchableOpacity>
            </View>
            {/* part 2  */}
            <View style={styles.bodyPart}>
                <ScrollView>
                    {/* search part  */}
                    <Search />
                    {/* button  */}
                    <View style={styles.buttons}>
                        <TouchableOpacity>
                            <Text style={styles.buttonsMatch}>
                                Best Matches
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.buttonsMatch}>Most Recent</Text>
                        </TouchableOpacity>
                    </View>
                    {/* paragraph part  */}
                    <Text style={styles.texts}>
                        Browse jobs that match your experience to a client's
                        hiring preferences. Ordered by most relevent.
                    </Text>
                    <View style={styles.jobs}>
                        <Jobs />
                        <Jobs />
                        <Jobs />
                        <Jobs />
                    </View>
                </ScrollView>
            </View>
            {/* bottom part start*/}
            <View style={styles.bottomPart}>
                <View style={styles.indivisualBottom}>
                    <FontAwesome
                        name="search"
                        style={styles.BottomIcons}
                        size={18}
                        color={"#626166"}
                    />
                    <Text>jobs</Text>
                </View>
                <View style={styles.indivisualBottom}>
                    <FontAwesome5
                        name="file-signature"
                        style={styles.BottomIcons}
                        size={18}
                        color={"#626166"}
                    />
                    <Text>proposal</Text>
                </View>
                <View style={styles.indivisualBottom}>
                    <FontAwesome5
                        name="file"
                        style={styles.BottomIcons}
                        size={18}
                        color={"#626166"}
                    />
                    <Text>Contracts</Text>
                </View>
                <View style={styles.indivisualBottom}>
                    <FontAwesome
                        name="envelope"
                        style={styles.BottomIcons}
                        size={18}
                        color={"#626166"}
                    />
                    <Text>Message</Text>
                </View>
                <View style={styles.indivisualBottom}>
                    <FontAwesome5
                        name="bell"
                        style={styles.BottomIcons}
                        size={18}
                        color={"#626166"}
                    />
                    <Text>Alerts</Text>
                </View>
            </View>
            {/* bottom part end  */}
        </View>
    );
};

export default UpworkClone;

const styles = StyleSheet.create({
    root: {
        height: "100%",
    },
    // headder style
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10,
        borderColor: "#fff",
        borderWidth: 1,
        flex: 1.5,
    },
    Image: {
        width: 30,
        height: 30,
        borderRadius: 50,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
    },
    dot: {
        flexDirection: "column",
        justifyContent: "space-between",
    },
    dotes: {
        width: 4,
        height: 4,
        backgroundColor: "black",
        borderWidth: 1,
        borderRadius: 50,
        margin: 2,
    },

    // body part </style>
    bodyPart: {
        flex: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    texts: {
        backgroundColor: "#fff",
        fontSize: 16,
        padding: 18,
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5.65,
        elevation: 5,
    },
    buttons: {
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#b4b6c2",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    buttonsMatch: {
        fontWeight: "400",
        marginHorizontal: 30,
        fontSize: 18,
    },
    jobs: {
        flex: 10,
    },
    //bottom part css style
    bottomPart: {
        bottom: 0,
        flex: 1.2,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5.65,
        elevation: 5,
        backgroundColor: '#fff'
    },
    BottomIcons: {},
    indivisualBottom: {
        justifyContent: "center",
        alignItems: "center",
    },
});
