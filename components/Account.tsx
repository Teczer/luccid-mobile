import { useState, useEffect } from 'react';
import { Session } from '@supabase/supabase-js';
import { View, Alert, TextInput, Text, Button } from 'react-native';

import Avatar from './Avatar';
import { supabase } from '../lib/supabase';

export default function Account({ session }: { session: Session }) {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [website, setWebsite] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    if (session) getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error('No user on the session!');

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', session?.user.id)
        .single();
      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({
    avatar_url,
    username,
    website,
  }: {
    username: string;
    website: string;
    avatar_url: string;
  }) {
    try {
      setLoading(true);
      if (!session?.user) throw new Error('No user on the session!');

      const updates = {
        avatar_url,
        id: session?.user.id,
        updated_at: new Date(),
        username,
        website,
      };

      let { error } = await supabase.from('profiles').upsert(updates);

      if (error) {
        throw error;
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <View className="flex flex-col items-center justify-center h-full w-full px-10">
      <View className="w-full flex items-center justify-center">
        <Avatar
          size={200}
          url={avatarUrl}
          onUpload={(url: string) => {
            setAvatarUrl(url);
            updateProfile({ avatar_url: url, username, website });
          }}
        />
      </View>
      <View className="w-full my-5">
        <Text className="font-bold mb-1">Email</Text>
        <TextInput
          value={session?.user?.email || ''}
          editable={false}
          className="border border-gray-300 rounded px-3 py-2 mb-2 bg-gray-200 text-gray-500"
        />
      </View>
      <View className="w-full mb-5">
        <Text className="font-bold mb-1">Username</Text>
        <TextInput
          value={username || ''}
          onChangeText={text => setUsername(text)}
          className="border border-gray-300 rounded px-3 py-2 mb-2"
          placeholder="Username"
        />
      </View>
      <View className="w-full mb-5">
        <Text className="font-bold mb-1">Website</Text>
        <TextInput
          value={website || ''}
          onChangeText={text => setWebsite(text)}
          className="border border-gray-300 rounded px-3 py-2 mb-2"
          placeholder="Website"
          autoCapitalize="none"
        />
      </View>

      <View className="w-full my-5">
        <Button
          title={loading ? 'Loading ...' : 'Update'}
          onPress={() => updateProfile({ avatar_url: avatarUrl, username, website })}
          disabled={loading}
        />
      </View>

      <View>
        <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
      </View>
    </View>
  );
}
