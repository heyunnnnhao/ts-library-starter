import { useEffect } from 'react';
import './style.scss'

export default function Test() {
  useEffect(() => {
    console.log('loaded');
  }, []);

  return (
    <div className='container'>
      <div>12</div>
      <div>12</div>
    </div>
  );
}
