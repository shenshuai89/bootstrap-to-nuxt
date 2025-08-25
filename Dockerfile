# 第一阶段 build
# FROM node:20.9.0 AS build-stage

# 创建工作目录
# RUN mkdir -p /app
# WORKDIR /app

# 复制项目文件和目录到容器中
# COPY . /app

# 安装依赖项并构建应用程序
# RUN npm install --registry https://registry.npmmirror.com && \
#     npm run build && \
#     npm cache clean --force

# 清理node_modules目录
# RUN rm -rf ./node_modules

# 第二阶段
FROM node:22.12.0 AS runtime-stage

# 创建工作目录
RUN mkdir -p /app
WORKDIR /app

# 复制构建阶段生成的输出到运行时阶段
COPY ./.output /app/.output
COPY ./package.json /app/

# 设置环境变量
ENV NITRO_PORT=8097

# 暴露端口
EXPOSE 8097

# 设置入口点为启动脚本
ENTRYPOINT ["npm", "run", "start"]

# 最后在命令行执行 创建镜像命令
# docker build -t blacksnow:lastest .