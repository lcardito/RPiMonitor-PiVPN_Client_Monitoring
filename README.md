#RPi-Monitor PiVPN clients addon

## Install
```shell script
git clone https://github.com/Agente404/RPiMonitor-PiVPN_Client_Monitoring.git /usr/share/rpimonitor/web/addons/pivpn

#TODO LC: can it be done with a symlink?
cp /usr/share/rpimonitor/web/addons/pivpn/pivpn.conf /etc/rpimonitor/template/
```

## Configure

```shell script
web.addons.X.name=PiVPN                                                                                                                                                    
web.addons.X.addons=pivpn                                                                                                                                                  

include=/etc/rpimonitor/template/pivpn.conf
```


## Restart
```shell script
sudo service rpimonitor restart
```
