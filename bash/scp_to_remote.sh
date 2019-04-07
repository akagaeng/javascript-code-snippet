# Remote Server Address
REMOTE_SERVER_ADDRESS="<REMOTE_SERVER_ADDRESS>"
# Remote Server account ID
ID="<YOUR_ID>"

LOCAL_PWD="./"
LOCAL_FILENAME="*"

REMOTE_PWD="/home/"

# SCP copy

# local ---> server
echo scp -r $LOCAL_PWD$LOCAL_FILENAME $ID@$REMOTE_SERVER_ADDRESS:$REMOTE_PWD
scp -r $LOCAL_PWD$LOCAL_FILENAME $ID@$REMOTE_SERVER_ADDRESS:$REMOTE_PWD