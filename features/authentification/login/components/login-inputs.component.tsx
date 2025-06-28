import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Pressable, Text, TextInput, View } from 'react-native';

interface LoginInputsProps {
  email: string;
  password: string;
  showPassword: boolean;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginInputs = ({
  email,
  password,
  setEmail,
  setPassword,
  setShowPassword,
  showPassword,
}: LoginInputsProps) => {
  return (
    <View className="flex flex-col items-center gap-y-4 w-full">
      <View className="w-full gap-y-2">
        <Text className="text-white text-lg font-semibold">Email</Text>
        <TextInput
          onChangeText={text => setEmail(text)}
          value={email}
          placeholder="eg.johnfrans@gmail.com"
          autoCapitalize="none"
          keyboardType="email-address"
          className="w-full bg-neutral-900 rounded-xl px-4 py-6 text-white border-2 border-transparent focus:border-white"
          placeholderTextColor={'#E4E4E4'}
        />
      </View>

      <View className="w-full gap-y-2">
        <Text className="text-white text-lg font-semibold">Password</Text>
        <View className="w-full relative">
          <TextInput
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder="Enter your password"
            autoCapitalize="none"
            secureTextEntry={!showPassword}
            className="w-full bg-neutral-900 rounded-xl px-4 py-6 text-white border-2 border-transparent focus:border-white pr-14"
            placeholderTextColor={'#E4E4E4'}
          />
          <Pressable
            onPress={() => setShowPassword(v => !v)}
            className="absolute right-4 top-1/2 -translate-y-1/2"
            hitSlop={10}
          >
            <FontAwesome name={showPassword ? 'eye' : 'eye-slash'} size={22} color="#E4E4E4" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
