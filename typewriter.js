//Takes a sentence and displays it as an animation, ie each character is displayed separately with a delay from the previous character
const sentence = "hello there from lighthouse labs";

let i = 0;
for (const char of (sentence + '\n')) {
  setTimeout(() => {
    process.stdout.write(char);
  }, 50 * i);
  i++;
}