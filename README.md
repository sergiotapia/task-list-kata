# Task List Kata

Just a lil' Friday Code Kata.

Built using create-react-app, React, Mobx.

## Running locally

```
cd ~/task-list-kata
yarn
yarn start
```

Visit: http://localhost:3000/

## Functionality

Tasks are loaded from tasks.js into the Mobx store, which we then set up with a Provider. We
finally inject it into any component that needs to access the store data or functions.

It's pretty nifty!

These tasks are toggleable, but some of them require some tasks to be checked first before you
are allowed to check them. Task dependencies if you will.

If you decide to uncheck something, it's dependents will uncheck, and so will it's grandparents, etc. Up
the chain.

child (uncheck) -> parent (uncheck) -> parent (uncheck) -> parent (uncheck) -> and so on.
