// 斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
// 给定 N，计算 F(N)。

// 示例 1：

// 输入：2
// 输出：1
// 解释：F(2) = F(1) + F(0) = 1 + 0 = 1.
// 示例 2：

// 输入：3
// 输出：2
// 解释：F(3) = F(2) + F(1) = 1 + 1 = 2.
// 示例 3：

// 输入：4
// 输出：3
// 解释：F(4) = F(3) + F(2) = 2 + 1 = 3.


// 提示：

// 0 ≤ N ≤ 30

/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  const memory = {
    '0': 0,
    '1': 1
  }
  if (memory[N] === undefined) {
    memory[N] = fib(N - 1) + fib(N - 2)
  }
  return memory[N]
};

var fib = function(N) {
  if (N === 0) {
    return 0
  }
  if (N === 1 || N === 2) {
    return 1
  }
  let i = 2
  let pre = 1
  let cur = 1
  while (i++ < N) {
    const temp = pre + cur
    pre = cur
    cur = temp
  }
  return cur
}



console.warn(3, fib(4))
console.warn(5, fib(5))
console.warn(8, fib(6))