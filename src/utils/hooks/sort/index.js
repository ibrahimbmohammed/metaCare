import React from 'react';

export default function SortData(items, config = null) {
    
    const [sortConfig, setSortConfig] = React.useState(config);
    const sortedItems = React.useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (parseInt(a[sortConfig.key], 10) && parseInt(b[sortConfig.key], 10)) {
                    return sortConfig.direction === 'ascending' ? parseInt(a[sortConfig.key], 10) - parseInt(b[sortConfig.key], 10) : parseInt(b[sortConfig.key], 10) - parseInt(a[sortConfig.key], 10);
                }
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = key => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    }

    return { items: sortedItems, requestSort, sortConfig };
}

export function getClassNamesFor(name, sortConfig = null) {
    if (!sortConfig) {
        return;
    }
    return sortConfig.key === name ? (sortConfig.direction === 'ascending' ? 'fa-caret-up ml-3' : 'fa-caret-down ml-3') : undefined;
};