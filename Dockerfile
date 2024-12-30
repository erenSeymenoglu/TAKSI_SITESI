# Nginx image'ını kullanıyoruz
FROM nginx:latest

# Projenizin statik dosyalarını Nginx'in root dizinine kopyalıyoruz
COPY ./ /usr/share/nginx/html/

# Nginx sunucusunu çalıştırıyoruz
EXPOSE 80

# Varsayılan Nginx başlatma komutunu çalıştırıyoruz
CMD ["nginx", "-g", "daemon off;"]