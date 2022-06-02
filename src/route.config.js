import Home from "@pages/Home";
import routeConstants from "@utils/routeConstants";
import Landing from "@pages/Landing";
import Chat from "@pages/Chat";

export const routeConfig = {
    home: {
        component: Home,
        ...routeConstants.home
    },
    landing: {
        component: Landing,
        ...routeConstants.landing
    },
    chat: {
        component: Chat,
        ...routeConstants.chat
    },
    
}