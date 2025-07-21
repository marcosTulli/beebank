import { Themes } from '@/models/enums';
import { create } from 'zustand';
interface ThemeState {
    selectedTheme: Themes;
    toggleTheme: () => void;
}

interface ITheme {
    selectedTheme: Themes;
}
const initialState: ITheme = {
    selectedTheme: Themes.dark,
};

const themeStore = create<ThemeState>((set) => ({
    ...initialState,
    toggleTheme: () => set((state) => {
        const newTheme = state.selectedTheme === Themes.light ? Themes.dark : Themes.light;
        return { selectedTheme: newTheme };
    }),
}));

export default themeStore;
