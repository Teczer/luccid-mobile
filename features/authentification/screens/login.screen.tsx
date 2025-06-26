import { router } from 'expo-router';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Text, Alert, View, Pressable } from 'react-native';

import { supabase } from '@/lib/supabase';
import { Icon } from '@/components/icon/icon.component';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  return (
    <SafeAreaView className="relative h-full w-full flex items-center justify-start bg-transparent gap-y-10 px-8">
      <LinearGradient
        colors={['#BC77E9', '#6A28AD', '#151313']}
        locations={[0, 0.1, 0.25]}
        style={{
          height: '120%',
          position: 'absolute',
          width: '120%',
          zIndex: 0,
        }}
      />
      <Pressable className="w-full" onPress={() => router.back()}>
        <FontAwesome name="arrow-left" size={20} color={'#fff'} />
      </Pressable>

      <Text className="text-white text-2xl font-semibold">Song Choicer</Text>
      <View className="w-full items-center gap-y-2">
        <Text className="text-white text-4xl font-semibold">Sign In Account</Text>
        <Text className="text-white text-lg">Enter your personal data to create your account.</Text>
      </View>
      <View className="w-full flex flex-row gap-x-4">
        <Pressable
          disabled={loading}
          onPress={signInWithEmail}
          className="flex-row w-1/2 items-center justify-center h-14 border border-[#373143] bg-transparent rounded-lg gap-x-2"
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
        >
          <Text className="text-white text-xl font-semibold">Google</Text>
        </Pressable>
        <Icon name="flat-color-icons_google" />
        <Icon name="flat-color-icons_google" width={200} height={200} />

        <Pressable
          disabled={loading}
          onPress={signInWithEmail}
          className="flex-row w-1/2 items-center justify-center h-14 border border-[#373143] bg-transparent rounded-lg gap-x-2"
          style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
        >
          <FontAwesome name="apple" size={20} color={'#fff'} />
          <Text className="text-white text-xl font-semibold">Apple</Text>
        </Pressable>
      </View>

      <View className="flex flex-col items-center gap-y-4 w-full">
        <View className="w-full relative">
          <View className="w-16 z-10 h-full flex items-center justify-center absolute">
            <FontAwesome name="envelope" size={20} color={'#fff'} />
          </View>
          <TextInput
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder="Email address"
            autoCapitalize="none"
            keyboardType="email-address"
            className="w-full border border-neutral-700 bg-neutral-900 rounded-lg p-4 px-14 text-white focus:border-white"
            placeholderTextColor={'#A3A3A3'}
          />
        </View>

        <View className="w-full relative">
          <View className="w-16 z-10 h-full flex items-center justify-center absolute">
            <FontAwesome name="lock" size={25} color={'#fff'} />
          </View>
          <TextInput
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry
            className="w-full border border-neutral-700 bg-neutral-900 rounded-lg p-4 px-14 text-white focus:border-white"
            placeholderTextColor={'#A3A3A3'}
          />
        </View>
      </View>
      <Pressable
        disabled={loading}
        onPress={signInWithEmail}
        className="flex-row items-center justify-center w-full h-14 bg-white rounded-lg"
        style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
      >
        <Text className="text-black text-xl font-bold">Login</Text>
      </Pressable>
    </SafeAreaView>
  );
}
