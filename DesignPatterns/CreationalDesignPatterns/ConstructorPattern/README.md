Constructor Pattern:
Used to create new objects with their own object scope.
In constructor Pattern, we initialize everything using constructors.

Drawbacks: 
In task.js, we created 4 objects of tasks which creates 4 copies of complete, save methods which we don't need.
So, we can come out of this situation using prototypes. We can rewrite the code in task.js to the code in prototype.js for an efficient approach.