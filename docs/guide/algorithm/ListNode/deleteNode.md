# [删除链表中的节点](https://leetcode-cn.com/problems/delete-node-in-a-linked-list/)

## 题目描述
```
输入：head = [4,5,1,9], node = 5
输出：[4,1,9]
```
![](./assets/deleteNode.jpeg)

## 题解

:::: code-group
::: code-group-item Java
```java
class Solution {
    public void deleteNode(ListNode node) {
        node.val = node.next.val;   //把要删除结点的下一个结点的值赋给要删除的结点
        node.next = node.next.next; //然后删除下一个结点
    }
}
```
:::
::::