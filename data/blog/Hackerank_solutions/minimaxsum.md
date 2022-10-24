---
title: Hackerank Mini-Max Sum Solution
date: '2021-08-30'
tags: ['Javascript']
draft: false
summary: 'How to solve the Hackerank Mini-Max Sum problem in less than 4 mins using JavaScript code'
images: 'static/images/individualBlogPostImages/hackerank.jpg'
---

We will cover [Hackerank's Mini-max sum coding challenge](https://www.hackerrank.com/challenges/one-month-preparation-kit-mini-max-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one)

Of course like any other coding challenge, there are several ways to solve the problem above. One is to sort the array from lowest to highest values and add the first four and last four values.

The other way which I find preferablex x is to find the minimum and maximum value in the array and the subtract the two values from the total sum. This method will still provide the minimum and maximum sum of the array.

First, let us set 3 variables. One for the max value, one for the min and the other for the sum of the values in the array.

```
function miniMaxSum(arr) {
    // Write your code here
    let sum = 0;
    let max = arr[0];
    let min = arr[0];
}
```

Now we want to cycle through the array to find the array and find the right respective values using a standard for loop. Now that we have our maximum value assigned, should we find a value in the array largar thab the maximum value we assign `max` to the number. The same concept is used for the minimum value if an array value is less than the minimum value assigned to the `min` variable. For our sum, we simply add all the 5 variables in the array.

```
function miniMaxSum(arr) {
    // Write your code here
    let sum = 0;
    let max = arr[0];
    let min = arr[0];

    for(let i=0; i < arr.length; i ++){
        if(max < arr[i]){
            max = arr[i];
        }
        if(min > arr[i]){
            min = arr[i]
        }
        sum += arr[i]
    }
}

```

At this point, our maximum sum will be thr total sum minus the minimum sum of all the variables in the array. Likewise, the minimum sum will be the total sum minus the maximum sum of all the variables in the array.

```
function miniMaxSum(arr) {
    // Write your code here
    let sum = 0;
    let max = arr[0];
    let min = arr[0];

    for(let i=0; i < arr.length; i ++){
        if(max < arr[i]){
            max = arr[i];
        }
        if(min > arr[i]){
            min = arr[i]
        }
        sum += arr[i]
    }

    let minimumsum = sum-max;
    let maximumsum = sum-min;
}

```

Print the output and your done

```
function miniMaxSum(arr) {
    // Write your code here
    let sum = 0;
    let max = arr[0];
    let min = arr[0];

    for(let i=0; i < arr.length; i ++){
        if(max < arr[i]){
            max = arr[i];
        }
        if(min > arr[i]){
            min = arr[i]
        }
        sum += arr[i]
    }
    let minimumsum = sum-max;
    let maximumsum = sum-min;

    console.log(minimumsum, maximumsum);
}
```
