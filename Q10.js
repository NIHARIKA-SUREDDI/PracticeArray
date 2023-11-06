//Write a JavaScript program to find the leap years in a given range of years.
function leap_year(startYear, endYear) 
{
    let leap_year = [];
    for (let year = startYear; year <= endYear; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            leap_year.push(year);
        }
    }
    return leap_year;
}
var startYear = 2000;
var endYear = 2010;
var leap_year_range = leap_year(startYear, endYear);
console.log(leap_year_range);

