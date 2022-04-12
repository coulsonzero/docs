# 二叉树

**Java**
:::: code-group
::: code-group-item 前序遍历
```java{10}
/*
public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {};
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
*/

class Solution {
    private List<Integer> list;
    private void preOrder(TreeNode root) {
        if (root == null) return;
        list.add(root.val);
        preOrder(root.left);
        preOrder(root.right);
    }
    public List<Integer> preorderTraversal(TreeNode root) {
        list = new ArrayList<>();
        preOrder(root);
        return list;
    }
}
```
:::

::: code-group-item 中序遍历
```java{11}
class Solution {
    private List<Integer> list;
    public void inOrder(TreeNode root) {
        if(root == null) return;
        inOrder(root.left);
        list.add(root.val);
        inOrder(root.right);
    }
    public List<Integer> inorderTraversal(TreeNode root) {
        list = new ArrayList<>();
        inOrder(root);
        return list;
    }
}
```
:::

::: code-group-item 后序遍历
```java{12}
class Solution {
    private List<Integer> list;
    public void postOrder(TreeNode root) {
        if(root == null) return;
        postOrder(root.left);
        postOrder(root.right);
        list.add(root.val);
    }
    public List<Integer> postorderTraversal(TreeNode root) {
        list = new ArrayList<>();
        postOrder(root);
        return list;
    }
}

```
:::

::: code-group-item 层序遍历
```java{2}
class Solution {
    private List<List<Integer>> leaveList = new ArrayList<>();
    public List<List<Integer>> levelOrderTraversal(TreeNode root) {
        dns(root, 0);
        return leaveList;
    }
    public void dns(TreeNode node, int lever){
        if(node == null) return;
        if(leaveList.size() == lever) leaveList.add(new ArrayList<Integer>());
        leaveList.get(lever).add(node.val);
        dns(node.left, lever+1);
        dns(node.right, lever+1);
    }
}
```
:::
::::

**Python3**

:::: code-group
::: code-group-item 前序遍历

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def preorderTraversal(self, root: TreeNode) -> List[int]:
        def preorder(root):
            if root == None: return
            a.append(root.val)
            preorder(root.left)
            preorder(root.right)
        a = []
        preorder(root)
        return a
```

:::


::: code-group-item 中序遍历
```python
class Solution:
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        def inOrder(root: TreeNode):
            if not root: return
            inOrder(root.left)
            inOrder(root.right)
            a.append(root.val)
        a = list()
        inOrder(root)
        return a
```
:::

::: code-group-item 后序遍历
```python
class Solution:
    def postorderTraversal(self, root: TreeNode) -> List[int]:
        def postorder(root: TreeNode):
            if not root: return
            postorder(root.left)
            postorder(root.right)
            a.append(root.val)
        a = list()
        postorder(root)
        return a
```
:::

::: code-group-item 层序遍历

```python
class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if not root: return []
        queue = [root]
        res = []
        while queue:
            res.append([node.val for node in queue])
            ll = []
            for node in queue:
                if node.left: ll.append(node.left)
                if node.right: ll.append(node.right)
            queue = ll
        return res
```
:::

::::