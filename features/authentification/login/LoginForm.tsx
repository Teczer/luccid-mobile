import { Alert } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

import { supabase } from '@/lib/supabase';
import { LoginHeader } from '@/features/authentification/login/components/login-header.component';
import { LoginInputs } from '@/features/authentification/login/components/login-inputs.component';
import { LoginFooter } from '@/features/authentification/login/components/login-footer.component';
import { BackArrow } from '@/features/authentification/components/back-arrow/back-arrow.component';
import { LOGIN_GRADIENT_COLORS } from '@/features/authentification/constants/authentification.constants';
import { AuthSeparation } from '@/features/authentification/components/auth-separation/auth-separation.component';
import { AuthSubmitButton } from '@/features/authentification/components/auth-submit-button/auth-submit-button.component';
import { AuthProvidersButtons } from '@/features/authentification/components/auth-providers-buttons/auth-providers-buttons.component';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState<boolean>(false);

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
    <SafeAreaView className="relative h-full w-full flex items-center justify-center bg-transparent gap-y-10 px-6">
      <LinearGradient
        colors={LOGIN_GRADIENT_COLORS}
        locations={[0, 0.2, 0.4]}
        style={{
          height: '120%',
          position: 'absolute',
          width: '120%',
          zIndex: 0,
        }}
      />
      <BackArrow />
      <LoginHeader />

      <AuthProvidersButtons />
      <AuthSeparation />

      <LoginInputs
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        setShowPassword={setShowPassword}
        showPassword={showPassword}
      />

      <AuthSubmitButton loading={loading} onPress={signInWithEmail} />
      <LoginFooter />
    </SafeAreaView>
  );
}
