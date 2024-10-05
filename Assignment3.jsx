import React, { useState, useMemo } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 10 },
        // Add more items as needed
    ]);

    
    // Your code starts here
 const totalValue = useMemo(() => {
    return items.reduce((sum, item) => sum + item.value, 0);
}, [items]);
    // Your code ends here
    return (
        <div>
            {/* <input type="text" value ={v}  onChange={(e) => setInput(Number(e.target.value))} placeholder="Enter a number"/> */}
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>
        </div>
    );
};
