const helpers = {
  theme: {
    getThemeMode: () => {
      return localStorage.getItem('theme') ?? 'dark';
    },
    setThemeMode: (mode: string) => {
      localStorage.setItem('theme', mode);
    },
  },
};

export default helpers;
