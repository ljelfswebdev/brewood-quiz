// components/FormattedDate.js

import React from 'react';

function getFormattedDate(date) {
    const dayOfMonth = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    let daySuffix;
    if (dayOfMonth === 1 || dayOfMonth === 21 || dayOfMonth === 31) {
        daySuffix = 'st';
    } else if (dayOfMonth === 2 || dayOfMonth === 22) {
        daySuffix = 'nd';
    } else if (dayOfMonth === 3 || dayOfMonth === 23) {
        daySuffix = 'rd';
    } else {
        daySuffix = 'th';
    }

    return `${dayOfMonth}${daySuffix} ${month} ${year}`;
}

function getDayOfWeek(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[date.getDay()];
}

function FormattedDate() {
    const today = new Date();
    const formattedDate = getFormattedDate(today);
    const dayOfWeek = getDayOfWeek(today);

    return (
        <div>
            <p>{dayOfWeek} {formattedDate}</p>
        </div>
    );
}

export default FormattedDate;
