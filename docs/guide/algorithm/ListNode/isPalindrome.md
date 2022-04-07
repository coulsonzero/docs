# 234. 回文链表

[LC 234. 回文链表](https://leetcode-cn.com/problems/palindrome-linked-list/)

## 题目描述
```
请你判断该链表是否为回文链表。
如果是，返回 true ；否则，返回 false 。
```
示例
```
输入：head = [1,2,2,1]
输出：true

输入：head = [1,2]
输出：false
```

## 题解

:::: code-group
::: code-group-item Python

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        arr = []
        cur = head
        while cur is not None:
            arr.append(cur.val)
            cur = cur.next
        return arr == arr[::-1]
```

:::

::: code-group-item Java

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public boolean isPalindrome(ListNode head) {
        List<Integer> arr = new ArrayList<Integer>();
        ListNode cur = head;
        while (cur != null) {
            arr.add(cur.val);
            cur = cur.next;
        }

        // 使用双指针判断是否回文
        int front = 0;
        int back = arr.size() - 1;
        while (front < back) {
            if (!arr.get(front).equals(arr.get(back))) {
                return false;
            }
            front++;
            back--;
        }
        return true;
    }
}
```

:::

:::