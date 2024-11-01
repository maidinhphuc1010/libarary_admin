
import useLocalStorageState from '../useLocalStorageState';

const useBorrows = () => {
    const [borrows, setBorrows] = useLocalStorageState('borrows', []);

    const handleAddBorrow = (newBorrow) => {
        setBorrows([...borrows, newBorrow]);
    };

    const markAsReturned = (id) => {
        setBorrows(borrows.map(borrow => (borrow.id === id ? { ...borrow, isReturned: true } : borrow)));
    };

    const markAsNotReturned = (id) => {
        setBorrows(borrows.map(borrow => (borrow.id === id ? { ...borrow, isReturned: false } : borrow)));
    };

    return { borrows, handleAddBorrow, markAsReturned, markAsNotReturned };
};

export default useBorrows;
