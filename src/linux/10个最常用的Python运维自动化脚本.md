---
author: xlc520
title: 10个最常用的Python运维自动化脚本
description: 
date: 2023-03-30
category: Linux
tag: 
- Linux
- Python
article: true
timeline: true
icon: linux
---

# 10个最常用的Python运维自动化脚本

**1、自动备份脚本：**备份指定目录或文件并定期执行自动备份。

```python
import shutil
import os
import datetime
 
source = '/home/user/dir/'
backup = '/home/user/backup/'
 
now = datetime.datetime.now()
name = 'backup_' + now.strftime('%Y-%m-%d_%H-%M-%S') + '.zip'
 
shutil.make_archive(os.path.join(backup, name), 'zip', source)
```

**2、监控系统性能脚本：**监控CPU，内存，磁盘使用率等系统性能指标并发送邮件报警。

```python

import psutil
import smtplib
from email.mime.text import MIMEText
 
def send_mail(body):
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login('youremail@gmail.com', 'password')
    message = MIMEText(body)
    message['Subject'] = 'System Performance Alert'
    message['From'] = 'youremail@gmail.com'
    message['To'] = 'admin@example.com'
    server.sendmail('youremail@gmail.com', ['admin@example.com'], message.as_string())
    server.quit()
 
while True:
    cpu_percent = psutil.cpu_percent()
    memory_percent = psutil.virtual_memory().percent
    disk_percent = psutil.disk_usage('/').percent
 
    if cpu_percent > 80 or memory_percent > 80 or disk_percent > 80:
        body = f'CPU: {cpu_percent}%\nMemory: {memory_percent}%\nDisk: {disk_percent}%'
        send_mail(body)

```

**3、自动部署脚本：**从代码仓库中获取最新的代码并自动部署到服务器。

```python
import subprocess
 
subprocess.check_output(['git', 'pull', 'origin', 'main'])
subprocess.check_output(['npm', 'install'])
subprocess.check_output(['npm', 'run', 'build'])
subprocess.check_output(['systemctl', 'restart', 'myapp'])
```

**4、监控日志文件脚本：**监控指定的日志文件并在关键字出现时发送邮件报警。

```python
import tailer
import smtplib
from email.mime.text import MIMEText
 
def send_mail(body):
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login('youremail@gmail.com', 'password')
    message = MIMEText(body)
    message['Subject'] = 'Log Alert'
    message['From'] = 'youremail@gmail.com'
    message['To'] = 'admin@example.com'
    server.sendmail('youremail@gmail.com', ['admin@example.com'], message.as_string())
    server.quit()
 
for line in tailer.follow(open('/var/log/app.log')):
    if 'Error' in line:
        send_mail(line)

```

**5、自动化部署 Docker 容器脚本：**自动部署 Docker 容器并启动应用程序。

```python
import docker
 
client = docker.from_env()
 
container = client.containers.run(
    'nginx',
    detach=True,
    ports={'80/tcp': 80},
    volumes={'/home/user/app': {'bind': '/usr/share/nginx/html', 'mode': 'ro'}},
)
```

**6、监控网络服务脚本：**检查指定端口上的网络服务是否正在运行，并在出现问题时发送邮件报警。

 ```python
 import socket
 import smtplib
 from email.mime.text import MIMEText
  
 def send_mail(body):
     server = smtplib.SMTP('smtp.gmail.com', 587)
     server.starttls()
     server.login('youremail@gmail.com', 'password')
     message = MIMEText(body)
     message['Subject'] = 'Service Alert'
     message['From'] = 'youremail@gmail.com'
     message['To'] = 'admin@example.com'
     server.sendmail('youremail@gmail.com', ['admin@example.com'], message.as_string())
     server.quit()
  
 while True:
     sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
     result = sock.connect_ex(('localhost', 8080))
  
     if result != 0:
         send_mail('Service is down')
  
     sock.close()
 ```

**7、自动化邮件发送脚本：**从Excel或CSV文件中读取收件人列表，并自动发送电子邮件。

```python
import smtplib
import pandas as pd
from email.mime.text import MIMEText
 
data = pd.read_csv('recipients.csv')
 
for index, row in data.iterrows():
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login('youremail@gmail.com', 'password')
 
    message = MIMEText('This is a test email')
    message['Subject'] = 'Test Email'
    message['From'] = 'youremail@gmail.com'
    message['To'] = row['email']
 
    server.sendmail('youremail@gmail.com', [row['email']], message.as_string())
 
    server.quit()
```

**8、自动化服务器监控脚本：**使用psutil模块监控服务器的各种指标，如CPU、内存、磁盘使用情况

```python
import psutil
 
cpu_percent = psutil.cpu_percent()
memory_percent = psutil.virtual_memory().percent
disk_percent = psutil.disk_usage('/').percent
 
print(f'CPU: {cpu_percent}%')
print(f'Memory: {memory_percent}%')
print(f'Disk: {disk_percent}%')
```

**9、自动化SSH登录脚本：**使用paramiko模块自动化SSH登录远程服务器。

```python
import paramiko
 
ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh.connect('server.example.com', username='user', password='password')
 
stdin, stdout, stderr = ssh.exec_command('ls -l')
 
print(stdout.read().decode('utf-8'))
 
ssh.close()
```

**10、自动化日志监控脚本：**监控日志文件中的关键词，并在匹配时发送电子邮件警报。

```python
import smtplib
import re
from email.mime.text import MIMEText
 
log_file = '/path/to/logfile'
keywords = ['error', 'warning']
 
def send_mail(body):
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login('youremail@gmail.com', 'password')
    message = MIMEText(body)
    message['Subject'] = 'Log Alert'
    message['From'] = 'youremail@gmail.com'
    message['To'] = 'admin@example.com'
    server.sendmail('youremail@gmail.com', ['admin@example.com'], message.as_string())
    server.quit()
 
with open(log_file) as f:
    for line in f:
        if any(keyword in line for keyword in keywords):
            send_mail(f'Log line matched: {line}')

```

