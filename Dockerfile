FROM wordpress:latest
RUN apt-get update && apt-get install -y zip
WORKDIR /var/www/html
ADD . /var/www/html/wp-content
RUN  cd wp-content/plugins && chmod +x wp_plugins.sh && ./wp_plugins.sh
EXPOSE 80
