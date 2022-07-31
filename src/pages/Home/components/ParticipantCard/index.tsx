import { Text, View } from 'react-native'

import { UserMinus } from 'phosphor-react-native'
import { RectButton } from 'react-native-gesture-handler'

import { styles } from './styles'
import { ParticipantCardProps } from './types'

export function ParticipantCard(props: ParticipantCardProps) {
  const { name, onRemove } = props
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <RectButton style={styles.rectButton} onPress={() => onRemove(name)}>
        <UserMinus color="#fff" weight="bold" size={28} />
      </RectButton>
    </View>
  )
}
