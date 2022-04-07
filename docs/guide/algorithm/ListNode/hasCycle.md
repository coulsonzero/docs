# 环形链表

## 环形链表 I
[LC 141. 环形链表 I](https://leetcode-cn.com/problems/linked-list-cycle/)

### 题目描述
```
使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）
如果链表中存在环 ，则返回 true 。 否则，返回 false 。
```

示例
```
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

![](./assets/hasCycle.png)

### 题解

- 环形链表一 (快慢指针)

:::: code-group
::: code-group-item Java
```java
public class Solution {
    public boolean hasCycle(ListNode head) {
        if(head == null) return false;
        ListNode fast = head;
        ListNode slow = head;
        while(fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if(slow == fast) return true;
        }
        return false;
    }
}
```
:::


::: code-group-item Python
```python
class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        fast = slow = head
        while fast and fast.next:
            fast = fast.next.next
            slow = slow.next
            if fast == slow:
                return True
        return False
```
:::
::::

- 字典法

```java
class Solution {
    public boolean hasCycle(ListNode head) {
        HashSet<ListNode> set = new HashSet<>();
        while(head != null) {
            if(set.contains(head)) return true;
            set.add(head);
            head = head.next;
        }
        return false;
    }
}
```

## 环形链表 II

[LC 141. 环形链表 II](https://leetcode-cn.com/problems/linked-list-cycle-ii/)

### 题目描述

```
使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环
不允许修改 链表。
```

```
输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
```

### 题解
- 环形链表二 (字典)

:::: code-group
::: code-group-item Python

```python
class Solution:
    def detectCycle(self, head: ListNode) -> ListNode:
        if not head: return None
        dict = {}
        while head:
            if head in dict: return dict[head]
            dict[head] = head
            head = head.next
        return None
```

:::

::: code-group-item Java

```java
class Solution {
    public ListNode detectCycle(ListNode head) {
        HashSet<ListNode> set = new HashSet<>();
        while(head != null) {
            if(set.contains(head)) return head;
            set.add(head);
            head = head.next;
        }
        return head;
    }
}
```

:::
::::
