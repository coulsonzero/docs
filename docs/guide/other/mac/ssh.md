# Mac配置ssh免密登陆github

## 1. 生成ssh密钥

```sh
$ ssh-keygen -t ed25519 -C "your_email@example.com"

> Enter a file in which to save the key (/Users/you/.ssh/id_algorithm): [Press enter]
> Enter a file in which to save the key (/c/Users/you/.ssh/id_algorithm):[Press enter]
> Enter a file in which to save the key (/home/you/.ssh/algorithm): [Press enter]
```

## 2. Adding a new SSH key

```sh
$ cat ~/.ssh/id_ed25519.pub
```

:::tip
复制Setting-SSH and GPG Keys -Add new SSH Key-粘贴保存即可
:::

## 3. Testing your SSH connection

```sh
ssh -T git@github.com
> Hi coulsonzero! You've successfully authenticated, but GitHub does not provide shell access.
```

## 4. Git clone

```sh
git clone git@github.com:coulsonzero/webProjects.git
$ git clone -b v2.0.1 git@github.com:coulsonzero/webProjects.git webProjects-v2.0.1
```