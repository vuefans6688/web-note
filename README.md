# 一、检查之前有没有已经生成密钥 cd ~/.ssh 或者 ls -al ~/.ssh

1.检测下自己之前有没有配置：
git config user.name git config user.email(直接分别输入这两个命令)

2.如果之前没有创建，则执行以下命令：
git config –global user.name 'xxxxx'
git config –global user.email 'xxx@xx.xxx'

3.代码参数含义：
-t 指定密钥类型，默认是 rsa ，可以省略
-C 设置注释文字，比如邮箱
-f 指定密钥文件存储文件名

4.在.ssh 目录下(C 盘用户文件夹下)得到了两个文件：id_rsa(私有秘钥)和 id_rsa.pub(公有密钥)

5.如果想登陆远端，则需要将 rsa.pub 里的秘钥添加到远端
使用记事本等软件打开 id_rsa.pub 文件，将里面的内容复制，粘贴到 github 的 New SSH key
或者去.ssh 目录下找到 id_rsa.pub 这个文件夹打开复制全部内容

6.接着：
(1).登录 GitHub，进入你的 Settings
(2).会看到左边这些目录，点击 SSH and GPG keys
(3).创建 New SSH key
(4).粘贴你的密钥到你 key 输入框中
(5).点击 Add SSH key
(6).再弹出窗口，输入你的 GitHub 密码，点击确认按钮
(7).到此，就大功告成了

# 二、创建并生成密钥 ssh-keygen -t rsa -C 'xxx@xx.xxx'(配置的邮箱)

# 三、查看密钥生成的目录 git init

# 四、将共有密钥添加到 github SSH keys

# 五、验证是否连接成功 ssh -T git@github.com(git bash 命令窗口)

创建项目

# 在当前目录新建一个 Git 代码库 \$ git init

# 新建一个目录，将其初始化为 Git 代码库 \$ git init [project-name]

# 下载一个项目和它的整个代码历史 \$ git clone [url]

配置 Git 的设置文件为.gitconfig，它可以在用户主目录下(全局配置)，也 可以在项目目录下(项目配置)

# 显示当前的 Git 配置

\$ git config --list

# 编辑 Git 配置文件

\$ git config -e [--global]

# 设置提交代码时的用户信息

$ git config [--global] user.name "[name]"
$ git config [--global] user.email "[email address]"

增加删除文件

# 添加指定文件到暂存区

\$ git add [file1][file2] ...

# 添加指定目录到暂存区，包括子目录 \$ git add [dir]

# 添加当前目录的所有文件到暂存区 \$ git add .

# 添加每个变化前，都会要求确认

# 对于同一个文件的多处变化，可以实现分次提交 \$ git add -p

# 删除工作区文件，并且将这次删除放入暂存区 \$ git rm [file1][file2] ...

# 停止追踪指定⽂文件，但该⽂文件会保留留在工作区 \$ git rm --cached [file]

# 改名文件，并且将这个改名放入暂存区

\$ git mv [file-original][file-renamed]

代码提交

# 提交暂存区到仓库区

\$ git commit -m [message]

# 提交暂存区的指定文件到仓库区

\$ git commit [file1][file2] ... -m [message]

# 提交工作区自上次 commit 之后的变化，直接到仓库区 \$ git commit -a

# 提交时显示所有 diff 信息 \$ git commit -v

# 使用一次新的 commit，替代上一次提交

# 如果代码没有任何新变化，则用来改写上一次 commit 的提交信息 \$ git commit --amend -m [message]

# 重做上一次 commit，并包括指定文件的新变化

\$ git commit --amend [file1][file2] ...

分支

# 列列出所有本地分支 \$ git branch

# 列列出所有远程分支 \$ git branch -r

# 列列出所有本地分支和远程分支 \$ git branch -a

# 新建一个分支，但依然停留留在当前分支 \$ git branch [branch-name]

# 新建一个分支，并切换到该分支 \$ git checkout -b [branch]

# 新建一个分支，指向指定 commit

\$ git branch [branch][commit]

# 新建一个分支，与指定的远程分支建立追踪关系

\$ git branch --track [branch][remote-branch]

# 切换到指定分支，并更更新工作区

\$ git checkout [branch-name]

# 切换到上一个分支 \$ git checkout -

# 建立追踪关系，在现有分支与指定的远程分支之间

\$ git branch --set-upstream [branch][remote-branch]

# 合并指定分⽀支到当前分支 \$ git merge [branch]

# 选择一个 commit，合并进当前分支 \$ git cherry-pick [commit]

# 删除分支

\$ git branch -d [branch-name]

# 删除远程分支

$ git push origin --delete [branch-name] $ git branch -dr [remote/branch]

标签

# 列列出所有 tag \$ git tag

# 新建一个 tag 在当前 commit \$ git tag [tag]

# 新建一个 tag 在指定 commit \$ git tag [tag][commit]

# 删除本地 tag

\$ git tag -d [tag]

# 删除远程 tag

\$ git push origin :refs/tags/[tagName]

# 查看 tag 信息

\$ git show [tag]

# 提交指定 tag

\$ git push [remote][tag]

# 提交所有 tag

\$ git push [remote] --tags

# 新建⼀一个分支，指向某个 tag

\$ git checkout -b [branch][tag]

查看信息

# 显示有变更更的文件 \$ git status

# 显示当前分支的版本历史 \$ git log

# 显示 commit 历史，以及每次 commit 发生变更更的文件 \$ git log --stat

# 搜索提交历史，根据关键词 \$ git log -S [keyword]

# 显示某个 commit 之后的所有变动，每个 commit 占据一行 \$ git log [tag] HEAD --pretty=format:%s

# 显示某个 commit 之后的所有变动，其"提交说明"必须符合搜索条件 \$ git log [tag] HEAD --grep feature

# 显示某个文件的版本历史，包括文件改名 \$ git log --follow [file]

\$ git whatchanged [file]

# 显示指定文件相关的每一次 diff \$ git log -p [file]

# 显示过去 5 次提交

\$ git log -5 --pretty --oneline

# 显示所有提交过的用户，按提交次数排序 \$ git shortlog -sn

# 显示指定文件是什什么⼈人在什什么时间修改过 \$ git blame [file]

# 显示暂存区和工作区的差异 \$ git diff

# 显示暂存区和上一个 commit 的差异 \$ git diff --cached [file]

# 显示⼯工作区与当前分支最新 commit 之间的差异 \$ git diff HEAD

# 显示两次提交之间的差异

\$ git diff [first-branch]...[second-branch]

# 显示今天你写了了多少行行代码

\$ git diff --shortstat "@{0 day ago}"

# 显示某次提交的元数据和内容变化 \$ git show [commit]

# 显示某次提交发生变化的文件

\$ git show --name-only [commit]

# 显示某次提交时，某个文件的内容

\$ git show [commit]:[filename]

# 显示当前分支的最近几次提交 \$ git reflog

远程同步

# 下载远程仓库的所有变动 \$ git fetch [remote]

# 显示所有远程仓库 \$ git remote -v

# 显示某个远程仓库的信息

\$ git remote show [remote]

# 增加一个新的远程仓库，并命名

\$ git remote add [shortname][url]

# 取回远程仓库的变化，并与本地分支合并 \$ git pull [remote][branch]

# 上传本地指定分支到远程仓库

\$ git push [remote][branch]

# 强⾏行行推送当前分支到远程仓库，即使有冲突 \$ git push [remote] --force

# 推送所有分支到远程仓库

\$ git push [remote] --all

撤销

# 恢复暂存区的指定文件到工作区 \$ git checkout [file]

# 恢复某个 commit 的指定文件到暂存区和工作区 \$ git checkout [commit][file]

# 恢复暂存区的所有文件到⼯工作区 \$ git checkout .

# 重置暂存区的指定文件，与上一次 commit 保持一致，但工作区不不变 \$ git reset [file]

# 重置暂存区与工作区，与上一次 commit 保持一致 \$ git reset --hard

# 重置当前分支的指针为指定 commit，同时重置暂存区，但工作区不不变 \$ git reset [commit]

# 重置当前分支的 HEAD 为指定 commit，同时重置暂存区和工作区，与指定 commit 一致 \$ git reset --hard [commit]

# 重置当前 HEAD 为指定 commit，但保持暂存区和工作区不不变 \$ git reset --keep [commit]

# 新建一个 commit，用来撤销指定 commit

# 后者的所有变化都将被前者抵消，并且应用到当前分⽀支 \$ git revert [commit]

# 暂时将未提交的变化移除，稍后再移入 \$ git stash

\$ git stash pop
