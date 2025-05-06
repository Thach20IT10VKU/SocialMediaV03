import { SafeAreaView, StyleSheet, View } from "react-native";
import { useAppSelector } from "../src/store";
import { router } from "expo-router";
import { Header } from "../src/components/Header";
import { UserInfo } from "../src/components/user/UserInfo";
import { Posts } from "../src/components/user/Posts";

const UserDetailPage = () => {
    const currentUser = useAppSelector(state => state.currentUser);
    
    const goBack = () => {
        router.back();
    };

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <Header leftButton={{onPress: goBack}} showLogo/>
            <View style={styles.main}>
                {/* User info */}
                <UserInfo user={currentUser}/>

                {/* Tabs */}
                <Posts isActive/>
            </View>
        </SafeAreaView>
    );
};

export default UserDetailPage;

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },

    main: {
        paddingTop: 5,
    },
});