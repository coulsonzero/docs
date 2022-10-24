# Docker

> 在容器技术之前，业界的网红是虚拟机。虚拟机技术的代表，是 VMWare 和 OpenStack
>
> Docker 这样的容器技术，也是虚拟化技术，属于轻量级的虚拟化
>
> 虚拟机虽然可以隔离出很多“子电脑”，但占用空间更大，启动更慢，虚拟机软件可能还要花钱（例如 VMWare）
>
> 而容器技术恰好没有这些缺点。它不需要虚拟出整个操作系统，只需要虚拟一个小规模的环境（类似“沙箱”)
>
> 它启动时间很快，几秒钟就能完成。而且，它对资源的利用率很高（一台主机可以同时运行几千个 Docker 容器
>
> 此外，它占的空间很小，虚拟机一般要几 GB 到几十 GB 的空间，而容器只需要 MB 级甚至 KB 级。
>
> Docker本身并不是容器，它是创建容器的工具，是应用容器引擎
>
> “Build, Ship and Run”: “搭建、发送、运行”, “Build once，Run anywhere（搭建一次，到处能用）”。
>
> Docker镜像，是一个特殊的文件系统。它除了提供容器运行时所需的程序、库、资源、配置等文件外，还包含了一些为运行时准备的一些配置参数（例如环境变量）。镜像不包含任何动态数据，其内容在构建之后也不会被改变
>
> 负责对Docker镜像进行管理的，是Docker Registry服务（类似仓库管理员), 最常使用的Registry公开服务，是官方的Docker Hub，这也是默认的 Registry，并拥有大量的高质量的官方镜像

| 虚拟机                  | 容器                          |
| ----------------------- | ----------------------------- |
| VMWare, OpenStack       | Docker                        |
| 需要虚拟出整个操作系统, | 只需虚拟出小沙盒环境          |
| 占用空间更大(GB 级)     | 占用空间很小(MB 级甚至 KB 级) |
| 部分产品需付费          | 免费                          |
| 启动更慢                | 启动时间很快(几秒钟就能完成)  |


Docker技术的三大核心概念，分别是：
镜像（Image）
容器（Container）
仓库（Repository）


## 部署方式

- 物理机：直接在物理机上部署，机器资源分配不好控制，出现bug时可能机器的大部分资源被某个应用占用，导致其他应用无法运行，无法做到应用隔离
- 虚拟机：在单个物理机上运行多个虚拟机，每个虚拟机都是完整独立的系统，性能损耗大
- 容器：所有容器共享主机的系统，轻量级的虚拟机，性能损耗小，资源隔离，cpu和内存可按需分配


## docker 命令

```sh
$ docker --version
# 查看镜像
$ docker images
# 查看docker运行的镜像容器
$ docker ps -a

# 建立docker镜像 (-f: 指定docker运行文件)
$ docker build -f Dockerfile -t go-docker:v1 .
# 运行docker镜像容器 (-d: 后台运行, --rm: 关闭容器后自动删除容器, --name: 重命名)
$ docker run --rm -d -p 8080:8080 --name go-docker go-docker:v1


# docker 拉取 mysql 镜像环境
$ docker pull  mysql:8.0.23
# docker 启动 mysql 服务
$ docker start mysql
# docker 停止 mysql 服务
$ docker stop  mysql
```

## Docker 部署 Golang Web后端项目

```dockerfile
# Dockerfile

FROM golang:1.18-alpine

# 作者署名
MAINTAINER CoulsonZero

# golang 环境变量
ENV GO111MODULE="on" \
    GOPROXY="https://goproxy.cn,direct" \
    CGO_ENABLED="0" \
    GOOS="linux" \
    GOARCH="amd64"

# 切换到当前工作目录
WORKDIR /project/go-docker

# Copy go.mod go.sum and 下载golang环境依赖
COPY go.* ./
RUN go mod download

# Copy 当前工作目录下的所有文件到docker目录中
COPY . .
RUN go build -o /project/go-docker/v1 .

EXPOSE 8080

# 声明docker目录
ENTRYPOINT ["/project/go-docker/v1"]
```


```sh
$ cd <project-name>
# 打包go项目
$ go build .

# 打包docker程序
$ docker build -t go-docker:v1 .
$ docker build -f Dockerfile -t go-docker:latest .

# 运行docker程序
$ docker run -d -p 8080:8080 go-docker:v1
$ docker run -d -p 9000:8080 go-docker:latest

$ docker --version
# 查看docker打包程序
$ docker images
# 查看docker进程
$ docker ps -a
```


## docker 部署 mysql 服务

> 需新建数据库！

```sh
# docker 拉取 mysql 镜像环境
$ docker pull  mysql:8.0.23
# docker 启动 mysql 服务
$ docker start mysql
# docker 停止 mysql 服务
$ docker stop  mysql
```

```sh
# 查看镜像
$ docker images
# docker 运行 mysql 镜像环境
$ docker run -d -p 9306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=root mysql:8.0.23
# 查看镜像运行程序
$ docker ps -a
# docker 执行 mysql 操作
$ docker exec -it mysql mysql -u root -p
Enter password:
mysql>
```

## docker 测试 nginx 简单页面

```sh
$ docker run -it --rm -p 3000:80 nginx:alpine
```
[https://localhost:3000/](https://localhost:3000/)


## docker 使用 node 部署 前端项目

Step1. 新建Dockerfile文件
```dockerfile
FROM node:14-alpine

WORKDIR /code
ADD . /code

RUN yarn
EXPOSE 3000
CMD npm start
```

Step2. 终端
```sh
$ docker build -f Dockerfile -t react-docker:v1 .
# --name: 重命名, --rm: 停止服务则自动删除镜像容器
$ docker run -d -p 80:3000 --name react-docker react-docker:v1
# $ docker run --rm -d -p 80:3000 --name react-docker react-docker:v1
```


### 使用nginx部署 前端(vue、react) 项目

```yaml
version: "3"
services:
  nginx-app:
    build:
      context: .
      dockerfile: ./Docker/nginx.Dockerfile
    ports:
      - 3700:80
```

```Dockerfile
FROM nginx:alpine

ADD ./dist /usr/share/nginx/html/
```