FROM ubuntu:14.04
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update
RUN apt-get -y install python-software-properties wget
RUN add-apt-repository -y ppa:nginx/stable
RUN apt-get update

RUN apt-get -y install nginx php5-fpm php5-mysql php-apc php5-imagick php5-imap php5-mcrypt

RUN mkdir -p /var/www/html
WORKDIR /var/www/html
RUN wget http://wordpress.org/latest.tar.gz
ADD ./wp/wp-config.php /var/www/html/wordpress

EXPOSE 80
CMD service php5-fpm start && nginx start
