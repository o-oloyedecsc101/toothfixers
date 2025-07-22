FROM nginx:latest

COPY nginx-primer/nginx/conf.d/* /etc/nginx/conf.d/

RUN mkdir /www

RUN mkdir /www/html

COPY http://localhost:5173 /www/html/
