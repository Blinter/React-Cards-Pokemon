import { useState } from 'react';

function useFlip(initialFacingDirection = true) {
    const [isFacingUp, setIsFacingUp] = useState(initialFacingDirection);
    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
    };
    return [isFacingUp, flipCard];
}

export { useFlip };