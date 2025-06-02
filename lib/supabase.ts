import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

import { mmkvStorage } from '@/lib/mmkv';

const supabaseUrl = 'https://zvlmsjchjkaemmsrhxgr.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2bG1zamNoamthZW1tc3JoeGdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4ODA5MDMsImV4cCI6MjA2NDQ1NjkwM30.WH9y-jBtldBd88kSvNWJ6wQaohXZZjTZqtOALPBGipg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    detectSessionInUrl: false,
    persistSession: true,
    storage: mmkvStorage,
  },
});
