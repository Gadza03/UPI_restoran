import { useContext } from 'react';
import { CartContext } from '@providers/CartContext.tsx';

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCartContext must be used within a CartProvider');
    }
    return context;
};
