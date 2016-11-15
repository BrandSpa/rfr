FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
ADD ./default.conf /etc/nginx/conf.d/
RUN mkdir -p /var/www/html
WORKDIR /var/www/html
