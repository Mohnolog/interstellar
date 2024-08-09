import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  SafeAreaView,
  Platform,
  Image,
} from "react-native";
import Constants from "expo-constants";
import logo from "./assets/logo.png";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function App() {
  console.log(Platform.OS);
  console.log(Constants.statusBarHeight);
  return (
    <SafeAreaView>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo} />
      </View>
      <StatusBar backgroundColor="black" style="light" />
      <ScrollView
        contentContainerStyle={[
          styles.contentContainer,
          // {
          //   marginTop:
          //     Platform.OS === "android" ? Constants.statusBarHeight : 0,
          // },
        ]}
      >
        <View style={styles.container}>
          <Text style={{ color: "white", fontSize: 27 }}>Inerstellar</Text>
          <View style={{ gap: 20 }}>
            <Text style={{ color: "rgb(190, 190, 190)", fontSize: 15 }}>
              {"2014 PG-13  2h49min  Adventure,Drama,Sci-Fi"}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("./assets/film.jpg")}
                style={{ height: 184, width: 125 }}
              />
              <View style={{ paddingLeft: 20, paddingBottom: 30 }}>
                <View style={{ flexGrow: 1, flexDirection: "row" }}>
                  <Text
                    style={{ color: "white", fontSize: 15, flex: 1 }}
                    // numberOfLines={5}
                  >
                    A team of explorers travel through a wormhole in space in an
                    attempt to ensure humanity's survival.
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: "blue",
                    justifyContent: "center",
                    flexGrow: 1,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 15,
                    }}
                  >
                    + ADD TO WATCHLIST
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <AntDesign name="staro" size={24} color="white" />
              <AntDesign name="staro" size={24} color="white" />
              <AntDesign name="staro" size={24} color="white" />
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "white", fontSize: 27 }}>
              Top Billed Cast
            </Text>
            <TouchableOpacity
              style={{
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "lightblue",
                  fontSize: 20,
                }}
              >
                SEE ALL
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} contentContainerStyle={{ gap: 10 }}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.jessica}
                source={require("./assets/jessica.jpg")}
              />
              <Text style={{ color: "white", fontSize: 17 }}>
                Jessica Chastain
              </Text>
              <Text style={{ color: "rgb(190, 190, 190)", fontSize: 17 }}>
                Cooper
              </Text>
            </View>
            <View style={styles.imageContainer}>
              <Image
                style={styles.jessica}
                source={require("./assets/matthew.jpg")}
              />
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ color: "white", fontSize: 17 }}
              >
                Matthew McConaughey
              </Text>
              <Text style={{ color: "rgb(190, 190, 190)", fontSize: 17 }}>
                Cooper
              </Text>
            </View>
            <View style={styles.imageContainer}>
              <Image
                style={styles.jessica}
                source={require("./assets/mackenzie.jpg")}
              />
              <Text style={{ color: "white", fontSize: 17 }}>
                Mackenzie Foy
              </Text>
              <Text style={{ color: "rgb(190, 190, 190)", fontSize: 17 }}>
                Cooper
              </Text>
            </View>
            <View style={styles.imageContainer}>
              <Image
                style={styles.jessica}
                source={require("./assets/anne.jpg")}
              />
              <Text style={{ color: "white", fontSize: 17 }}>
                Anne Hathaway
              </Text>
              <Text style={{ color: "rgb(190, 190, 190)", fontSize: 17 }}>
                Brand
              </Text>
            </View>
          </ScrollView>
          <View>
            <Text style={{ color: "white", fontSize: 17 }}>Director</Text>
            <Text style={{ color: "rgb(190, 190, 190)", fontSize: 17 }}>
              Christopher Nolan
            </Text>
          </View>
          <View>
            <Text style={{ color: "white", fontSize: 17 }}>Writers</Text>
            <Text
              style={{
                color: "rgb(190, 190, 190)",
                fontSize: 17,
                marginBottom: 150,
              }}
            >
              Jonathan Nolan (written by) and Christopher Nolan (written by)
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "rgb(0,0,0)",
    // height: "100%",
    gap: 10,
  },
  container: {
    backgroundColor: "rgb(40,40,40)",
    paddingLeft: 20,
    gap: 20,
  },
  logo: {
    width: "30%",
    height: "50%",
    resizeMode: "contain",
  },
  jessica: {
    width: "100%",
    height: 255,
  },
  logoContainer: {
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    width: "100%",
    height: 80,
    backgroundColor: "rgb(88,88,88)",
    justifyContent: "center",
  },
  imageContainer: {
    // alignItems: "center",
    width: 165,
    backgroundColor: "#333333",
  },
});
