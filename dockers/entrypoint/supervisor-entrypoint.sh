#!/bin/sh

chmod 755 /usr/local/bin/supervisor-init.sh
/usr/local/bin/supervisor-init.sh
exec /usr/bin/supervisord --nodaemon --configuration=/etc/supervisord.conf
