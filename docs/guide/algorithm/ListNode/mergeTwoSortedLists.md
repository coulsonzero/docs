# [合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/submissions/)

## 题目描述

```java
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
```

![](./assets/mergeTwoLists.jpeg)

## 题解
:::: code-group
::: code-group-item Java
```java
class Solution {
    public ListNode mergeTwoLists(ListNode linked1, ListNode linked2) {
        if (linked1 == null || linked2 == null) return linked2 == null ? linked1 : linked2;
        ListNode first = (linked2.val < linked1.val) ? linked2 : linked1;
        first.next = mergeTwoLists(first.next, first == linked1 ? linked2 : linked1);
        return first;
    }
}
```
:::
::::


::: details 点击查看示例
```java
class MergeTwoSortedLists {
    static class ListNode {
        int val;
        ListNode next;

        ListNode() {
        }

        ListNode(int val) {
            this.val = val;
        }

        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }
    public static ListNode mergeTwoLists(ListNode linked1, ListNode linked2) {
        // 只要有一个为null，就返回另一个
        if (linked1 == null || linked2 == null)
            return linked2 == null ? linked1 : linked2;
        // 当前最小节点
        ListNode first = (linked2.val < linked1.val) ? linked2 : linked1;
        // 下一个节点
        first.next = mergeTwoLists(first.next, first == linked1 ? linked2 : linked1);
        return first;
    }

    public static void main(String[] args) {
        ListNode node1 = new ListNode(1, 2, 4);
        ListNode node2 = new ListNode(1, 3, 4);
        mergeTwoLists(node1, node2);
    }
}
```
:::