import { Stack } from "expo-router";
import "./globals.css"; //i

export default function RootLayout() {
  return <Stack>
    <Stack.Screen
      name = "(tabs)"
      options={{ headerShown: false}}
    />
    <Stack>
      <Stack.Screen 
        name="movie/[id]"
        options = {{ headerShown: false}}
      />
    </Stack>
  </Stack>;
}