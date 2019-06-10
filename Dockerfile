#导入nginx镜像
FROM registry.cn-shenzhen.aliyuncs.com/pdata/nginx:latest
#把当前打包工程的html复制到虚拟地址
ADD ./dist /usr/share/nginx/html
#使用自定义nginx.conf配置端口和监听
COPY nginx.config /etc/nginx/nginx.conf
