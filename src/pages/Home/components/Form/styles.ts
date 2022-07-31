import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E1E1E6',
  },
  input: {
    flex: 1,
    marginRight: 8,
    height: 48,
    backgroundColor: '#202024',
    borderRadius: 4,
    paddingHorizontal: 16,
    color: '#E1E1E6',
  },
  rectButton: {
    backgroundColor: 'dodgerblue',
    height: 48,
    width: 48,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
