# 删除排序链表中的重复元素

## 题目描述

```
输入：head = [1,1,2]
输出：[1,2]
```

![](./assets/deleteDuplicates.jpeg)

## 题解

:::: code-group
::: code-group-item 递归

```java
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        if(head == null || head.next == null) {
            return head;
        }
        head.next = deleteDuplicates(head.next);
        if(head.val == head.next.val) {
            head = head.next;
        }
        return head;
    }
}
```
:::
::: code-group-item 迭代

```java
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        if (head == null) return head;
        ListNode cur = head;
        while (cur.next != null) {
            // 如果当前节点值==下个节点值，当前节点指针指向下下个节点
            if (cur.val == cur.next.val) {
                cur.next = cur.next.next;
            } else {
                cur = cur.next;
            }
        }
        return head;
    }
}
```
:::
::::