# Kubernetes


## 1. kubectl

### 1.1 安装kubectl (MacOS系统)

```shell
# 方式一：使用curl安装
$ curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/darwin/arm64/kubectl"

# 方式二：使用Homebrew安装
$ brew install kubectl
```


### 1.2 查看安装版本

```shell
$ kubectl version --client
```

## minikube

### 1. 安装minikube (MacOS系统)

[安装minikube](https://minikube.sigs.k8s.io/docs/start/)

```shell
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-arm64
sudo install minikube-darwin-arm64 /usr/local/bin/minikube

# brew install minikube
```

### Api

```shell
$ minikube start
$ minikube stop
$ minikube dashboard
```


