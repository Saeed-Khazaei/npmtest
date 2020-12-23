import React, { useState } from 'react';

const ToggleStatus = (active = false) => {
    const [isActive, setIsActive] = useState(active);
    return [isActive,setIsActive];
}

export default ToggleStatus;