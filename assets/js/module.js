'use strict';

export const weekDayNames =[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

export const MonthNames =[
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

export const getData = function(dateUnix, timezone){
    const date = new Date((dateUnix + timezone)*1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const MonthName = MonthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate}, ${MonthName}`;
}
/**
 *
 * @param {number} timeUnix
 * @param {number} timezone
 * @returns {string}
 */

export const getTime =function(timeUnix , timezone){
    const date =new Date((timeUnix + timezone)*1000);
    const hours =date.getUTCHours();
    const minutes =date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12|| 12}:${minutes} ${period}`;

}


/**
 *
 * @param {number} timeUnix
 * @param {number} timezone
 * @returns {string}
 */

export const getHours =function(timeUnix , timezone){
    const date =new Date((timeUnix + timezone)*1000);
    const hours =date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12|| 12}:${minutes} ${period}`;
    
}

export const map_to_dm_kmph