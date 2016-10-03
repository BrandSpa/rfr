FROM wordpress:latest
RUN apt-get update && apt-get install -y zip
WORKDIR /var/www/html
ADD . /var/www/html/wp-content
EXPOSE 80
