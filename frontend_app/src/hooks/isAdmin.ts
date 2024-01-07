import { useState } from 'react';

export const useIsAdmin = () => {
    const [isAdmin, setIsAdmin] = useState(false);

    const checkIsAdmin = async (username: string) => {
        if (username === 'admin@example.com') {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    };

    return { isAdmin, checkIsAdmin };
};