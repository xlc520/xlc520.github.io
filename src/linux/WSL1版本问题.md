---
author: xlc520
title: WSL 问题
description: 
date: 2023-01-26
category: Linux
tag: 
- Linux
- WSL
article: true
timeline: true
icon: linux
password: 
---

# WSL 问题

## 一、Error response from daemon:` open \\.\pipe\docker_engine_windows`

```
docker config ls 

Error response from daemon: open \\.\pipe\docker_engine_windows: The system cannot find the file specified.
```

### 第一种解决方法：

Try running the below commands in the Powershell and start the docker

```
Net stop com.docker.service
```

And then

```
Net start com.docker.service
```

### 第二种：

Alongside the googling I tried asking about this on Sitecore Slack's Docker channel. And [Jeff L'Heureux](https://twitter.com/jflh) from Sitecore suggested that they'd had dealings with Docker Support over a related issue, and had been given a potential fix. And this one didn't involve any uninstalling. The steps he relayed are:

- Fire up a console as Administrator

- Run `cd 'C:\Program Files\Docker\Docker\resources\'`

   

  Run `.\dockerd.exe -G docker-users --config-file c:\programdata\docker\config\daemon.json --register-service`

- Run `start-service docker`

Now this did not work for me - trying to register the docker service raised an error that the service already existed. However I was able to work out a slight alternative to this which did seem to work for me:

- Fire up a console as Administrator
- Run `stop-service docker`
- Run `cd 'C:\Program Files\Docker\Docker\resources\'`
- Run ``.\dockerd.exe --unregister-service`
- Reboot the computer
- Run ``.\dockerd.exe -G docker-users --config-file c:\programdata\docker\config\daemon.json --register-service`
- Reboot the computer
- Restart Docker Desktop
- Put Docker Desktop back into Windows Containers mode

Having done this, I was able to start my containers again, and I could see that the "missing" named pipe had now appeared.

Docker do suggest you might need to change the Docker Engine config in 

`c:\programdata\docker\config\daemon.json`

 to

```json
{
  "experimental": false,
  "hosts": [
    "npipe:////./pipe/docker_engine_windows"
  ]
}
```

But I didn't find this necessary for my machines - which perhaps makes sense because the software was clearly looking for that pipe originally, so it shouldn't need to be told to?

### 第三种：

Try add Optional Feature - Container and Hyper-V to windows.
In Windows 11:
Apps → Optional features → More Windows features → Check Containers and Hyper-V and click OK

or try run:
```powershell
Enable-WindowsOptionalFeature -Online -FeatureName containers –All
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V –All
```

