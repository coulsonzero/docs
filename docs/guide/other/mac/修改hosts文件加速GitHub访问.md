# 修改hosts文件加速GitHub访问


[ipaddress.com](https://www.ipaddress.com)

## 查询域名对应的IP
可以在ipaddress上查询域名对应的IP。需要查询的域名有github.com,assets-cdn.github.com,github.global.ssl.fastly.net，查询结果依次如下
```bash
140.82.114.3       github.com
185.199.108.153    assets-cdn.github.com
199.232.69.194     github.global.ssl.fastly.net
```

## macOS 修改 Hosts 文件

- 打开终端，使用 vim 修改 Hosts 文件
```bash
sudo vim /etc/hosts
```

- 刷新网络 DNS 缓存：
```bash
sudo killall -HUP mDNSResponder
```

## Windows 修改 Hosts 文件

- 打开 cmd，使用 vim 修改 Hosts 文件：

```bash
sudo vim C:\Windows\System32\drivers\etc\hosts
```

- 刷新网络 DNS 缓存

```bash
ipconfig /flushdns
```

Windows 不自带sudo与vim，可以通过 Scoop 安装：scoop install sudo vim