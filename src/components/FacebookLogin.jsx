import React, { useEffect } from 'react';
import { useLogin, useProfile, useFacebook } from 'react-facebook';

const FacebookLogin = () => {
  const { isLoading: sdkLoading, error: sdkError, init } = useFacebook();
  const { login, status, isLoading, error } = useLogin();
  const { profile } = useProfile(['id', 'name', 'email', 'picture']);

  useEffect(() => {
    console.log('هل Facebook SDK موجود؟', window.FB);
  }, []);

  const handleLogin = async () => {
    try {
      await init();
      const res = await login({ scope: 'email,public_profile' });
      console.log('Login status:', res.status);
    } catch (err) {
      console.error('Login error:', err.message);
    }
  };

  return (
    <div>
      <button onClick={handleLogin} disabled={sdkLoading || isLoading}>
        {isLoading ? 'جارٍ تسجيل الدخول...' : 'تسجيل الدخول بالفيسبوك'}
      </button>

      {status === 'connected' && profile && (
        <div style={{ marginTop: '1rem' }}>
          <p>مرحبًا، {profile.name}</p>
          <img src={profile.picture?.data?.url} alt="الصورة الشخصية" />
        </div>
      )}

      {sdkError && <p>حدث خطأ في تحميل SDK: {sdkError.message}</p>}
      {error && <p>حدث خطأ أثناء تسجيل الدخول: {error.message}</p>}
    </div>
  );
};

export default FacebookLogin;
