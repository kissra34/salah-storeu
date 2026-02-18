import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function NavigationTracker() {
  const location = useLocation();

  useEffect(() => {
    console.log(`تم الانتقال إلى: ${location.pathname}`);
  }, [location]);

  return null;
}

export default NavigationTracker;
