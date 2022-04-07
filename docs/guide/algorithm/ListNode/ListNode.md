# 链表

## ListNode
:::: code-group
::: code-group-item Java
```java
class ListNode {
    int val;
    ListNode next;
    ListNode() {};
    ListNode(int val) {
        this.val = val;
    }
    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}
```
:::
::: code-group-item Python
```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
```
:::
::::