# Remote Server Address
REMOTE_SERVER_ADDRESS="<REMOTE_SERVER_ADDRESS>"
# Remote Server account ID
ID="<YOUR_ID>"

REMOTE_PWD="/home/"
REMOTE_FILENAME=""

LOCAL_PWD="./"

# SCP copy

# remote ---> local
echo scp -r $ID@$REMOTE_SERVER_ADDRESS:$REMOTE_PWD$REMOTE_FILENAME $LOCAL_PWD
scp -r $ID@$REMOTE_SERVER_ADDRESS:$REMOTE_PWD$REMOTE_FILENAME $LOCAL_PWD