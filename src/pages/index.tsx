import { useRouter } from 'next/router';
import { useEffect } from 'react';

const IndexPage = () => {
  const router = useRouter();
  useEffect(() => {
    const { pathname } = router;
    if (pathname === '/') {
      router.push('/designs');
    }
  }, []);

  return null;
};

export default IndexPage;
