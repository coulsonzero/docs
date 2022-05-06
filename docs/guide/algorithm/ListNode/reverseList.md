# 反转链表

[LeetCode 206. 反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)

## Question

```java
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL

输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
```

![反转链表](./assets/reverseList.png)

## Solution

:::: code-group
::: code-group-item 递归

```java
class Solution {
    // 递归 (head.next -> head, head -> null)
    public ListNode reverseList(ListNode head) {
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

:::
::: code-group-item 迭代

```java
class Solution {
    public ListNode reverseList1(ListNode head) {
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

:::
::::

::: details 点击显示示例

```java
class ReverseList {
    static class ListNode {
        int val;
        ListNode next;
        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }

    // 迭代
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

    // 递归
    public static ListNode reverseList2(ListNode head) {
        if(head == null || head.next == null) {
            return head;
        }
        ListNode node = reverseList2(head.next);
        // head.next -> head
        head.next.next = head;
        // head -> null
        head.next = null;
        return node;
    }

    public static void main(String[] args) {
        ListNode node5 = new ListNode(5, null);
        ListNode node4 = new ListNode(4, node5);
        ListNode node3 = new ListNode(3, node4);
        ListNode node2 = new ListNode(2, node3);
        ListNode node1 = new ListNode(1, node2);

        ListNode pre = reverseList1(node1);
        System.out.println(pre);
    }
}
```

:::

