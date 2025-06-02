import React, { useState } from 'react';
import { Button, TextInput, Text, Alert, View } from 'react-native';

import { supabase } from '../lib/supabase';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    console.log({ email, password });
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  return (
    <View className="h-full w-full flex items-center justify-center px-8">
      <View className="w-full my-5">
        <Text className="font-bold mb-1">Email</Text>
        <TextInput
          onChangeText={text => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize="none"
          keyboardType="email-address"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
        />
      </View>
      <View className="w-full mb-5">
        <Text className="font-bold mb-1">Password</Text>
        <TextInput
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize="none"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
        />
      </View>
      <View className="my-5">
        <Button title="Sign in" disabled={loading} onPress={signInWithEmail} />
      </View>
      <View>
        <Button title="Sign up" disabled={loading} onPress={signUpWithEmail} />
      </View>
    </View>
  );
}
