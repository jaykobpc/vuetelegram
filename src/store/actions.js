const actions = {
    openSideNavigation({ commit }) {
        const status = true;
        commit("TOGGLE_SIDE_NAVIGATION", status);
    },
    closeSideNavigation({ commit }) {
        const status = false;
        commit("TOGGLE_SIDE_NAVIGATION", status);
    }
}

export default actions;