import { useEffect } from 'react';

const SessionCheck = () => {
  useEffect(() => {
    const redirectToHome = () => {
      // Redirige al usuario a la página de inicio si la cookie no está presente
      window.location.replace("/");
    };

    // Verifica que la cookie no esté presente y que no estamos ya en la página de inicio
    const sessionCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('session='))
      ?.split('=')[1];

    if (!sessionCookie && window.location.pathname !== "/") {
      redirectToHome();
    }
  }, []);

  return null; // No renderiza nada
};

export default SessionCheck;


