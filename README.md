<div align="center"> 
    <img className="w-[60px]" src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_prisma_icon_130234.png" alt="" width="250" />
    <img className="w-[60px]" src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-development-mysql-logo-code-icon-9.png" alt="" width="250" /> &nbsp; &nbsp;
    <img className="w-[60px] ml-[10px]" src="https://www.datocms-assets.com/98835/1684410508-image-7.png" alt="" width="250" />
</div>

<h1 align="center">First CRUD Prisma - MySQL - NextJS</h1>
- a
- a
- a
- a

**Lưu Ý**
- file `.env` truyền đường dẫn database MySQL vào.

## Run
### **Backend** (chạy **Backend** trước)
- B1: `cd server`
- B2: `npm install`
- B3: Dùng lệnh này để migrate thuộc tính của database vào MySQL 
```sh
npx prisma migrate dev --name init

hoặc

yarn prisma migrate dev --name init
```
- B4: `npm run dev`

### **Frontend** (chạy **Frontend** sau **Backend**)
- `cd client`
- `npm install`
- `npm run dev`
