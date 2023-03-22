// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


// returnFirstTwoDrivers returns the first two drivers

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
    };

    // returnLastTwoDrivers returns the last two drivers
    const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
    };
    
    // selectingDrivers is a new array with our first two deckarations
    const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
    
    // createFareMultiplier this is a function that multiplies the fare with a given variable or multiplier
    const createFareMultiplier = function(integer) {
    return function(fare) {
    return fare * integer;
    };
    };
    
    // fareDoubler function  doubles the fare
    const fareDoubler = createFareMultiplier(2);
    
    // fareTripler function triples the fare 
    const fareTripler = createFareMultiplier(3);
    
    // selectDifferentDrivers is a function that selects drivers depending on which of our first two functions we call on 
    const selectDifferentDrivers = function(drivers, func) {
    return func(drivers);
    };