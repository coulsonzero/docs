# [gRPC](https://grpc.io/docs)


gRPC: Remote Procedure Calls
远程程序调用

gRPC is a modern, open source remote procedure call (RPC) framework that can run anywhere. It enables client and server applications to communicate transparently, and makes it easier to build connected systems.
gRPC是一个现代的、开源的远程过程调用（RPC）框架，可以在任何地方运行。它使客户端和服务器应用程序能够透明地进行通信，并使构建连接系统变得更加容易。

gRPC is based around the idea of defining a service, specifying the methods that can be called remotely with their parameters and return types. By default, gRPC uses protocol buffers as the Interface Definition Language (IDL) for describing both the service interface and the structure of the payload messages


### 安装protobuf

```bash
# 安装protobuf
$ brew install protobuf
# 检查protobuf是否安装成功
$ protoc --version

$ go get -u github.com/golang/protobuf/proto
$ go get -u github.com/golang/protobuf/protoc-gen-go
```

### 安装gRPC

```bashm
$ go get -u google.golang.org/grpc
```