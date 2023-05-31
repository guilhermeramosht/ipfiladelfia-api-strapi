import Logo from "./extensions/assets/logo.png";

export default {
  config: {
    locales: ["pt-BR"],
    menu: {
      logo: Logo,
    },
    head: {
      favicon: Logo,
    },
    auth: {
      logo: Logo,
    },
    tutorials: false,
    notifications: { releases: false },
  },
  bootstrap() {},
};
