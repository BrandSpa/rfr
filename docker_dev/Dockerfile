FROM wordpress:latest
RUN rm -rf /usr/local/etc/php/conf.d/opcache-recommended.ini
WORKDIR /var/www/html
ADD . /var/www/html/wp-content
EXPOSE 80
