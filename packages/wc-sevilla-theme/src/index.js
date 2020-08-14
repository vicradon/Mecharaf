import Root from "./Root";
import Comments from "./Comments";

export default {
  name: "wc-sevilla-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      isMenuOpen: false,
      mode: "light",
    },
  },
  actions: {
    theme: {
      openMenu: ({ state }) => {
        state.theme.isMenuOpen = true;
      },
      closeMenu: ({ state }) => {
        state.theme.isMenuOpen = false;
      },
      setLightMode: ({ state }) => {
        state.theme.mode = "light";
      },
      setDarkMode: ({ state }) => {
        state.theme.mode = "dark";
      },
    },
  },
  libraries: {
    comments: {
      Comments,
    },
  },
};
