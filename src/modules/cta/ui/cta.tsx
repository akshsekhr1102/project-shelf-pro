'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export function CTAButton({ hasSession }: { hasSession: boolean }) {
  const router = useRouter();
  
  const handleClick = () => {
    router.push(hasSession ? '/dashboard' : '/signup');
  };

  return (
    <Button 
      onClick={handleClick}
      className=""
    >
      {hasSession ? 'Go to Dashboard' : 'Get Started'}
    </Button>
  );
}