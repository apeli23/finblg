---
title: 'Hackerank Time Conversion Problem Solution'
date: '2021-08-30'
lastmod: '2021-08-31'
tags: ['Javascript']
draft: false
summary: 'How to solve the Hackerank Time Conversion Sum problem in less than 4 mins using JavaScript code.'
images: 'static/images/individualBlogPostImages/hackerank.jpg'
# authors: ['Apeli Brian']
---

## Hackerank Time Conversion Solution

This article will give a step by step guide on how to solve the [time conversion problem from hackerank website](https://www.hackerrank.com/challenges/one-month-preparation-kit-time-conversion/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one)

In this problem, we are simply required to convert standard time(12hr clock system) to military time(24hr clock system). Of course the minutes and seonds values will retain so we will only be changing the hours values.
We have three cases to note in our conversion;

i). The hrs value of `12 AM` will be coverted to `00`

ii). The hrs value of `1AM-12PM` will not be retain their values.

iii). The hrs value of `1PM-12PM` will be converted by taking the original value and adding 12 to the respective hour digit.

In my solution, i will make use ogf javascript's `if-else` statements.

First, create a value to store the AM or PM.
The code below checks the value at the 8th index of the input. The value will aither be `A` or `P`.

```
function timeConversion(s){
    let amPm = s.charAt(8);
}
```

Create another variable to store the converted hour value. Initially, we assign it to an empty string.

```
function timeConversion(s){
    let amPm = s.charAt(8);
    let  militaryHour = "";

}
```

Now we differenciate between AM and PM using an if statement.

```
function timeConversion(s){
    let amPm = s.charAt(8);
    let  militaryHour = "";

    if(amPm == "A"){
        //am
        if(s.substring(0,2) == 12){

        }
    }else {
        //pm
    }
}
```

The substring function takes consecutive characters from a string. We take the characters from index zero too index one. If the number is `12`, we change the hour value to `00`. Else we maintain the original hour

```
function timeConversion(s){
    let amPm = s.charAt(8);
    let  militaryHour = "";

    if(amPm == "A"){
        //am
        if(s.substring(0,2) == '12'){
            militaryHour = '00';
        }else {
            militaryHour = s.substring(0,2);
        }
    }else {
        //pm

    }
}
```

For the pm values, if the substring is 12, we do nothing. Otherwise we add 12 to the substring. Use the parsent function to convert the string to an integer. We indicate that the number is to the base of 10.

```
function timeConversion(s){
    let amPm = s.charAt(8);
    let  militaryHour = "";

    if(amPm == "A"){
        //am
        if(s.substring(0,2) == '12'){
            militaryHour = '00';
        }else {
            militaryHour = s.substring(0,2);
        }
    }else {
        //pm
        if(s.substring(0,2) == '12'){
            militaryHour = s.substring(0,2);
        }else {
            militaryHour = parseInt(s.substring(0,2),10);
        }
    }
}
```

Finally, the question expects us to return the value in military hour. In our return statement, we return the militaryHour value plus the values of s from index 1 to 7. that is from the colon after the hours value all the way to the end.

```
function timeConversion(s){
    let amPm = s.charAt(8);
    let  militaryHour = "";

    if(amPm == "A"){
        //am
        if(s.substring(0,2) == '12'){
            militaryHour = '00';
        }else {
            militaryHour = s.substring(0,2);
        }
    }else {
        //pm
        if(s.substring(0,2) == '12'){
            militaryHour = s.substring(0,2);
        }else {
            militaryHour = parseInt(s.substring(0,2),10) +12;
        }
    }
    return militaryHour + s.substring(2,8);
}
```
