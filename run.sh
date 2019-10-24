
if [ ! -n "$SERVER_REDIRECT" ] ; then
    echo "Environment variable SERVER_REDIRECT is not set, exiting."
    exit 1
fi

if [ ! -n "$SERVER_NAME" ] ; then
    SERVER_NAME='localhost'
fi

expr match "$SERVER_REDIRECT_CODE" '30[12378]$' > /dev/null || SERVER_REDIRECT_CODE='301'

expr match "$SERVER_REDIRECT_POST_CODE" '30[12378]$' > /dev/null || SERVER_REDIRECT_POST_CODE=$SERVER_REDIRECT_CODE

if [ ! -n "$SERVER_REDIRECT_PATH" ] ; then
    SERVER_REDIRECT_PATH='$request_uri'
fi

if [ ! -n "$SERVER_REDIRECT_SCHEME" ] ; then
    SERVER_REDIRECT_SCHEME='$redirect_scheme'
fi

if [ ! -n "$SERVER_ACCESS_LOG" ] ; then
    SERVER_ACCESS_LOG='/dev/stdout'
fi

if [ ! -n "$SERVER_ERROR_LOG" ] ; then
    SERVER_ERROR_LOG='/dev/stderr'
fi

sed -i "s|\${SERVER_REDIRECT}|${SERVER_REDIRECT}|" /etc/nginx/conf.d/default.conf
sed -i "s|\${SERVER_NAME}|${SERVER_NAME}|" /etc/nginx/conf.d/default.conf
sed -i "s|\${SERVER_REDIRECT_CODE}|${SERVER_REDIRECT_CODE}|" /etc/nginx/conf.d/default.conf
sed -i "s|\${SERVER_REDIRECT_POST_CODE}|${SERVER_REDIRECT_POST_CODE}|" /etc/nginx/conf.d/default.conf
sed -i "s|\${SERVER_REDIRECT_PATH}|${SERVER_REDIRECT_PATH}|" /etc/nginx/conf.d/default.conf
sed -i "s|\${SERVER_REDIRECT_SCHEME}|${SERVER_REDIRECT_SCHEME}|" /etc/nginx/conf.d/default.conf

ln -sfT "$SERVER_ACCESS_LOG" /var/log/nginx/access.log
ln -sfT "$SERVER_ERROR_LOG" /var/log/nginx/error.log

exec nginx -g 'daemon off;'
