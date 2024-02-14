# Node.js altyapısını içeren resmi bir imajdan başlayın
FROM node:14-alpine

# Uygulama dizinini oluşturun ve çalışma dizini olarak belirtin
WORKDIR /app

# Gerekli dosyaları ve bağımlılıkları kopyalayın
COPY package.json package-lock.json ./
RUN npm install

# Geri kalan dosyaları kopyalayın
COPY . .

# Uygulamayı oluşturun
RUN npm run build

# Uygulamayı çalıştırın
CMD ["npm", "start"]
