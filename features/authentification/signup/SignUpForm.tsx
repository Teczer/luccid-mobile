import { Alert } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

import { supabase } from '@/lib/supabase';
import { BackArrow } from '@/features/authentification/components/back-arrow/back-arrow.component';
import { SignUpFooter } from '@/features/authentification/signup/components/signup-footer.component';
import { SignUpInputs } from '@/features/authentification/signup/components/signup-inputs.component';
import { SignUpHeader } from '@/features/authentification/signup/components/signup-header.component';
import { SIGNUP_GRADIENT_COLORS } from '@/features/authentification/constants/authentification.constants';
import { AuthSeparation } from '@/features/authentification/components/auth-separation/auth-separation.component';
import { AuthSubmitButton } from '@/features/authentification/components/auth-submit-button/auth-submit-button.component';
import { AuthProvidersButtons } from '@/features/authentification/components/auth-providers-buttons/auth-providers-buttons.component';

export const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState<boolean>(false);

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
    <SafeAreaView className="relative h-full w-full flex items-center justify-center bg-transparent gap-y-10 px-6">
      <LinearGradient
        colors={SIGNUP_GRADIENT_COLORS}
        locations={[0, 0.2, 0.4]}
        style={{
          height: '120%',
          position: 'absolute',
          width: '120%',
          zIndex: 0,
        }}
      />
      <BackArrow />
      <SignUpHeader />

      <AuthProvidersButtons />
      <AuthSeparation />

      <SignUpInputs
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        setShowPassword={setShowPassword}
        showPassword={showPassword}
      />

      <AuthSubmitButton loading={loading} onPress={signUpWithEmail} />
      <SignUpFooter />
    </SafeAreaView>
  );
};
