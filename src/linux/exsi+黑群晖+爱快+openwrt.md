---
author: xlc520
title: exsi+黑群晖+爱快+openwrt
description: 
date: 2022-10-01
category: Linux
tag: Linux
article: true
timeline: true
icon: linux
password: 
---

# exsi+黑群晖+爱快+openwrt

### 一. 硬件选型:

cpu: 选择了4款CPU

E3-1235LV5 :功耗低,也是许多玩家首选,价格在500左右,但是需要搭配的主板有C232 C236,C232需要配独显,C236价格太高不合适,所有放弃

E4-1240LV5: 不带独显,需要额外配置显卡,对应功耗增加,如果用亮机卡,开机再拔掉,可能无法启动.

I5-8600T : 价格在800左右,带独显.

I5-10600T : 最终选定这款,带独显,功耗相比增加了10W,6核12进程, 主频相比其他3款要高出一些.价格咸鱼上淘到1050

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094cfa576dbc2640.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_2/)

整机配置:

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094d5a8a8f076587.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_3/)

因为要组NAS 所有对应需要安装多块硬盘. 所以机箱选择上不能太小,太大又不好放.找了很久,MATX机箱里面仅有支持3块HDD硬盘.

### 注: 如果想要硬盘直通给nas使用,建议选择一块m2接口[固态硬盘](https://www.smzdm.com/fenlei/gutaiyingpan/)作为系统盘

### 二、exsi安装

Esxi 6.7 iso文件下载地址

[链接](https://pan.baidu.com/s/1o4Df7cHtXHzV_YRztZ6HaQ): 提取码: 9nz6

步骤

1.下载Esxi系统文件。

2.下载安装UltraISO程序，网上有很多，我就不贴链接了。

3.准备一个usb，最好是没什么资料的，因为制作u盘系统会将你的u盘格式化，当然你也可以备份数据，等到安装完成后再进行恢复。

\4. 首先我们先制作U盘安装系统,启动UltraISO软件，打开你下载的文件

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094d801e39e3340.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_4/)

打开后插入u盘，选中打开的文件点击启动写入硬盘映射，如图示：

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094d862a0f1b3148.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_5/)

打开后插入u盘，选中打开的文件点击启动写入硬盘映射，如图示：

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094d8a5eb5eb1418.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_6/)

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094d8bbb1b6a7828.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_7/)

选择完以后 点击写入，等待读条完成，u盘安装系统就制作完成了。

\5. 在VMware没启动前将u盘插入，启动后按F11进入到系统安装界面，Enter选择下载的系统安装

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094d8dfef40b5927.jpg_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_8/)

开始加载引导盘

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094d91dcc8ce7608.jpg_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_9/)

加载系统信息，验证硬件驱动

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094d92eb346f1607.jpg_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_10/)

**注:这里有个坑B460的网卡驱动exsi不支持,找了好久也没将驱动打上**

输入Enter，开始安装Esxi 6.7进程

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094d964470bf7547.jpg_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_11/)

F11接受

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094d98fa5b8e9106.jpg_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_12/)

选择对应的Esxi 6.7安装位置

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094d9d2bca918244.jpg_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_13/)

设置键盘默认布局（如果你之前安装过此系统，可能会跳过此选项和设置密码选项，沿用你之前系统的设置）

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094d9e31d7736283.jpg_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_14/)

设置密码（也就是之后你的登录密码，6.7之后对密码的设置要求挺高，具体要求自行百度）

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094d9f584665649.jpg_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_15/)

F11开始安装Esxi 6.7

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094da05b0cda8409.jpg_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_16/)

安装完成！点按Enter重启

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094d9c3ca9b75656.jpg_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_17/)

重启后出现如下画面就说明安装成功啦，至此整个Esxi系统的安装就结束

网卡直通:

要保留一个网口作为虚拟网卡 不然到时虚拟机会进不去

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094dd2c11ccd4511.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_18/)

### 三、爱快安装

[下载链接](https://www.ikuai8.com/component/download):

1、打开虚拟机管理web界面，点击“创建/注册虚拟机”，选择“创建新虚拟机”，点击“下一页”

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094db716b1782729.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_19/)

2、名称填写iKuai（自己取名，最好全英文），兼容性默认即可，客户机操作系统系列选择Linux（爱快系统是基于Linux开发的），客户机操作系统版本选择“其他3.X 或 更高版本的 Linux（64位）”，点击“下一页”

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094db7160fe98508.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_20/)

3、选择安装磁盘，点击“下一页”

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094db716dec5714.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_21/)

4、点击“添加网络适配器”，选择网络适配器，点击“下一页”

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094db71db4c26193.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_22/)

5、然后点击“完成”。

6、选择刚才创建的虚拟机，右击菜单“编辑设置”，修改内存为2GB（爱快32位最小内存512M，64位最小内存2GB）

点击“添加其他设备”，添加CD/DVD驱动器，选择“数据存储ISO文件”，然后选择刚才上传的爱快ISO安装包

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094db7172eb86193.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_23/)

8、打开刚才创建的虚拟机的电源，会自动启动到爱快安装界面

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094db72a39d8581.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_24/)

9、输入1后回车，提示是否安装，然后按Y回车，把爱快安装到硬盘。

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094db72c0f3d6891.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_25/)

10、安装完会自动重启系统，爱快控制台。

爱快默认把虚拟机中添加的第一个网卡设置为lan1，其他的网口不做设置，可以通过爱快web界面绑定端口

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094db72d91195286.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_26/)

### 四:安装[群晖](https://pinpai.smzdm.com/2315/)

详见此[链接](https://post.smzdm.com/p/a830loeq/):

### 五:安装openwrt 

[链接](https://pan.baidu.com/share/init?surl=t-0JjThnq0JMtfubfnL03w): 密码: vwrk

openwrt镜像 [链接](https://www.right.com.cn/forum/): 自行找合适自己的版本

1、首先要自行准备OpenWrt的镜像文件，一般是gz结尾的压缩包，至于解压里面哪个镜像，就看你Esxi虚拟机内的引导设置是BIOS还是EFI，根据实际情况选择对应镜像解压。（建议使用BIOS启动）

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094de3fcc2b97616.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_27/)

2、最终得到IMG实际镜像文件

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094de3fe6c184739.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_28/)

3、因为要用到Esxi内，所以IMG镜像还要转换成 虚拟化硬盘文件，用于转换的工具是"StarWind V2V Converter"

3.1、打开软件之后选择如图，下一步

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094de3ff018a6237.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_29/)

3.2、选择之前解压出的IMG镜像文件

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094de40128122048.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_30/)

3.3、选择目标镜像格式，这里选择 ESX server image

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094de402a06d2320.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_31/)3.4、下一步

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094de4086e527025.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_32/)3.5、选择保持位置，这里默认

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094de40874a61997.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_33/)3.6、转换完成

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094de40a76c37721.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_34/)4、得到以下两个文件

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094de40d353e5678.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_35/)二、Esxi内创建虚拟机

1、登录ESXI新建虚拟机，名称可任意填写，客户机操作系统选择“Linux”，客户机操作系统版本选择“其他4.x或更高版本的Linux（64位）”。

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094de41613ba4702.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_36/)

2、将系统默认生成的硬盘删除，CD/DVD也用不到可以删除，修改USB类型

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094de411ea8f8367.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_37/)

3、该软路由只有2个网口，其中一个网口我开启了直通，因此在这里还需要对内存启用"预留所有客户机内存"

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094de412c1375138.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_38/)

4、然后添加已经直通的网卡，添加新设备——选择”PCI设备“，就能自动跳出直通的网卡

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094de413915a2585.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_39/)

5、 在”虚拟机选项“内，将引导改为"BIOS"

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094de4252d299357.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_40/)

6、右击刚才新建的虚拟机，选择编辑虚拟机设置，添加硬盘——选择”现有硬盘“

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094de426096e1658.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_41/)

7、点击ESXI左侧的存储，找到虚拟机的目录，在该目录内上传之前转换好的2个VMDK文件，上传后会识别为一个文件。再选中确认。（需要全部上传，否则将无法完全构建镜像。）

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094de4277a1f6263.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_42/)

8、保存虚拟机设置，开启虚拟机电源。

9、修改OpenWRT & LEDE IP地址

1,打开虚拟机的web控制台

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094de41d7deb9756.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_43/)

2、用以下命令修改网络配置文件

vi /etc/config/network

3、修改自定义的IP和掩码信息即可，记得 :wq保存

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094de42491573253.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_44/)

4、reboot重启生效

### 六: exsi 硬盘直通

1.进入ESXI6.7 web管理后台。开启SSH

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094e0c26b33a5419.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_45/)

2.点击存储，选择默认存储(ESXI安装硬盘)。复制位置地址备用；

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094e1148bb781788.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_46/)3.打开SSH工具，登录SSH。登录以后执行以下命令。

执行命令1：

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094e1347fd4d4412.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_47/)

cd /vmfs/volumes/5fb14c74-5da1723a-c6a0-00e15a680bd8

/vmfs/volumes/5fb14c74-5da1723a-c6a0-00e15a680bd8 （是第二步复制备用的路径）

执行命令2：

mkdir DMS.store

(这个命令是在默认存储空间根目录下创建一个用来存放直通镜像文件.vmdk的[文件夹](https://www.smzdm.com/fenlei/wenjianjia/))

4.复制准备直通的硬盘标识符 t10.ATA_____ST500LT0122D9WS142___________________________________S0V2PJJG

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094e1650fde23708.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_48/)

执行如下命令：

vmkfstools -z /vmfs/devices/disks/t10.ATA_____ST500LT0122D9WS142___________________________________S0V2PJJG /vmfs/volumes/5fb14c74-5da1723a-c6a0-00e15a680bd8/DMS.store/500g.vmdk

5.如果都正确执行的话，是不会弹出错误以及其他提示的。然后回到虚拟机设置，添加硬盘》添加现有硬盘》选择之前创建的直通磁盘vmdk文件。

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094e18978e182254.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_49/)

6.设置相关参数，控制器选择STAT控制器，点击保存，

[![ 我的all in one 主机 exsi+黑群晖+爱快+openwrt](http://122.9.159.116:5244/d/ecloud180/images/blogImage/6094e1bf332597834.png_e1080.jpg)](https://post.smzdm.com/p/a7dkv869/pic_50/)

7.启动虚拟机，至此。直通硬盘给群晖虚拟机完成。

### 七.设置定时exsi重启

1、主板bios设置定时启动,具体可以百度下.

2、首先是关机的问题[服务器](https://www.smzdm.com/fenlei/fuwuqi/)系统不存在计划性关机的功能，只能通过脚本实现。

在esxi中不支持cron命令，只能直接编辑cron文件，文件文件的路径是：
/var/spool/crontab/root
真接修改这个root文件意义并不大，因为一旦ESXi重启，这个文件会被重置。此时需要修改/etc/rc.local.d./local.sh，在exit 0这一行之前添加如下的脚本：

> /bin/kill $(cat /var/run/crond.pid)
>
> /bin/echo '30 2 * * 2,5 /vmfs/volumes/datastore1/poweroff.sh' >> /var/spool/cron/crontabs/root ##执行的时间注意是UTC时间需换算
>
> /usr/lib/vmware/busybox/bin/busybox crond
>
> exit 0

注意注意注意
修改完/etc/rc.local.d./local.sh文件后，工作没有结束，需要执行一次/sbin/auto-backup.sh，将修改后的local.sh文件保存，否则结果将和之前的root文件一样，重启后丢失。

\2. 接下来是关机脚本的内容

> \#!/bin/sh
>
> /sbin/poweroff

在NAS中自己定义的了一个计划性关机，时间早于exsi关机时间之前.免得关机造成nas非正常关机,丢失数据