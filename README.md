# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by modifying the state variable within the dependency array.  The `bug.js` file contains the erroneous code. The solution is provided in `bugSolution.js`.

## Bug
The issue arises because the `useEffect` hook's dependency array `[]` indicates it should run only once after the initial render. However, the state `count` is updated within the `useEffect` itself, causing the `useEffect` to trigger continuously, resulting in an infinite loop.

## Solution
The corrected version in `bugSolution.js` addresses the problem by setting the initial value appropriately and removing the state update from within the `useEffect` callback.