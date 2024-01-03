import Cookies from 'universal-cookie';

export const useIsLogged = () => {
    const cookie = new Cookies();
    return cookie.get('is-logged') !== undefined;
}