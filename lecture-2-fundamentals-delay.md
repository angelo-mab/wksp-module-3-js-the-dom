# 2.3.2 - JS Fundamentals / Timing and delay

---

## [setTimeout()](https://www.w3schools.com/jsref/met_win_settimeout.asp)

```js
// Example
setTimeout(function(){
 console.log('Hello');
}, 3000);

//after 3 seconds or 3000 milliseconds
```

---

## [setInterval()](https://www.w3schools.com/jsref/met_win_setinterval.asp)

```js
// Example
const myTimer = setInterval(function(){
 console.log('Hello')
}, 3000);

//to stop the interval
clearInterval(myTimer);
```

---

💡 Always use `clearInterval` to stop your `setInterval` loop

This will require the `setInterval` to be declared.

```js
// Example

```

---


