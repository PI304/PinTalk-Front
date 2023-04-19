import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { unsetAuthorHeader } from '@apis/_axios/instance';

export const useFetchUserId = () => {
  const [id, setId] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const userId = localStorage.getItem('pintalk_id');
    if (userId) {
      setId(parseInt(userId, 10));
    } else {
      router.push('/404');
      localStorage.removeItem('access_token');
      document.cookie = 'pintalk_refresh_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      unsetAuthorHeader();
    }
  }, [router]);

  return id;
};
