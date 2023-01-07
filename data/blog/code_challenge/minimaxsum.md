---
title: Big O Notation
date: '2023-01-07'
tags: ['Python']
draft: false
summary: 'Big O Notation Series Part 1: Understand the definition and basic application of one of the most fundamental tools in analyzing the cost of an algorithm in computer science.'
images: 'static/images/individualBlogPostImages/bigo.png'
---

Big O Notation is used to classify the efficiency of algorithms as their input approaches infinity. This means that as the input grows, it measures how drastically the space or time requirements grow with it.

### Example :

Suppose a nurse takes 30 mins to treat a patient. This means that as the number of patients increases in line, the time the nurse uses to treat will linearly increase. We can calculate how long the nurse can finish the job based on the number of patients in line.

In Big O terms, the linear pattern can be described as `Big O(n)`(where n is the number of patients).
The same technique can be used to determine the efficiency of algorithms. We can have an idea of how much a function's time efficiency scales by categorizing the nurse's efficiency.
Consider the function below:

```
def linearFunction(arr):
    for i in range(len(arr)):
        print(1000000 * 100)


arr = [1,2,3,4,5]

print(linearFunction(arr))
```

The function `linearFunction` takes an array input containing 4 elements inside. For each item, we will log multiple results of the values provided. The large numbers should not fool you because the function will take the same amount of time to multiply 1000000 \* 100.

**_NOTE_**: When considering the efficiency of a function, the lines that take constant time do not matter. If the multiple used was instead 1\*1 for example, the function's efficiency won't incur any difference.

Let us look at another example;

```
def linearFunction(arr):
    for i in range(0, len(arr)):
        print(1000000*100)
    sumn = (200000*30000) / 2
    print(sumn)

```

The above function is still expected to behave like the previous one and ignore all the [constants](https://www.google.com/search?q=python+constant+definition&oq=python+constant+def&aqs=chrome.1.69i57j0i512j0i22i30l7j0i22i30i625.10826j0j7&sourceid=chrome&ie=UTF-8) to scale linearly or (O)n. We will recognize a constant as any step that does not scale with input to the function.

Just as we use Big O(n) to describe linear functions, we also have a Big O name for constant algorithms known as Big 0(1) where every function line of code is a function in and of itself. An example would be the code we have just experienced

```
1 def linearFunction(arr):
2     for i in range(0, len(arr)):
3        print(1000000*100)
4    sumn = (200000*30000) / 2
5    print(sumn)

```

Line 1 above is the reason why the entire linear function is(O)n because as the size of n increases, the number of iterations also increases.
Lines 2, 3 & 4 are all constants, hence their Big O value is (O)1 for each item.
Since (O)n, compared to O(1), is the worst-performing or highest-order part of the function, all the (O)1s will be canceled out to remain with (O)n.

Big O has a growth hierarchy that looks like the below:

![Big O Order of Growth](https://res.cloudinary.com/dlt0f5pvq/image/upload/v1673082375/Screenshot_36_d5cawa.png)

When determining the efficiency of an algorithm, we only care about the worst case. Meaning the worst cases triumph over the ones with better performance. Due to this factor, when it comes to

    O(n) + O(1) + O(1) + O(1)

all the (O)1 values will be canceled because (O)n is the worst-performing or highest-order part of the function.

To recap what we have just described, to evaluate an algorithm's efficiency, we must take into consideration the efficiency of each step within the algorithm. When we find the highest-order step or the step that has the worst performance, we prioritize it over all the better-performing steps. Constant steps or over one are as good as it gets.

So far, we have covered the basic definition of Big O notation and its linear function concept O(n). You can click the link below to proceed to Part 2 of this article where we will proceed to check out the concept of O(n^2).
