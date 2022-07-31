import { TextInput, View } from 'react-native'
import { useState } from 'react'

import { UserPlus } from 'phosphor-react-native'
import { RectButton } from 'react-native-gesture-handler'

import { styles } from './styles'
import { FormProps } from './types'

export function Form(props: FormProps) {
  const { onAdd } = props
  const [value, setValue] = useState('')

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#7C7C8A"
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      <RectButton style={styles.rectButton} onPress={() => onAdd(value)}>
        <UserPlus color="#fff" weight="bold" size={28} />
      </RectButton>
    </View>
  )
}
