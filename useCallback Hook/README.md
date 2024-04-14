useCall Back Hooks 

- Used to Optimize Performance 
- Uses Caching for Methods, and Functions Passed in as Props.


Trick Question 

Why not use useCallback Every Time?
-> Specifically the cost for useCallback and useMemo are that you make the code more complex, you could make a mistake in the dependencies array, and you're potentially making performance worse by invoking the built-in hooks and preventing dependencies and memoized values from being garbage collected. Those are all fine costs to incur if you get the performance benefits necessary, but it's best to measure first.