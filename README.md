# redux-Masterclass

### 01-react-intro

<dl>
  <dt>Assignment 1</dt>
  <dd>Using the concepts learnt in this chapter. Make a Async type of call from a new reducer to any online API like [JSON Placeholder Posts](https://jsonplaceholder.typicode.com/posts). Also show proper loading messages in console. Like - loading posts..., posts loaded , posts fetching failed. Also add those posts to a state of reducer in a sorted manner (sort by title)</dd>

  <dt>Assignment 2</dt>
  <dd>Check out IMMER library and run some example and see how you can make mutating updates like state.amount++ inside reducer logic. And still it work perfectly in redux. [Immer Link](https://immerjs.github.io/immer/)</dd>
</dl>


### 02 react-redux

<dl>
  <dd>
    Add more cases in Account Reducer called decrementByAmount . Also check that amount should not be decremented in case amount to be decremented is less than account Balance. For e.g. if total amount in account is 10, you can't decrement by 11. Also show an error in that situation to user.
  </dd>
</dl>

### 03 react-toolkit

<dl>
  <dd>
    Create more async thunk examples, we only tried GET USER- READ example. But try the CRUD example to Create new user, Update the user, Delete the user. 
    
      1. You have to create a list of users which has names of all users in local database - You an INPUT BOX to add new users to list , users show also add to database and updated in list.[Hint: use REST API concepts for Create API, POST method] 
      2. You can put a delete button on end of list item. On clicking of this button user list item will be deleted from database. [Hint: use REST API concepts Delete API, DELETE method] 
      3. You can put a selected button on end of list item. On clicking of this button user list item will change colors. [Hint: use REST API concepts Update API, PUT/PATCH method]
  </dd>
</dl>