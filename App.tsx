import { View } from "react-native";
import { useEffect, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Cart from "./screens/Cart";

//Custom Fonts
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Rotunda-Light": require("./assets/fonts/Rotunda-Light.otf"),
    "Rotunda-Thin": require("./assets/fonts/Rotunda-Thin.otf"),
    "Nexa-Regular": require("./assets/fonts/Nexa-Regular.otf"),
    "Texta-Medium": require("./assets/fonts/Texta-Medium.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView>
      <View onLayout={onLayoutRootView}>
        <Cart />
      </View>
    </SafeAreaView>
  );
}
