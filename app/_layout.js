import { Slot, } from "expo-router";
import { Provider } from "react-redux";
import store from "../src/store";
import { CreatePostModal } from "../src/components/createPostModal";

export default Layout = () => {
    return (
        <Provider store={store}>
            <Slot />
            <CreatePostModal />
        </Provider>
    );
};