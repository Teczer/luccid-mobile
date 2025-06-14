import { Buffer } from 'buffer';
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
      const { data } = supabase.storage.from('avatars').getPublicUrl(path);
      setAvatarUrl(data.publicUrl);
      console.log('data', data);
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

      // 3. Lis le fichier en base64
      const base64String = await readAsBase64(uri); // Assure-toi que cette fonction retourne la base64 SANS le préfixe "data:image/..."
      // Si tu as un préfixe, enlève-le :
      // const base64 = base64String.replace(/^data:image\/\w+;base64,/, '');

      // 4. Convertis en buffer
      const buffer = Buffer.from(base64String, 'base64');

      // 5. Prépare le nom du fichier
      const fileName = uri.split('/').pop() || `avatar_${Date.now()}.jpg`;
      const fileExt = fileName.split('.').pop();
      const filePath = `avatar_${Date.now()}.${fileExt}`;

      // 6. Upload vers Supabase Storage
      const { error } = await supabase.storage.from('avatars').upload(filePath, buffer, {
        cacheControl: '3600',
        contentType: 'image/jpeg', // ou 'image/png' selon le type
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
