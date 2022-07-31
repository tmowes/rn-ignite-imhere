import { Text, View } from 'react-native'

import { styles } from './styles'

export function EmptyCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Ninguém está inscrito no evento. Adicione participantes a sua lista de presença.
      </Text>
    </View>
  )
}
