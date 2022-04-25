# function main() {
    if [ ${#} -ge 1 ]
    then
        case ${1} in
            "start")
                echo "Running"
            ;;
            "stop")
                echo "Close"
            ;;
            *)
                echo "${1}无任何操作"
            ;;
        esac
    else
        echo "
        command如下命令:
        start: 启动
        stop: 停止进程
        示例命令如：sh ./start.sh stop
        "
    fi
# }

# main