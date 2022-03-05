# 反转链表

## Question

```java
反转链表

        1 -> 2 -> 3 -> 4 -> 5 -> null
null <- 1 <- 2 <- 3 <- 4 <- 5
```

## Solution

* 递归

```java
class Solution {
    // 递归 (head.next -> head, head -> null)
    public static ListNode reverseList(ListNode head) {
        if(head == null || head.next == null) {
            return head;
        }
        ListNode node = reverseList(head.next);
        head.next.next = head;
        head.next = null;
        return node;
    }
}
```

* 迭代

```java
class Solution {
    public static ListNode reverseList1(ListNode head) {
        ListNode pre = null, cur = head, next = null;
        while (cur != null) {
            next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
        return pre;
    }
}
```