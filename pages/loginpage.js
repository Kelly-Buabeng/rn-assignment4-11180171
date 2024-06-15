import { StyleSheet, View, TouchableHighlight, TextInput, Text, Image, SafeAreaView } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function LoginPage() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    if (username === "admin" && password === "admin") {
      navigation.navigate("Home");
    } else {
      setError("Invalid username or password");
    }
    setLoading(false);
  };

  function handleSubmit() {
    navigation.navigate("Home", { username: username, password: password });
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 24, marginBottom: 10, fontWeight: 700, color: '#0077dd' }}>Jobizz</Text>
        <Text style={{ fontSize: 28, marginBottom: 10, fontWeight: 750 }}>Welcome Back 👋</Text>
        <Text style={{ color: 'grey' }}>Let's log in. Apply to jobs</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableHighlight
          style={styles.button}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
        <Text style={styles.error}>{error}</Text>
      </View>
      <View>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 40, gap: 10 }}>
          <View style={{ width: 'auto', flex: 1, height: 1, backgroundColor: 'grey' }} />
          <View>
            <Text style={{ color: 'grey' }}>
              Or continue with
            </Text>
          </View>
          <View style={{ width: 'auto', flex: 1, height: 1, backgroundColor: 'grey' }} />
        </View>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', gap: 40, alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
        <Image style={{ height: 25, width: 25 }} source={require('../assets/apple.png')} />
        <Image style={{ height: 25, width: 25 }} source={require('../assets/google.png')} />
        <Image style={{ height: 25, width: 25 }} source={require('../assets/facebook.png')} />
      </View>
      <View style={{ textAlign: 'center'}}>
        <Text style={{ color: 'grey' , textAlign:'center'}}>Haven't got an account ?<Text style={{ color: '#0077dd', fontWeight: '700' }}>Register</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: 'black',
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    margin: 25,
    marginTop: 10,
    height: "100%",
    gap: 50,
    fontFamily: 'Arial',
  },
  input: {
    padding: 10,
    borderColor: 'grey',
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1
  },
  button: {
    width: '100%',
    backgroundColor: '#0077dd',
    fontSize: 15,
    padding: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 2,
  },
  buttonText: {
    color: "white",
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});