import { useState } from 'react'
import { Alert, FlatList, View } from 'react-native'

import { EmptyCard } from './components/EmptyCard'
import { Form } from './components/Form'
import { Header } from './components/Header'
import { ParticipantCard } from './components/ParticipantCard'
import { styles } from './styles'

export function Home() {
  const [participants, setParticipants] = useState<string[]>(['julius'])

  const onAddParticipant = (name: string) => {
    console.log('onAddParticipant', name)
    if (participants.includes(name)) {
      Alert.alert('Erro', 'Participante já está na lista')
      return
    }
    setParticipants((prev) => [name, ...prev].sort((a, b) => a.localeCompare(b)))
  }

  const onRemoveParticipant = (name: string) => {
    console.log('onRemoveParticipant', name)
    Alert.alert('Confirmação', 'Deseja remover o participante da lista?', [
      {
        text: 'Sim',
        onPress: () => setParticipants((prev) => prev.filter((p) => p !== name)),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Header />
      <Form onAdd={onAddParticipant} />
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <ParticipantCard name={item} onRemove={onRemoveParticipant} />
        )}
        ListEmptyComponent={() => <EmptyCard />}
      />
    </View>
  )
}
