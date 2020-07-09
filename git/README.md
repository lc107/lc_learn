# GIT学习
### 设置全局账号：
1、查看git配置信息 git config --list

2、查看git用户名 git config user.name

3、查看邮箱配置 git config user.email

4、全局配置用户名 git config --global user.name "nameVal"

5、全局配置邮箱 git config --global user.email "eamil@qq.com"

### 设置局部账号：
1、进入仓库

2、全局配置用户名 git config  user.name "nameVal"

3、全局配置邮箱 git config  user.email "eamil@qq.com"

4、查看git配置信息 git config --list


### 查看当前电脑下存在的git账户
C:\Users\当前用户\.gitconfig

命令行查看

~/.gitconfig

### 初始化 在工作路径上创建主分支
git init 

### 克隆远程仓库
git clone 地址 

### 拉取代码
git pull

### 克隆分支的代码到本地
git clone -b 分支名 地址 

### 查看状态
git status 

### 查看日志
git log

### 查看不同
git diff

### 将某个文件存入暂存区
git add 文件名 

### 把b和c存入暂存区
git add b c 

### 将所有文件提交到暂存区
git add . 

### 一个文件分多次提交
git add -p 文件名

### 提交到仓库
git commit -m "提交的备注信息"  

### 推送
git push

### 一般提交顺序
commit -> pull -> push

------

### **分支**
.....................

### 导入现有文件加到远程仓库
git init （如果为第一次，就输入该命令初始化目录，否则可直接跳过）

git add 目录名称（添加需要提交的目录名称）

git commit -m "备注说明"（提交至本地仓库，并简单说明）

git remote add origin https://github.com/lc107/lc_learn.git (如果为第一次使用需要重定向提交的路径)

git push -u origin master（提交至远程仓库）
