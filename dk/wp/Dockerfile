FROM wordpress:latest
WORKDIR /var/www/html
RUN chmod g+w /var/www/html/wp-content
RUN cd /var/www/html/wp-content/themes/bs_report_theme && php composer.phar install
EXPOSE 80
