 import { useStore } from "vuex";
 import { computed} from "vue";

const useUI = () => {

    const store = useStore()


    return {


        // Dide Menu Options
        sideMenuOpen: computed( () => store.getters['ui/isSideMenuOpen'] ),
        toggleSideMenu() { store.commit('ui/toggleSideMenu')},

    }

}

export default useUI