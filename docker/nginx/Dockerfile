FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf
COPY ssl /etc/nginx/ssl

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]