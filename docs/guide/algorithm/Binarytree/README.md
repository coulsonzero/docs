# 二叉树

数据结构
```java
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
```

* 遍历
:::: code-group
::: code-group-item 前序遍历
```java{10}
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