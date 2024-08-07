import { Provider } from 'app/provider'
import { Stack } from 'expo-router'
console.log(Provider)
export default function Root() {
  return (
    <Provider>
      <Stack />
    </Provider>
  )
}
