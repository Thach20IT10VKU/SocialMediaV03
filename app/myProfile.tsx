import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAppSelector } from "../src/store";
import { router } from "expo-router";
import { Header } from "../src/components/Header";
import { UserInfo } from "../src/components/user/UserInfo";
import { useState } from "react";
import { BORDER_LIGHT_GREY } from "../src/utils/color";
import { Posts } from "../src/components/user/Posts";
import { Friends } from "../src/components/user/Friends";
import { SafeAreaView } from "react-native-safe-area-context";

type TABS  = 'Posts' | 'Friends';

const MyProfile = () => {
    const user = useAppSelector(state => state.user);
    const [activeTab, serActiveTab] = useState<TABS>('Posts');
    
    const goBack = () => {
        router.back();
    };

    const onTabPress = (tab: TABS) => serActiveTab(tab);

    return (
        <SafeAreaView style={styles.safeAreaView} edges={['top']}>
            <Header leftButton={{onPress: goBack}} showLogo/>
            <View style={styles.main}>
                {/* User info */}
                <UserInfo user={user}/>

                {/* Tabs */}
                <Tabs onTabPress={onTabPress} />
                <Posts isActive={activeTab === 'Posts'}/>
                <Friends isActive={activeTab === 'Friends'}/>
            </View>
        </SafeAreaView>
    );
};

export default MyProfile ;

type TabsProp = {
    onTabPress: (tab: TABS) => void;
};

const Tabs = (props: TabsProp) => {
    const {onTabPress} = props;
    const [activeTab, setActiveTab] = useState<TABS>('Posts');

    const onPostsPress = () => {
        setActiveTab('Posts');
        onTabPress('Posts');
    };

    const onFriendsPress = () => {
        setActiveTab('Friends');
        onTabPress('Friends');
    }

    return (
        <View style={styles.tabContainer}>
            <TouchableOpacity style={[styles.tabColumn, activeTab === "Posts" ? styles.selectedTabColumn : {}]} onPress={onPostsPress}>
                <Text>Bài đăng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tabColumn, activeTab === "Friends" ? styles.selectedTabColumn: {}]} onPress={onFriendsPress}>
                <Text>Mọi người</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },

    main: {
        paddingTop: 5,
    },

    userInfo: {},

    tabContainer: {
        flexDirection: 'row',
        // borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderColor: BORDER_LIGHT_GREY,
    },

    tabColumn: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
    },

    selectedTabColumn: {
        borderBottomWidth: 1,
        borderColor: 'blue',
    },
});