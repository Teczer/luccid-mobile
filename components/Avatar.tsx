import { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, Image, Button } from 'react-native';

import { useFileSystem } from '@/hooks/useFileSystem';
import { useImagePicker } from '@/hooks/useImagePicker';

import { supabase } from '../lib/supabase';

interface Props {
  size: number;
  url: string | null;
  onUpload: (filePath: string) => void;
}

export default function Avatar({ onUpload, size = 150, url }: Props) {
  const [uploading, setUploading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const avatarSize = { height: size, width: size };

  const { pickImage } = useImagePicker();
  const { getFileInfo, readAsBase64 } = useFileSystem();

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  async function downloadImage(path: string) {
    try {
      const { data, error } = await supabase.storage.from('avatars').download(path);

      if (error) {
        throw error;
      }

      // Convertir le blob en base64 pour l'affichage
      const reader = new FileReader();
      reader.readAsDataURL(data);
      reader.onload = () => {
        setAvatarUrl(reader.result as string);
      };
    } catch (error) {
      if (error instanceof Error) {
        console.log('Error downloading image: ', error.message);
      }
    }
  }

  async function uploadAvatar() {
    try {
      setUploading(true);

      // 1. Sélectionne une image
      const uri = await pickImage();
      if (!uri) return;

      // 2. Récupère les infos du fichier
      const fileInfo = await getFileInfo(uri);
      if (!fileInfo.exists) throw new Error('File does not exist');

      // 3. Prépare le fichier pour l’upload
      const fileName = uri.split('/').pop() || `avatar_${Date.now()}.jpg`;
      const fileExt = fileName.split('.').pop();
      const filePath = `${Math.random()}.${fileExt}`;

      // 4. Upload vers Supabase Storage
      const response = await fetch(uri);
      const blob = await response.blob();

      let { error } = await supabase.storage.from('avatars').upload(filePath, blob, {
        contentType: blob.type,
        upsert: true,
      });

      if (error) {
        throw error;
      }

      onUpload(filePath);
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      } else {
        throw error;
      }
    } finally {
      setUploading(false);
    }
  }

  return (
    <View>
      {avatarUrl ? (
        <Image
          source={{ uri: avatarUrl }}
          accessibilityLabel="Avatar"
          style={[avatarSize, styles.avatar, styles.image]}
        />
      ) : (
        <View style={[avatarSize, styles.avatar, styles.noImage]} />
      )}
      <View>
        <Button title={uploading ? 'Uploading ...' : 'Upload'} onPress={uploadAvatar} disabled={uploading} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 5,
    maxWidth: '100%',
    overflow: 'hidden',
  },
  image: {
    paddingTop: 0,
    resizeMode: 'cover',
  },
  noImage: {
    backgroundColor: '#333',
    borderColor: 'rgb(200, 200, 200)',
    borderRadius: 5,
    borderWidth: 1,
  },
});
