import react from 'react'
import { View, Text } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const user = {
  name: 'Jonh Brew',
  completedTodos: 156,
  age: 21,
  city: 'New York',
  country: 'US',
}
const UserPorfile = () => {
  return (
    <View
      style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}
    >
      <View
        style={{
          backgroundColor: 'rgba(224, 125, 249, 0.5)',
          padding: 22,
          borderRadius: 66,
          marginBottom: 18,
        }}
      >
        <FontAwesomeIcon
          icon={faUser}
          size={72}
          style={{ color: 'rgba(164, 32, 197, 1)' }}
        />
      </View>
      <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 10 }}>
        {user.name}
      </Text>
      <Text style={{ fontSize: 20, fontWeight: '500', marginBottom: 8 }}>
        {user.age}
      </Text>
      <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 10 }}>
        Todos:
        <Text style={{ color: 'gray' }}> {user.completedTodos}</Text>
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '500',
          color: 'gray',
          marginBottom: 10,
        }}
      >
        {user.city}, {user.country}
      </Text>
    </View>
  )
}

export default UserPorfile
