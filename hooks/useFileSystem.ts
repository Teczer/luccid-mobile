import * as FileSystem from 'expo-file-system';

export function useFileSystem() {
  // Récupère les infos d’un fichier à partir de son uri
  const getFileInfo = async (uri: string) => {
    return await FileSystem.getInfoAsync(uri);
  };

  // Lit le fichier en base64 (utile pour l’affichage ou l’upload)
  const readAsBase64 = async (uri: string) => {
    return await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });
  };

  return { getFileInfo, readAsBase64 };
}
