# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @derpderp91357/lotide`

**Require it:**

`const _ = require('@derpderp91357/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: return the first element of an array
* `middle(...)`: return the middle value of an array; if the number of elements is even, return an array of two elements
* `tail(...)`: returns a cropped array without the first element of the original