import { Text, View } from 'react-native'

import { dateFormat } from '../../../../utils/dateFormat'
import { styles } from './styles'

export function Header() {
  return (
    <View>
      <Text style={styles.title}>Nome do evento</Text>
      <Text style={styles.description}>{dateFormat(new Date())}</Text>
    </View>
  )
}
