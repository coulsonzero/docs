# 删除链表的倒数第 n 个结点

[LC 19. 删除链表的倒数第N个节点](https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/)

难度：中等

## 题目描述

```
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
```
![](./assets/removeNthFromEnd.jpeg)

## 题解

```java
class Solution {
    public ListNode getKthFromEnd(ListNode head, int k) {
        ListNode slow = head, fast = head;
        while (k-- > 0) {
            fast = fast.next;
        }
        while (fast != null) {
            slow = slow.next;
            fast = fast.next;
        }
        return slow;
    }
}
```

::: details 点击展开代码

```java
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int k) {
        ListNode fast = head;
        ListNode slow = head;
        for (int i = 0; i < k; i++) {
            fast = fast.next;
        }
        if (fast == null) return head.next;
        while (fast.next != null) {
            fast = fast.next;
            slow = slow.next;
        }
        slow.next = slow.next.next;
        return head;
    }
}
```

:::
