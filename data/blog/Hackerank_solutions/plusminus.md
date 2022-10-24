---
title: 'Hackerank Plus Minus Javascript Solution'
date: '2022-08-31'
tags: ['javascript']
images: 'static/images/individualBlogPostImages/hackerank.jpg'
draft: false
summary: After finishing a project, it was time to start a new one. But where do I begin? What do I build? These are the questions I asked myself. This post is about my journey in creating a new project and the steps I took to get started.
---

In this article we will cover the [Hackerank plus-minus coding challenge](https://www.hackerrank.com/challenges/one-month-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one)

The above question falls under `easy` category.

To solve, we first initialize the variables to keep track of the number of `positive`, `negative`, and `zero` values in the array.
Add another variable `arraylength` to be assigned the length of the array received through the function's `arr` prop

```
function plusMinus(arr) {
   let positivecounter = 0;
   let negativecounter = 0;
   let zerocounter = 0;

   let arraylength = arr.length;
}
```

At this point, use a for-loop to loop through each array value and determine whether it is a positive, negative, or zero value. We do this by simply checking if the number is greater than, less than, or equal to the number 0.

```
function plusMinus(arr) {
    // Write your code here

    let positivecounter = 0;
    let negativecounter = 0;
    let zerocounter = 0;

    let arraylength = arr.length;

    for(let i=0; i < arraylength; i++){
        if(arr[i] > 0){
            positivecounter++;

        }else if(arr[i] < 0) {
            negativecounter ++
        }else if (arr[i] == 0){
            zerocounter ++
        }
    }
}
```

Finally, we need to print the value of each respective category's integer as a fraction of the array length and convert the result to only display in 6 decimal places. Since we are using javascript, we use `console.log` function for printing the result and `.toFixed()` function to return a string representation of a number object and specify the exact number of decimal places we need.

```
function plusMinus(arr) {
    // Write your code here

    let positivecounter = 0;
    let negativecounter = 0;
    let zerocounter = 0;

    let arraylength = arr.length;

    for(let i=0; i < arraylength; i++){
        if(arr[i] > 0){
            positivecounter++;

        }else if(arr[i] < 0) {
            negativecounter ++
        }else if (arr[i] == 0){
            zerocounter ++
        }
    }

    console.log((positivecounter/arraylength).toFixed(6))
    console.log((negativecounter/arraylength).toFixed(6))
    console.log((zerocounter/arraylength).toFixed(6))
}
```

That's it! We have successfully solved the `Plus Minus` problem.

Feel free to checkout other coding challenges [here](https://www.apeli.tech/)
